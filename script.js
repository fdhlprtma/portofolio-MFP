// script.js
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle("show");
});

document.querySelectorAll('.project-item').forEach(item => {
    const image = item.querySelector('.project-image');
    const content = item.querySelector('.project-content');

    image.addEventListener('click', function() {
        item.classList.toggle('active'); // Menambahkan atau menghapus kelas aktif

        // Jika ingin menutup proyek lain saat satu proyek dibuka
        document.querySelectorAll('.project-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });

    item.addEventListener('mouseover', function() {
        content.style.display = 'block'; // Tampilkan konten saat mouseover
        content.style.opacity = '1'; // Tampilkan dengan transisi
    });

    item.addEventListener('mouseout', function() {
        if (!item.classList.contains('active')) {
            content.style.display = 'none'; // Sembunyikan konten saat mouseout jika tidak aktif
            content.style.opacity = '0'; // Sembunyikan dengan transisi
        }
    });
});


// Mengubah garis hamburger menjadi salib
hamburger.addEventListener("click", function () {
    const lines = document.querySelectorAll(".line");
    lines.forEach((line, index) => {
        if (index === 0) {
            line.style.transform = hamburger.classList.contains("active") ? "translateY(12px) rotate(45deg)" : "translateY(0) rotate(0)";
        } else if (index === 1) {
            line.style.opacity = hamburger.classList.contains("active") ? "0" : "1";
        } else if (index === 2) {
            line.style.transform = hamburger.classList.contains("active") ? "translateY(-12px) rotate(-45deg)" : "translateY(0) rotate(0)";
        }
    });
});


// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
});

function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Encode the message
    const whatsappMessage = `Nama: ${name}\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // URL WhatsApp
    const phoneNumber = '+6282218457541'; // Ganti dengan nomor WhatsApp Anda (format: country code + phone number)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Buka tautan WhatsApp
    window.open(whatsappUrl, '_blank');
}