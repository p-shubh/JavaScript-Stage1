// setInterval(calculate, 1000)


function calculate() {

    a = document.getElementById("display").value
    
    // creating a multiplication table

    document.getElementById("multiplicaton").innerHTML = "";

    for (let i = 1; i  <=10 ; i++){
        // multipy i with a
        // result = a * i;

    //    c = console.log(`${a}*${i}=${result}`)
    
        document.getElementById("multiplicaton").innerHTML+=(`${a}*${i}=${a * i}<br>`);

        
    }

}

// function loop() {
//     for (let i = 1; i  <=10 ; i++){
//         // multipy i with a
//         // result = a * i;

//     //    c = console.log(`${a}*${i}=${result}`)
    
//         document.getElementById("multiplicaton").innerHTML+=(`${a}*${i}=${a * i}<br>`);
//     }
// }
// setInterval(calculate, milliseconds)


