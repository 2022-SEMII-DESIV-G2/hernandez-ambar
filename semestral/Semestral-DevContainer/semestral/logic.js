const form= document.getElementById("form");

form.addEventListener('submit', handleForm);
function handleForm(event){
    event.preventDefault();
}
src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"

const resp = document.querySelector('.resp');
// const form = document.querySelector('form');
const name = document.querySelector('#name');
const floors = document.querySelector('#floors');

async function post(){ 
    console.log("hola")
    const  data  = await axios.post('http://localhost:4567/pyramids', {name:JSON.stringify(generatePyarmid()),floors:"2"});
    // render(data.resp);
    console.log(data);
    return data;
}

(async ()=>{
  const { data } = await axios.get('http://localhost:4567/pyramids');
  console.log(data);
//   render(data.resp);
})();



function generatePyarmid(){
    let output = '';
    let row = new Array();
    var pyramid = new Array();
    var num = document.getElementById('floors').value;

    for (var i = 0; i <= num; i++) {
        output += `<div class="level ${i}">`
        for (var j = 0; j <= i; j++) {
            row[j] = Math.round((Math.random() * 100));
            output += `<span class="item${i}-level${j}">${row[j] + '  '}</span>`  
        }
        pyramid[i] = row;
        row = [];
        output += '</div>' 
    }
    console.log(pyramid);  
    document.getElementById("py").innerHTML=output;

    
    //Max path part
    let output2='';
    let Maxpath = pyramid[0][0]; // will always be first element
    
    document.querySelector(`.item${0}-level${0}`).style.background='#e3d0d8';
    let ielem = 0; // index of element in previous row
    for(let i = 1; i < pyramid.length; i++) {
        let max = ielem;  

        if(pyramid[i][ielem+1]) { // check right if possible         
            if(pyramid[i][max] < pyramid[i][ielem+1]) {
                max = ielem+1; // we go to right if middle/left is less than right            
            }
        }
        Maxpath += pyramid[i][max]; // add the number to the path
        ielem = max; // previous index is now current maximum index
        document.querySelector(`.item${i}-level${ielem}`).style.background='#e3d0d8';    
        //console.log(`this is the index of largest element ${ielem} and this is the element ${pyramid[i][max]}`)          
    }
    console.log(pyramid);
    output2 += `<p> Maxpath is: ${Maxpath} </p><br>`
    document.getElementById('sum').innerHTML=output2
    return ielem;
}


