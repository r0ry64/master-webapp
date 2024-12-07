function renderSettings(container) {
    const currentTheme = localStorage.getItem('theme') || 'light';

    container.innerHTML = `
        <section class="settings">
            <h2>Settings</h2>
            <label for="dark-mode-toggle">
                <input type="checkbox" id="dark-mode-toggle" ${currentTheme === 'dark' ? 'checked' : ''}>
                Enable Dark Mode
            </label>
        </section>
    `;

    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('change', () => {
        const newTheme = toggle.checked ? 'dark' : 'light';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });

    document.body.className = currentTheme;
}
