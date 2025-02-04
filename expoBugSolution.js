// Solution: Use async/await for better error handling and clarity
async function fetchData() {
  try {
    const response = await fetch('some-api-endpoint');
    const data = await response.json();
    // Process data
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error appropriately (e.g., display a message to the user)
  }
}

// Example usage:
fetchData();

// Alternative if using promises:
function fetchDataPromise() {
  fetch('some-api-endpoint')
    .then(response => response.json())
    .then(data => {
      // Process data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

fetchDataPromise();