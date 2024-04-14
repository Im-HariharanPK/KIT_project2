document.addEventListener('DOMContentLoaded', function () {
    // Code to run when the DOM is fully loaded
    console.log('DOM loaded');
  
    // Example: Fetch assets from the server and display them
    fetch('/assets')
      .then((response) => response.json())
      .then((data) => {
        console.log('Assets:', data);
        // Code to display assets on the webpage
        const assetsList = document.getElementById('assets-list');
        assetsList.innerHTML = ''; // Clear previous content
        data.forEach((asset) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${asset.id}: ${asset.type} - ${asset.makeModel}`;
          assetsList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Error fetching assets:', error);
      });
  });
  