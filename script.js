const inputB=document.getElementById("input-box");
const listC=document.getElementById("listcont");
function addTask(){
    if(inputB.value==='')
     alert("You must write something");
    else{
        var li=document.createElement("li")
        li.innerHTML=inputB.value;
        listC.appendChild(li);
        var span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputB.value='';
    saveD();
}
listC.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
      e.target.classList.toggle("check");
      saveD();
    }
    else if(e.target.tagName==='SPAN'){
      e.target.parentElement.remove();
      saveD();
    }
},false)
function saveD(){
    localStorage.setItem("data",listcont.innerHTML);
}

function showT(){
    listcont.innerHTML=localStorage.getItem("data");
}
showT();