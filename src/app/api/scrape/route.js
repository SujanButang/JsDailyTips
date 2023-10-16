import axios from "axios";
import cheerio from "cheerio";
import { NextResponse } from "next/server";

import js from "@/models/js";
import { connectMongoDB } from "@/utils/mongodb";

async function fetchData(url) {
  const response = await axios.get(url);
  return cheerio.load(response.data);
}

export async function GET(req) {
  try {
    await connectMongoDB();
    const data = [];
    const baseURL = "https://www.jstips.co";

    const $ = await fetchData(`${baseURL}/en/javascript`);
    const requests = [];

    $(".post-list>li").each((i, element) => {
      const $element = $(element);
      const title = $element.find("h2").text();
      const relativeUrl = $element.find("h2>a").attr("href");
      const fullUrl = `${baseURL}${relativeUrl}`;

      requests.push(
        fetchData(fullUrl).then(($$) => {
          const content = $$(".post-content").html();
          return { title, content };
        })
      );
    });

    const results = await Promise.all(requests);

    for (const result of results) {
      const { title, content } = result;
      const titleExists = await js.findOne({ title });
      if (!titleExists) {
        const newTip = new js({ title, content });
        await newTip.save();
      }
      data.push(result);
    }

    return new NextResponse(JSON.stringify("Data Added successfully"), {
      status: 200,
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
