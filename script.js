document.querySelector('form').addEventListener('submit', function(event) {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
    alert('Please enter your email/phone and password.');
    event.preventDefault(); // Prevents the form from submitting
  }
});