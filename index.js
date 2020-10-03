//Declaración de variables--------------------------------------------------------------------------------------
let saldoCuenta = 10000;
let limiteExtraccion = 2000;



//Constantes - obtengo datos
const extraer_dinero = document.querySelector("#extraer_dinero");
const depositar_dinero = document.querySelector("#depositar_dinero");
const pagar_servicio = document.querySelector("#pagar_servicio");
const transferir_dinero = document.querySelector("#transferir_dinero");
const cambiar_limite_extraccion = document.querySelector("#cambiar_limite_extraccion");
const cerrar_sesion = document.querySelector("#cerrar_sesion");


//Eventos
extraer_dinero.addEventListener("click" , extraerDinero);
depositar_dinero.addEventListener("click", depositarDinero);
pagar_servicio.addEventListener("click", pagarServicio);
transferir_dinero.addEventListener("click", transferirDinero);
cambiar_limite_extraccion.addEventListener("click", cambiarLimiteDeExtraccion);
cerrar_sesion.addEventListener("click", cerrarSesion);


//Funciones adicionales -------------------------------------------------------------------------------------
function sumarDinero(dinero) 
{
	saldoCuenta += dinero;
}

function restarDinero (dinero) 
{
	saldoCuenta -= dinero;
}

//Onload----------------------------------------------------------------------------------------------------------
window.onload = function() 
{
	cargarNombreEnPantalla();
   	actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones de inicio y cierre de Sesión---------------------------------------------------------------------------
//Se solicita abrir el archivo login.htm para iniciar sesión.




//Cuando se finaliza la sesión retorna a la pantalla de login
function cerrarSesion() 
{
	window.alert("¿Esta seguro que desea continuar?");
	document.location.target = "_blank";
    document.location.href="login.html";
}

//Funciones que tenes que completar---------------------------------------------------------------------------------


function extraerDinero() 
{
	
	let extraccion = parseInt(prompt("Ingrese la cantidad de dinero que desea extraer"));
	let saldoActual = saldoCuenta - extraccion;
	let saldoAnterior = saldoActual + extraccion;

	if (extraccion > saldoCuenta) 
	{
		swal("Error", "No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero", "error");
		} 
		else if (extraccion>limiteExtraccion) 
		{
			swal("Error", "La cantidad de dinero que deseas extraer supera a tu límite de extracción", "error");
		} 	
		else if (extraccion % 100) 
		{
			swal("Error", "Solo puedes extraer billetes de $100", "error");
		}
		else if (isNaN(extraccion)) 
		{
			swal("Error", "Ingrese un valor válido", "error");
			return false;
		}
		else 
		{
			window.alert("¿Esta seguro que desea continuar?");
			restarDinero(extraccion);	
			actualizarSaldoEnPantalla();
			swal("Hecho", "Has extraido: $" + extraccion + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual, "success");
	}
}

function depositarDinero() {
	
	let depositar = parseInt(prompt("Ingrese la cantidad de dinero que quiere depositar"));
	let saldoActual = saldoCuenta + depositar;
	let saldoAnterior = saldoCuenta - depositar;
	
	if (isNaN(depositar)) {
		swal("Error", "Ingrese un valor válido", "error");
		return false;
	} 
	
	else {
		window.alert("¿Esta seguro que desea continuar?");	
		sumarDinero(depositar);
		actualizarSaldoEnPantalla();
		swal("Hecho", "Has depositado: $" + depositar + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual, "success");
	}
}

function pagarServicio() 
{
	
	let agua = 350;
	let telefono = 425;
	let luz = 210;
	let internet = 570;

	let opciones = parseInt(prompt(("Ingrese el numero del servicio que desea abonar:") + 
		   ("\n 1. Agua") + 
		   ("\n 2. Luz") + 
		   ("\n 3. internet") +
		   ("\n 4. telefono")));

	
	switch(opciones) {
		case 1: 
			if (agua>saldoCuenta) 
			{
				swal("Error", "No posee fondos suficientes para pagar el servio");

			} else
			{
				let saldoActual = saldoCuenta - agua;
				let saldoAnterior = saldoActual + agua;
				window.alert("¿Esta seguro que desea abonar el telefono por un monto de $" + agua + "?");
 				restarDinero(agua);
				actualizarSaldoEnPantalla();
				swal("Hecho", "Has pagado el serivio por un monto de $" + agua + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual, "success");
			}
				
		break;
			
		case 2: 
			if (luz>saldoCuenta) 
			{
				swal("Error", "No posee fondos suficientes para pagar el servio");
			} 
			else
			{
				let saldoActual = saldoCuenta - luz;
				let saldoAnterior = saldoActual + luz;
				window.alert("¿Esta seguro que desea abonar el telefono por un monto de $" + luz + "?");
				restarDinero(luz);
				actualizarSaldoEnPantalla();
				swal("Hecho", "Has pagado el serivio por un monto de $" + luz + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual, "success");
			} 
				
		break;
		
		case 3: 
			if (internet>saldoCuenta) 
			{
				swal("Error", "No posee fondos suficientes para pagar el servio");
			} 
			else
			{ 
				let saldoActual = saldoCuenta - internet;
				let saldoAnterior = saldoActual + internet;
				window.alert("¿Esta seguro que desea abonar el telefono por un monto de $" + internet + "?");
				restarDinero(internet);
				actualizarSaldoEnPantalla();
				swal("Hecho", "Has pagado el serivio por un monto de $" + internet + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual, "success");
			}
		break;
		
		case 4: 
			if (telefono>saldoCuenta) 
			{
				swal("Error", "No posee fondos suficientes para pagar el servio");
			} 
			else
			{ 
				let saldoActual = saldoCuenta - telefono;
				let saldoAnterior = saldoActual + telefono;
				window.alert("¿Esta seguro que desea abonar el telefono por un monto de $" + telefono + "?");
				restarDinero(telefono);
				actualizarSaldoEnPantalla();
				swal("Hecho", "Has pagado el serivio por un monto de $" + telefono + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual, "success");
			}
		break;

		default:
			swal("Error", "Ingrese un valor válido");
		break;
	}
}
	
function transferirDinero() 
{
	
	let cuentaAmiga1 = 1234567;
	let cuentaAmiga2 = 7654321;
	
	let montoATransferir = parseInt(prompt("Ingrese el monto que desea transferir"));
	
	let saldoActual = saldoCuenta - montoATransferir;
	let saldoAnterior = saldoActual + montoATransferir;
	
	if (isNaN(montoATransferir)) 
	{
		swal("Error", "Ingrese un valor válido", "error");
		return false;
	}

	let cuentaDestino = parseInt(prompt("Ingrese el numero de la cuenta a la que desea transferir dinero"));
	
	if ((cuentaDestino === cuentaAmiga1) || (cuentaDestino === cuentaAmiga2))
	{
		window.alert("¿Esta seguro que desea continuar?");	
		restarDinero(montoATransferir);
		actualizarSaldoEnPantalla();
		/* swal("Hecho", "Se transfirieron: $" + montoATransferir, + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual, "success"); */
		alert("Se transfirieron: $" + montoATransferir, + "\n Saldo anterior: $" + saldoAnterior + "\n Su saldo actual es: $" + saldoActual);
	
	} else 
	{
		swal("Error", "Ingrese un numero de cuenta válido", "error");
		return false;
	}
}

function cambiarLimiteDeExtraccion() {
	
	limiteExtraccion = parseInt(prompt("Ingrese su limite de extraccion."));
	
	if (isNaN(limiteExtraccion)) {
	 	swal("Error", "Ingrese un valor válido", "error");
	 	return false;
	}
	
	else {
		window.alert("¿Esta seguro que desea cmabiar su limite de extracción?");
		swal("Hecho", "Su nuevo límite de extracción es de: $" + limiteExtraccion, "success");
		actualizarLimiteEnPantalla();
  	}
}

//Funciones que actualizan el valor de las letiables en el HTML------------------------------------------------------
function cargarNombreEnPantalla() 
{
    document.getElementById("nombre").innerHTML = "Bienvenido/a Federico Canesa";
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
//Fin-----------------------------------------------------------------------------------------------------------------

