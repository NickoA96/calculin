
function sumar(){
    let n1 =parseInt(document.getElementById("n1").value);   
    let n2 =parseInt( document.getElementById("n2").value);
    let n3 = n1 + n2;    
    document.getElementById('el-resultado').innerHTML = n3;
}

function restar(){
    let n1 =parseInt(document.getElementById("n1").value);   
    let n2 =parseInt( document.getElementById("n2").value);
    let n3 = n1 - n2;    
    document.getElementById('el-resultado').innerHTML = n3;
}

function multiplicar(){
    let n1 =parseInt(document.getElementById("n1").value);   
    let n2 =parseInt( document.getElementById("n2").value);
    let n3 = n1 * n2;    
    document.getElementById('el-resultado').innerHTML = n3;
}

function dividir(){
    let n1 =parseInt(document.getElementById("n1").value);   
    let n2 =parseInt( document.getElementById("n2").value);
    let n3 = n1 / n2;    
    document.getElementById('el-resultado').innerHTML = n3;
}
