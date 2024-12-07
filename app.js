// app.js
console.log('app.js loaded');

// Define router and page rendering functions directly here

function router(page) {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = ''; // Clear existing content
    localStorage.setItem('lastPage', page);
    switch (page) {
        case 'home':
            renderHome(appContainer);
            break;
        case 'weather':
            renderWeather(appContainer);
            break;
        case 'tasks':
            renderTasks(appContainer);
            break;
        case 'settings':
            renderSettings(appContainer);
            break;
        default:
            renderHome(appContainer);
    }
}

// Event listener for navigation
const navbar = document.getElementById('navbar');
navbar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const page = e.target.dataset.page;
        router(page);
    }
});

// Initialize with the last visited page or default to home
const lastPage = localStorage.getItem('lastPage') || 'home';
router(lastPage);
