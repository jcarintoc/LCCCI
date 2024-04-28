document.getElementById('forgotPasswordLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('forgotPasswordSection').style.display = 'block';
});

document.getElementById('backToLoginLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('forgotPasswordSection').style.display = 'none';
});

document.getElementById('resetPasswordButton').addEventListener('click', function () {
  var resetEmail = document.getElementById('resetEmail').value;
  // Implement your reset password logic here
  alert("A password reset link has been sent to " + resetEmail);
});
