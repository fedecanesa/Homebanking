const inicio_sesion = document.querySelector("#inicio_sesion");

inicio_sesion.addEventListener("click", login);

function login()
{
	let usuario = document.getElementById("usuario").value;
	let	pass = parseInt(document.getElementById("contrasenia").value);

	if ((usuario === "federico_canesa") && (pass === 1234)) 
	{
		document.location.target = "_blank";
        document.location.href="index.html";
        swal("Hecho" , "Bienvenido Federico, ya podes comenzar a realizar operaciones");
		
	} else 
	{
		swal("Error", "Usuario o contraseña incorrecto", "error");
		swal("Error", "Por cuestiones de seguridad la cuenta ha sido bloqueada.", "error");
	}
}