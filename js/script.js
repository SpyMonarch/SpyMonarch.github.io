// ==============
// Toggle
// ==============
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navigasi');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// =============
// Navbar
// =============
window.addEventListener('scroll', function () {
  var header = document.querySelector('.navbar-dekstop');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// =============
// Contact form
// =============
const scriptURL = 'https://script.google.com/macros/s/AKfycbwb7durgfpfGUpI5JQPwRrpFYnHeEe-9SGkr372CcH7TfJWTCTJ3OfDFVqSXRPs2ty1LA/exec';
const form = document.forms['contact-us'];
const btnKirim = document.querySelector('.kirim');
const btnLoading = document.querySelector('.loading');
const allertKu = document.querySelector('.allert-ku');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ketika tombol submit diklik
  // Tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // Tampilkan allert
      allertKu.classList.toggle('d-none');
      // Reset form
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
