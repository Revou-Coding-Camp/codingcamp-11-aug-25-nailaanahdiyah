// Animasi fade-in saat scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

faders.forEach(fade => observer.observe(fade));

// Cek apakah gambar background termuat
const bgImg = new Image();
bgImg.src = 'img/pixel-background.png';

bgImg.onload = function() {
    console.log('%c✅ Background pixel art berhasil dimuat!', 'color: green; font-weight: bold;');
};

bgImg.onerror = function() {
    console.error('❌ Background pixel art gagal dimuat! Periksa path atau nama file.');
};
