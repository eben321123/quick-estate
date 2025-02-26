// script.js

// Add event listener to the search form
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission (to avoid page refresh)

    // Get form values
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const status = document.getElementById('status') ? document.getElementById('status').value : '';
    const basement = document.getElementById('basement') ? document.getElementById('basement').value : '';
    const financing = document.getElementById('financing') ? document.getElementById('financing').value : '';
    const yearBuilt = document.getElementById('year-built') ? document.getElementById('year-built').value : '';

    // Display the input values in the results section
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Search Results</h2>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Price Range:</strong> ${price}</p>
        <p><strong>Bedrooms:</strong> ${bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${bathrooms}</p>
        <p><strong>Property Status:</strong> ${status}</p>
        <p><strong>Basement:</strong> ${basement}</p>
        <p><strong>Accepted Financing:</strong> ${financing}</p>
        <p><strong>Year Built:</strong> ${yearBuilt}</p>
    `;
});

// Toggle Advanced Filters
document.getElementById('see-more-btn').addEventListener('click', function () {
    const advancedFilters = document.getElementById('advanced-filters');
    if (advancedFilters.classList.contains('hidden')) {
        advancedFilters.classList.remove('hidden');
    } else {
        advancedFilters.classList.add('hidden');
    }
});
