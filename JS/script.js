const inputTexto = document.querySelector(".textarea1");
const mensaje = document.querySelector(".textarea2");

function btnencriptar(argument) {
	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
}

function encriptar(StringAEncriptar) {
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

	StringAEncriptar = StringAEncriptar.toLowerCase();

	for (var i = 0; i < matrizCodigo.length; i++) {
		if (StringAEncriptar.includes(matrizCodigo[i][0])) {
			StringAEncriptar = StringAEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
		}
	}
	return StringAEncriptar;
}

function btndesencriptar(argument) {
	const textoEncriptado = desencriptar(mensaje.value);
	mensaje.value = textoEncriptado;
}

function desencriptar(StringAEncriptar) {
	let matrizCodigo2 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];

	for (var i = 0; i < matrizCodigo2.length; i++) {
		if (StringAEncriptar.includes(matrizCodigo2[i][0])) {
			StringAEncriptar = StringAEncriptar.replaceAll(matrizCodigo2[i][0],matrizCodigo2[i][1])
		}
	}
	return StringAEncriptar;
}

function copiarAlPortapapeles() {
	mensaje.select();
	document.execCommand('copy');
}