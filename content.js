

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

// Obtener el campo de entrada de la longitud de la contraseña
var passwordLengthInput = document.getElementById('password-length');

// Agregar un controlador de eventos para la tecla "Enter"
passwordLengthInput.addEventListener('keyup', function(event) {
  // Verificar si la tecla presionada es "Enter" (código 13)
  if (event.keyCode === 13) {
    // Simular un clic en el botón de generar contraseña
    document.getElementById('generate').click();
  }
});