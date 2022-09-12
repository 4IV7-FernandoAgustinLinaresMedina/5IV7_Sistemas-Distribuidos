function validarip(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var exp = /[0-9.]/;
    var tec = String.fromCharCode(teclado);
    return exp.test(tec);
}

function validarnum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var exp = /[0-9]/;
    var tec = String.fromCharCode(teclado);
    return exp.test(tec);
}