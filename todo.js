let btn = document.querySelector(".add");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.style.backgroundColor="red";
    delbtn.style.color="white";
    delbtn.style.marginLeft="5px";
    delbtn.style.border="1px solid white";
    delbtn.style.borderRadius="3px"

    delbtn.innerText = "delete";
    delbtn.classList.add="delete";

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

