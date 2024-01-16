let inputs = document.getElementById("many");
let text = document.querySelector(".text");

 function Add(){
   if(inputs.value == ""){ 
   alert("Please write here ");
  }else{
       let newEle = document.createElement("li");
      /* newEle.classList.add(){newfile}*/
       newEle.innerHTML=`<span>${inputs.value} </span><ion-icon name="trash"></ion-icon>`;
       text.appendChild(newEle);
       inputs.value="";
       newEle.querySelector("ion-icon").addEventListener("click",remove);
       function remove(){
            newEle.remove()

       }
    }
}
