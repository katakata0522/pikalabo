document.addEventListener('DOMContentLoaded', () => {
    try {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        if (!body) {
            console.error('Error: document.body is not available.');
            return;
        }

        // Function to set the theme
        const setTheme = (isDark) => {
            if (isDark) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        };

        // 1. Check for user's OS preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDark) {
            setTheme(prefersDark.matches);

            // 2. Listen for changes in OS preference
            prefersDark.addEventListener('change', (e) => {
                setTheme(e.matches);
            });
        }


        // 3. Toggle theme on button click
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                setTheme(!body.classList.contains('dark-mode'));
            });
        } else {
            console.warn('Theme toggle button with id "theme-toggle" not found.');
        }
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Global error handler for synchronous errors
window.addEventListener('error', (event) => {
    console.error('An unexpected synchronous error occurred:', event.error);
    // In a real application, you might send this error to a logging service
});

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('An unexpected asynchronous error occurred:', event.reason);
    // In a real application, you might send this error to a logging service
});
