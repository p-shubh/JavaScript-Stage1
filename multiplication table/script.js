// var myvar = setInterval(calculate,1000);


function calculate() {

    a = document.getElementById("display").value
    
    // creating a multiplication table

    document.getElementById("multiplicaton").innerHTML = "";

    for (let i = 1; i  <=10 ; i++){
        // multipy i with a
        // result = a * i;

        Result(a,i)

    }

}

function Result(a,i){
    setTimeout(function(){document.getElementById("multiplicaton").innerHTML+=(`${a}*${i}=${a*i}<br>`);}, 1000 * i);
}
