import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(process.env.API_BASE_URL!, {
      method: 'POST',
      headers: {
        'x-api-key': process.env.API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appName: process.env.APP_NAME!,
        moduleName: 'hostingfeature',
        query: {},
        projection: {},
        limit: 0,
        skip: 0,
        order: 'descending',
        sortBy: '_id'
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching hosting features:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch hosting features' },
      { status: 500 }
    );
  }
}