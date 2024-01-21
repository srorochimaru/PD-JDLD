document.getElementById("miBoton").addEventListener("click", function() {
	alert("¡Hola! Has hecho clic en el botón.");
});
function mostrarMensaje() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	alert("¡Bienvenido " + nombre + " " + apellido + "!");
}
