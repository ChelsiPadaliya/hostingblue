import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://neapi.hanaplatform.com/api/dynamic/getdata/public', {
      method: 'POST',
      headers: {
        'x-api-key': 'dhtr348768uhjkh544fg',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appName: 'app6121010948209',
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

    if (data.success) {
      // Filter only features that should show on homepage
      const homepageFeatures = data.data.filter(
        (feature: any) => feature.sectionData.hostingfeature.showinhomepage === true
      );

      return NextResponse.json({
        success: true,
        data: homepageFeatures
      });
    }

    return NextResponse.json({ success: false, data: [] });
  } catch (error) {
    console.error('Error fetching hosting features:', error);
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}