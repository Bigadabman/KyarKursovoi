// Get all links in the header and categories
const links = document.querySelectorAll('header a,.categories-block a');

// Add an event listener to each link
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Get the text of the link
    const category = link.textContent.trim();

    // Create a JSON object with the category
    const jsonData = { category: category };

    // Pass the JSON data to the next page
    // You can use a library like jQuery to make an AJAX request
    // or use the Fetch API to send the data to the server
    // For this example, I'll use the Fetch API
    fetch('catalog.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
     .then((response) => response.text())
     .then((data) => console.log(data))
     .catch((error) => console.error(error));

  });
});