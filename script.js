const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');
const bookingChoiceModal = document.getElementById('bookingChoiceModal');
const bookingModal = document.getElementById('bookingModal');
const registerModal = document.getElementById('registerModal');

// Navigation Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Modal Controls
function openBooking() {
    if (bookingModal) bookingModal.style.display = 'none';
    if (registerModal) registerModal.style.display = 'none';
    if (bookingChoiceModal) {
        bookingChoiceModal.style.display = 'block';
    } else if (bookingModal) {
        bookingModal.style.display = 'block';
    }
}

function closeBooking() {
    if (bookingChoiceModal) bookingChoiceModal.style.display = 'none';
    if (bookingModal) bookingModal.style.display = 'none';
}

function openIndividualBooking() {
    if (bookingChoiceModal) bookingChoiceModal.style.display = 'none';
    if (registerModal) registerModal.style.display = 'none';
    if (bookingModal) bookingModal.style.display = 'block';
}

function openRegister() {
    if (bookingChoiceModal) bookingChoiceModal.style.display = 'none';
    if (bookingModal) bookingModal.style.display = 'none';
    if (registerModal) registerModal.style.display = 'block';
}

function closeRegister() {
    if (registerModal) registerModal.style.display = 'none';
}

window.onclick = (e) => {
    if (bookingChoiceModal && e.target == bookingChoiceModal) closeBooking();
    if (bookingModal && e.target == bookingModal) closeBooking();
    if (registerModal && e.target == registerModal) closeRegister();
};

// Conditional Service Logic
function updateServiceOptions() {
    const locationType = document.getElementById('locationType').value;
    const servType = document.getElementById('servType');
    servType.innerHTML = ""; // Reset

    const services = {
        "Digital": [
            "Online Group Circle",
            "Digital Self-Care Webinar",
            "Remote 1-on-1 Session"
        ],
        "Physical": [
            "In-Person Counselling (Premium)",
            "Physical Fitness & Yoga",
            "Pilates Session",
            "Workplace Wellness (On-site)"
        ]
    };

    if (services[locationType]) {
        services[locationType].forEach(s => {
            let opt = document.createElement("option");
            opt.value = s;
            opt.innerHTML = s;
            servType.appendChild(opt);
        });
    }
}

// Mood Check Interaction
function checkMood(e) {
    const t = document.getElementById('mood-response');
    const n = {
        happy: "Wonderful! Share your positive energy today.",
        stressed: "Take a breath. Inhale for 4s, exhale for 4s.",
        sad: "It's okay to feel this way. Be gentle with yourself.",
        anxious: "Grounding Tip: Name 3 things you can see right now."
    };
    t.innerText = n[e];
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});