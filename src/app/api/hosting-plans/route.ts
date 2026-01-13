import { NextRequest, NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;
export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dynamic/getdata/public`, {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appName: "app6121010948209",
        moduleName: "hostingplan",
        query: {},
        projection: {},
        limit: 0,
        skip: 0,
        order: "descending",
        sortBy: "_id",
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch hosting plans" },
      { status: 500 }
    );
  }
}
