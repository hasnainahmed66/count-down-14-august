const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const messageElement = document.getElementById('message');
const headingElement = document.getElementById('heading');

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let eventDate = new Date(currentYear, 7, 14); // August 14

    // If today is past August 14, set the countdown to next year's August 14
    if (now > eventDate) {
        eventDate = new Date(currentYear + 1, 7, 14);
    }

    const totalSeconds = (eventDate - now) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    // Check if today is August 14
    if (now.getMonth() === 7 && now.getDate() === 14) {
        messageElement.innerHTML = 'Happy Independence Day!';
        headingElement.innerHTML = 'Happy Independence Day!';
        messageElement.classList.add('animate');
        headingElement.classList.add('animate');
    } else {
        messageElement.innerHTML = '';
        headingElement.innerHTML = 'Countdown to 14 August';
        messageElement.classList.remove('animate');
        headingElement.classList.remove('animate');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();