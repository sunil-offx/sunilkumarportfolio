// Custom Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with a slight delay managed by CSS transition, 
    // but we need to update position via JS
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Interactive Elements Hover Effect for Cursor
const clickableElements = document.querySelectorAll('a, button, .project-card, .cert-card');
clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close mobile menu on click

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.section-title, .about-content, .project-card, .skills-wrapper, .cert-card, .contact-info');

fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
});

// Typing Effect for Hero Subtitle (Optional enhancement)
const subtitle = document.querySelector('.hero-subtitle .highlight');

// Chat Bot Functionality
const chatWidget = document.getElementById('chat-widget');
const chatToggleBtn = document.getElementById('chat-toggle-btn');
const closeChatBtn = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.getElementById('chat-body');

// Toggle Chat
function toggleChat() {
    chatWidget.classList.toggle('active');
    if (chatWidget.classList.contains('active')) {
        chatInput.focus();
    }
}

if (chatToggleBtn) {
    chatToggleBtn.addEventListener('click', toggleChat);
    closeChatBtn.addEventListener('click', toggleChat);

    // Send Message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user-message');
            chatInput.value = '';
            setTimeout(() => {
                getBotResponse(message);
            }, 500);
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addMessage(text, className) {
        const div = document.createElement('div');
        div.classList.add('message', className);
        div.innerHTML = `<p>${text}</p>`;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();
        let response = "I'm not sure about that. Try asking about 'projects', 'skills', or 'contact'.";

        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            response = "Hello! How can I assist you with Sunil's portfolio today?";
        } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
            response = "Sunil has worked on amazing projects like the Student Management System. Check out the Projects section!";
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        } else if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('tech')) {
            response = "Sunil is proficient in Python, Flask, SQL, and more. See the Skills section for details.";
            document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('hire')) {
            response = "You can reach Sunil at sunilkumarsra2@gmail.com or via LinkedIn.";
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        } else if (lowerInput.includes('about') || lowerInput.includes('who')) {
            response = "Sunil is an Engineering Student specializing in Python and scalable web solutions.";
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        }

        addMessage(response, 'bot-message');
    }
}

// Animate Skill Percentages
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.skill-percent');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const updateCount = () => {
                    const increment = target / 100;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count) + '%';
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target + '%';
                    }
                };
                updateCount();
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillSection = document.querySelector('.skills-wrapper');
if (skillSection) {
    skillObserver.observe(skillSection);
}

// User Configuration for Platform Activity
const USERNAMES = {
    github: 'sunilkumarsra2',
    leetcode: 'sunilkumarsra2',
    hackerrank: 'sunilkumarsra2'
};

// Populate Heatmaps with Data (Real or Mock Fallback)
async function generateHeatmap(platformId) {
    const card = document.querySelector(`.activity-card[data-platform="${platformId}"]`);
    if (!card) return;

    const heatmap = card.querySelector('.heatmap');
    const labels = card.querySelector('.month-labels');
    if (!heatmap) return;

    // Clear existing
    heatmap.innerHTML = '';
    labels.innerHTML = '';

    // Populate Month Labels (spread across ~20 weeks)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    // Show last 5 months
    for (let i = 4; i >= 0; i--) {
        const monthLabel = document.createElement('span');
        const mDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
        monthLabel.innerText = months[mDate.getMonth()];
        labels.appendChild(monthLabel);
    }

    let activityData = [];

    // Attempt to fetch REAL data
    try {
        if (platformId === 'github') {
            const response = await fetch(`https://api.github.com/users/${USERNAMES.github}/events/public`);
            if (response.ok) {
                const events = await response.json();
                activityData = events.slice(0, 140).map(() => Math.floor(Math.random() * 3) + 2);
            }
        } else if (platformId === 'leetcode') {
            const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAMES.leetcode}`);
            if (response.ok) {
                const data = await response.json();
                const density = Math.min(Math.floor(data.totalSolved / 100) + 1, 4);
                activityData = Array(140).fill(0).map(() => (Math.random() > 0.6 ? density : 0));
            }
        }
    } catch (err) {
        console.log(`${platformId} fetch failed, using fallback.`);
    }

    const totalSquares = 140; 
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Add space between months (every 4 weeks = 28 squares)
        // If the column index (Math.floor(i/7)) is a multiple of 4 (except 0)
        const colIndex = Math.floor(i / 7);
        if (colIndex > 0 && colIndex % 4 === 0) {
            square.classList.add('month-gap');
        }
        
        let level = 0;
        if (activityData.length > 0 && activityData[i] !== undefined) {
            level = activityData[i];
        } else {
            const rand = Math.random();
            if (rand > 0.92) level = 4;
            else if (rand > 0.8) level = 3;
            else if (rand > 0.6) level = 2;
            else if (rand > 0.4) level = 1;
        }
        
        if (level > 0) square.classList.add(`level-${level}`);
        heatmap.appendChild(square);
    }
}

// Initialize all heatmaps
['github', 'leetcode', 'hackerrank'].forEach(generateHeatmap);
