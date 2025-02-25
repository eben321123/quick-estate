// script.js

// Add event listener to the search form
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission (to avoid page refresh)

    // Get form values
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;

    // Display the input values in the results section
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Search Results</h2>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Price Range:</strong> ${price}</p>
        <p><strong>Bedrooms:</strong> ${bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${bathrooms}</p>
    `;
});
