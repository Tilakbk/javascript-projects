let count=0;
let rec="Previous entries: ";
document.getElementsByClassName('text')[0].innerText=rec;


function increment(){   
count= count+1;
document.getElementsByTagName('h1')[0].innerText=count; 
}

function save(){
    console.log('saved:', count);
}