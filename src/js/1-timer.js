import flatpickr from "flatpickr";
import iziToast from "izitoast";

let userSelectedDate = null;
let countdownInterval = null;

const toastOptions = {
    icon: 'icon-bi_x-octagon',
    position: "topRight",
    title: 'Error',
    progressBarColor: 'rgb(181, 27, 27)',
    message: "Please choose a date in the future",
};

const customLocale = {
    weekdays: {
        shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    firstDayOfWeek: 1
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    locale: customLocale,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate <= new Date()) {
            iziToast.error(toastOptions);
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
};

const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("button[data-start]");
const timerFields = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
};

flatpickr('#datetime-picker', options);

startButton.addEventListener("click", () => {
    if (userSelectedDate && userSelectedDate > new Date()) {
        startButton.disabled = true;
        datetimePicker.disabled = true;
        startCountdown(userSelectedDate);
    }
});

function startCountdown(endTime) {
    countdownInterval = setInterval(() => {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            updateTimerFields(0, 0, 0, 0);
            datetimePicker.disabled = false;
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeLeft);
        updateTimerFields(days, hours, minutes, seconds);
    }, 1000);
}

function updateTimerFields(days, hours, minutes, seconds) {
    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}