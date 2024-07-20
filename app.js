const reglasEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    texto = document.getElementById('texto').value;

    if(texto.length == 0){
        noHayTexto();
        return;
    }
    

    // Aplicamos las reglas de encriptación
    let textoEncriptado = '';
    let letra;
    for (let i = 0 ; i < texto.length ; i++) {
        letra = texto[i];
        textoEncriptado += (letra in reglasEncriptacion)? reglasEncriptacion[letra] : letra;
        /* console.log(textoEncriptado); */
    }

    desaparecer('nomessage');
    mostrarResultado(textoEncriptado);
}


function desencriptar() {
    texto = document.getElementById('texto').value;
    
    if(texto.length == 0){
        noHayTexto();
        return;
    }
    
    // Aplicamos las reglas de encriptación
    let textoDesencriptado = '';
    let letra;
    for (let i = 0 ; i < texto.length ; i++) {
        letra = texto[i];
        textoDesencriptado += letra;
        if (letra in reglasEncriptacion && estaEncriptado(i,texto)) {
            i += reglasEncriptacion[texto[i]].length - 1;
        }
        /* console.log(textoDesencriptado); */
    }
    
    desaparecer('nomessage');
    mostrarResultado(textoDesencriptado);
}

function estaEncriptado(pos, texto){
    let supuestaEncriptacion = reglasEncriptacion[texto[pos]];
    let res = true;
    for(let i = 0 ; i < supuestaEncriptacion.length ; i++){
        if(texto[pos+i] != supuestaEncriptacion[i]){
            res = false
        }
    }
    
    return res;
}

function noHayTexto(){
    desaparecer('resultado');
    let foto = document.getElementById('nomessage');
    foto.style.display = "flex";
}

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