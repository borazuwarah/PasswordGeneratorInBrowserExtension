document.getElementById('generate').addEventListener('click', function() {
  var passwordLength = document.getElementById('password-length').value;
  var password = generatePassword(passwordLength);
  document.getElementById('password').innerText = password;
});

function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,;.:-_ñÑ´¨çÇ`^+*'?¡¿=()/\<>&%$·{}[]|@#~€¬";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}