import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: Request) {
  try {
    // Get visitor IP
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");

    const ip =
      forwarded?.split(",")[0].trim() ||
      realIp ||
      "Unknown";

    // Get browser information
    const userAgent =
      request.headers.get("user-agent") || "Unknown";

    let browser = "Unknown";

    if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Firefox")) browser = "Firefox";
    else if (userAgent.includes("Safari")) browser = "Safari";
    else if (userAgent.includes("Edge")) browser = "Edge";

    // Insert into Supabase
    const { error } = await supabaseAdmin
      .from("scans")
      .insert([
        {
          ip,
          browser,
          user_agent: userAgent,
        },
      ]);

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.redirect(
      new URL("/thanks", request.url)
    );
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}