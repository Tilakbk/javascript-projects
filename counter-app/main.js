let count=0;
let inc=document.getElementsByTagName('h1')[0]
let saveEL= document.getElementsByClassName("text")[0]


function increment(){   
count= count+1;
inc.innerText=count; 
}



function save(){
     let countStr= count+ " - "
     saveEL.innerText += countStr

    
}