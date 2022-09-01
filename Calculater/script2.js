
    
function Number(x){

document.getElementById("display").value+=x
 
}

function Calculate(){
    x = document.getElementById("display").value

    document.getElementById("display").value = eval(x)
}

function Clean(){
    document.getElementById("display").value = ''
}




