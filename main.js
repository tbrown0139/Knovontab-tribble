const DEFAULT_IMAGE_URL = 'utah-default.jpg'; // Local fallback image
const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random?query=utah&client_id=1YhjZDYm-4BCbbVjF2hnUn_iRA2SK2xlJqI3dnl6XrQ';
const greetingElement = document.getElementById('greeting');
const dateElement = document.getElementById('date');
const appsContainer = document.getElementById('apps-container');
const now = new Date();
const hours = now.getHours();
const month = now.getMonth();
const date = now.getDate();

// Function to set the background image using the Unsplash API
async function setBackgroundImage() {
    try {
        const response = await fetch(UNSPLASH_API_URL);
        const data = await response.json();
        document.body.style.backgroundImage = `url(${data.urls.regular})`;
    } catch (error) {
        console.error('Error fetching image from Unsplash. Using fallback image.', error);
        document.body.style.backgroundImage = `url(${DEFAULT_IMAGE_URL})`;
    }
}

// Function to format the date
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Display the formatted date
dateElement.textContent = formatDate(now);

// Determine the time-based greeting
if ((month === 11 && date === 24) || (month === 11 && date === 25)) {
    greetingElement.textContent = 'Merry Christmas';
    setBackgroundImage();
} else if (month === 11 && date === 31) {
    greetingElement.textContent = 'Happy New Year';
    setBackgroundImage();
} else if (month === 0 && date === 1) {
    greetingElement.textContent = 'Happy New Year';
    setBackgroundImage();
} else if (month === 6 && date === 4) {
    greetingElement.textContent = 'Happy 4th of July';
    setBackgroundImage();
} else if (month === 10 && date === 11) {
    greetingElement.textContent = 'Happy Birthday to our founder';
    setBackgroundImage();
} else if (month === 9 && date === 31) {
    greetingElement.textContent = 'Happy Halloween';
    setBackgroundImage();
} else if (hours < 12) {
    greetingElement.textContent = 'Good Morning';
    setBackgroundImage();
} else if (hours < 18) {
    greetingElement.textContent = 'Good Afternoon';
    setBackgroundImage();
} else {
    greetingElement.textContent = 'Good Evening';
    setBackgroundImage();
}

// List of apps with their names, URLs, and cloud-based icons
const apps = [
    { name: 'Disney Plus', url: 'https://disneyplus.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
    { name: 'Knovon', url: 'https://knovon.org', icon: 'https://mytab.knovon.net/knovontablogo.png' },
    { name: 'Gmail', url: 'https://mail.google.com', icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' },
    { name: 'Zoho Mail', url: 'https://mail.zoho.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Zoho-logo.png' },
    { name: 'Roblox', url: 'https://roblox.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Roblox_Logo.svg' },
    { name: 'GitHub', url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Canva', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Canva_Logo.png' },
    { name: 'ChatGPT', url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' }
];

// Function to randomly select 3 apps and display them
function displayRandomApps() {
    const selectedApps = apps.sort(() => 0.5 - Math.random()).slice(0, 3);
    selectedApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
            <a href="${app.url}" target="_blank">
                <img src="${app.icon}" alt="${app.name} Icon">
                <div>${app.name}</div>
            </a>
        `;
        appsContainer.appendChild(appCard);
    });
}

displayRandomApps();
