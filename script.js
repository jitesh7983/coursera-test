document.addEventListener('DOMContentLoaded', function () {
    const specialsTile = document.getElementById('specialsTile');
    const contentDiv = document.getElementById('content');

    specialsTile.addEventListener('click', function () {
        // Array of possible categories (you can customize this based on your actual categories)
        const categories = ['Lunch', 'Dinner', 'Sushi', 'Desserts', 'Drinks'];

        // Get a random category
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        // Redirect to the single category page with the random category
        contentDiv.innerHTML = `<h2>${randomCategory} Specials</h2>`;
    });
});
