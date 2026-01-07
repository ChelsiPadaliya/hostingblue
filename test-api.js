// Test script to verify API functionality
// Run this in your browser console or as a Node.js script

const testAPI = async () => {
  try {
    const response = await fetch('/api/hosting-plans');
    const data = await response.json();
    console.log('API Response:', data);
    
    if (data.success && data.data) {
      console.log('Available hosting types:');
      data.data.forEach((plan, index) => {
        console.log(`Plan ${index + 1}:`, {
          name: plan.sectionData.hostingplan.planname,
          types: plan.sectionData.hostingplan.type,
          attributes: plan.sectionData.hostingplan.plantable
        });
      });
    }
  } catch (error) {
    console.error('API Test Error:', error);
  }
};

// Uncomment to run the test
// testAPI();

export default testAPI;