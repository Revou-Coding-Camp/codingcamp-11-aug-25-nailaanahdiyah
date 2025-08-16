welcomeSpeech();
function welcomeSpeech() {
  const userName = prompt("Hi! What's your name?");
  if (userName != '') {
    document.getElementById("user-greeting").textContent = userName;
  }
}


//responsive navbar toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

//message form handling
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("messageForm");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("messageText");
    const messageList = document.getElementById("messageList");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        //ambil input dari form
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name && message) {
            //elemen list buat message
            const li = document.createElement("li");
            li.classList.add("p-2", "bg-white", "border", "rounded");
            li.innerHTML = `<strong>${name}:</strong> ${message}`;

            //input ke dalam daftar pesan
            messageList.appendChild(li);

            //reset form
            form.reset();
        }
    });
});


//animasi fade-in scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

faders.forEach(fade => observer.observe(fade));

//cek bg (f12)
const bgImg = new Image();
bgImg.src = 'img/pixel-background.png';

bgImg.onload = function () {
    console.log('%c Background pixel art berhasil dimuat!', 'color: green; font-weight: bold;');
};

bgImg.onerror = function () {
    console.error('Background pixel art gagal dimuat! Periksa path atau nama file.');
};
