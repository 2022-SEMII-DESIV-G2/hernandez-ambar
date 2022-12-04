const form= document.getElementById("form");

form.addEventListener('submit', handleForm);
function handleForm(event){
    event.preventDefault();
}

function generatePyarmid(){
    let output= '';
    let row = new Array();
    var num = parseInt(document.getElementById('floors').value);

    for (let i=0;i<=num;i++){
        output += "";
        for (let b = 1; b<= num; b++) {
           output+="";
           
        }
        for(let j=0;j<i;j++){  
            row[j] = Math.round((Math.random() * 100));           
            output +=row[j] + '  ';                                 
        }    
        output += '<br>';              
    }
    
    // var num = prompt("Enter the number of floors");
    
    //validar si el numero obtenido es un numero
    // if(Number(num)== num ){
    //     //validar tope de la piramide
    //     if(num>0 && num<=80){
    //        //crear el bucle interno para imprimir la píramide
    //         for (let i = 0; i <=num; i++) {
    //           // crear el ciclo interno para imprimir la piramide
    //             for (let rep = i; rep <=num; rep++) {
    //                 // Document.write(i);  
    //                 output += i           
    //             }
    //             output+="</br>";
                
    //         }
    //     }
    //     else{
    //         console.log("el valor introducido no esta dentro del rango o el valor no es valido");           
    //     }       
    // }
    // else{
    //     console.log("no es un valor numerico");
    // }
    document.getElementById("ans").innerHTML=output;
}