// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// House type details modal
function showDetails(type) {
    const houseDetails = {
        '36': {
            title: 'Tipe 36',
            price: 'Rp 350.000.000',
            specs: [
                'Luas Bangunan: 36 m²',
                'Luas Tanah: 72 m²',
                '2 Kamar Tidur',
                '1 Kamar Mandi',
                'Ruang Tamu',
                'Carport'
            ]
        },
        '45': {
            title: 'Tipe 45',
            price: 'Rp 450.000.000',
            specs: [
                'Luas Bangunan: 45 m²',
                'Luas Tanah: 90 m²',
                '2 Kamar Tidur',
                '2 Kamar Mandi',
                'Ruang Tamu',
                'Ruang Keluarga',
                'Carport'
            ]
        },
        '54': {
            title: 'Tipe 54',
            price: 'Rp 550.000.000',
            specs: [
                'Luas Bangunan: 54 m²',
                'Luas Tanah: 120 m²',
                '3 Kamar Tidur',
                '2 Kamar Mandi',
                'Ruang Tamu',
                'Ruang Keluarga',
                'Dapur',
                'Carport'
            ]
        }
    };

    const details = houseDetails[type];
    const specsList = details.specs.map(spec => `<li>${spec}</li>`).join('');
    
    const modalHtml = `
        <div class="modal fade" id="houseModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${details.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <h6 class="text-primary">${details.price}</h6>
                        <ul>${specsList}</ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" class="btn btn-primary" onclick="contactAgent('${details.title}')">Hubungi Agent</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.querySelector('#houseModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add new modal to document
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('houseModal'));
    modal.show();
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
    this.reset();
});

// Contact agent function
function contactAgent(houseType) {
    const modal = bootstrap.Modal.getInstance(document.getElementById('houseModal'));
    modal.hide();
    
    // Scroll to contact form
    document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Pre-fill message in contact form
    const messageArea = document.querySelector('#contact textarea');
    messageArea.value = `Saya tertarik dengan ${houseType}. Mohon informasi lebih lanjut.`;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.facility-item, .house-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.facility-item, .house-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});
