const p1 = document.getElementById("parcela1");
const op = document.getElementById("operacao");
const p2 = document.getElementById("parcela2");
const vr = document.getElementById("visor");
const digitos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operacoes = ['/', '*', '-', '+'];

function clear_calcule(){
    document.getElementById("parcela1").innerHTML = '0';
    document.getElementById("operacao").innerHTML = '.';
    document.getElementById("parcela2").innerHTML = '0';
}
function clear_screen(){
    document.getElementById("visor").innerHTML = '0';
    clear_calcule();
}
function back_space(){
    var visor = document.getElementById("visor").innerHTML;
    if (visor.length > 1){
        document.getElementById("visor").innerHTML = visor.substring(0, visor.length - 1);
    }else{
        document.getElementById("visor").innerHTML = '0';
    }
}
function digit_insert(num){
    var visor = document.getElementById("visor").innerHTML;
    if(visor == '0'){
        visor = '';
    }
    if(visor.length <= 10){
        document.getElementById("visor").innerHTML = visor + num;
    }
    if(op.innerHTML != '.'){
        p2.innerHTML = num;
    }
}
function dot_insert(){
    if(vr.innerHTML != '0'){
        var caracteres = document.getElementById("visor").innerHTML.split('');
        if(caracteres.indexOf('.') == -1){
            digit_insert('.')
        }
    }else{
        vr.innerHTML += '.' ;
    }
}
function operation(signal){
    if(op.innerHTML = '.'){
        var visor = document.getElementById("visor").innerHTML;
        if (visor.substring(visor.length -1, visor.length) == '.'){
            visor = visor.substring(0, visor.length -1);
        }
        p1.innerHTML = visor;
        op.innerHTML = signal;
        vr.innerHTML = '0';
    }else{
        operation(signal);
    }
}
function equal(){
    if(op.innerHTML != '.'){
        p2.innerHTML = vr.innerHTML;
        vr.innerHTML = eval(`${p1.innerHTML} ${op.innerHTML} ${p2.innerHTML}`);
        clear_calcule();
    }
}
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if(digitos.indexOf(keyName) != -1){
        digit_insert(keyName);
    }
    if(operacoes.indexOf(keyName) != -1){
        operation(keyName);
    }
    if(keyName == '.'){
        dot_insert();
    }
    if(keyName == 'Enter'){
        equal();
    }
})
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName == 'Backspace'){
        back_space();
    }
    if(keyName == 'Delete'){
        clear_screen();
    }
})
