function encriptar() {
    texto = document.getElementById('texto').value;

    /* if(texto == ""){
        noHayTexto();
    } */
    

    // Aplicamos las reglas de encriptación
    let textoEncriptado = '';
    let letra;
    for (let i = 0 ; i < texto.length ; i++) {
        letra = texto[i];
        if (reglasEncriptacion.hasOwnProperty(letra)) {
            textoEncriptado += reglasEncriptacion[letra];
        } else {
            textoEncriptado += letra;
        }
        console.log(textoEncriptado);
    }

    desaparecer('nomessage');
    mostrarResultado(textoEncriptado);
}

/* function noHayTexto(){
    desaparecer('resultado');
    let foto = document.getElementById('nomessage');
    foto.style.display = "flex";
} */

function desencriptar() {
    texto = document.getElementById('texto').value;
    
    /* if(texto == ""){
        noHayTexto();
    } */

    // Aplicamos las reglas de encriptación
    let textoDesencriptado = '';
    let letra;
    for (let i = 0 ; i < texto.length ; i++) {
        letra = texto[i];
        textoDesencriptado += letra;
        if (reglasEncriptacion.hasOwnProperty(letra) && estaEncriptado(i,texto)) {
            i += reglasEncriptacion[texto[i]].length - 1;
        }
        console.log(textoDesencriptado);
    }

    desaparecer('nomessage');
    mostrarResultado(textoDesencriptado);
}

function estaEncriptado(i, texto){
    let supuestaCriptacion = reglasEncriptacion[i];
    let length = supuestaCriptacion;
    let res = true;
    for(let j = 0 ; j < length ; j++){
        res = (texto[i+j] == supuestaCriptacion[j])? res : false;
    }

    return res;
}

const reglasEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function desaparecer(id){
    let foto = document.getElementById(id);
    foto.style.display = "none";
}
function aparecer(id){
    let foto = document.getElementById(id);
    foto.style.display = "block";
}

function mostrarResultado(texto){
    let respuesta = document.getElementById("resultado");
    respuesta.innerText = texto;
    aparecer('resultado')
}

var encriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

var desencriptacion = {

}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}