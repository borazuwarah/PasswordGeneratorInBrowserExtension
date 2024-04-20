

document.getElementById('generate').addEventListener('click', function() {
  var passwordLength = document.getElementById('password-length').value;
  var password = generatePassword(passwordLength);
  document.getElementById('password').innerText = password;
});

function generatePassword(length) {
  var charset = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789.,:;-_<>çÇ^+*'?¡¿=()/&%$·{}[]|@#~€¬\\";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Enter button
var passwordLengthInput = document.getElementById('password-length');
passwordLengthInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    document.getElementById('generate').click();
  }
});