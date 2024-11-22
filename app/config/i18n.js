const i18n = require('i18n');
const path = require('path');

// Configure i18n
i18n.configure({
    locales: ['en', 'es', 'fr'], // Add supported locales here (e.g., English, Spanish, French)
    defaultLocale: 'en',        // Default language
    directory: path.join(__dirname, '../locales'), // Directory where translation files are stored
    autoReload: true,           // Reload locale files when they are updated
    syncFiles: true,            // Sync new keys across all language files
    cookie: 'lang',             // Name of the cookie to store language preference
    queryParameter: 'lang',     // Allow language switching via query parameters
});

// Export the middleware
module.exports = i18n;
