function router(page) {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '';
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

const navbar = document.getElementById('navbar');
navbar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const page = e.target.dataset.page;
        router(page);
    }
});

const lastPage = localStorage.getItem('lastPage') || 'home';
router(lastPage);
