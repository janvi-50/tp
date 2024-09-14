// JavaScript to handle contact form display
document.querySelector('.signin a').addEventListener('click', function () {
    document.querySelector('.contact-form').style.display = 'flex';
});

document.querySelector('#form-close').addEventListener('click', function () {
    document.querySelector('.contact-form').style.display = 'none';
});
document.getElementById('order-taxi-btn').addEventListener('click', function() {
    document.querySelector('.main-footer').scrollIntoView({ behavior: 'smooth' });
});
