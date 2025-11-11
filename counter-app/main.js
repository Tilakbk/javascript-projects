var count=0;
function increment(){   
count= count+1;
document.getElementsByTagName('h1')[0].innerText=count; 
}

function save(){
    console.log('saved:', count);
}