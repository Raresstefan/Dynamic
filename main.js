var shop = document.getElementById("shop");
var list = document.getElementById("lista");
var add = document.getElementById("add");

add.addEventListener("click", (ev) => {
    // <li>-ul mare
    var element = document.createElement("li");
    element.innerText = shop.value;    

    // buton edit   
    var edit = document.createElement("button");
    edit.innerText = "Edit";
   edit.addEventListener("click", editAction);
    // buton edit  
    var del = document.createElement("button");
    del.innerText = "Delete";

    del.addEventListener("click", deleteAction);
    
    
    var submit = document.createElement("button");
    submit.innerText = "Submit";

    element.appendChild(edit);
    element.appendChild(del);
    element.appendChild(submit);

    list.appendChild(element);     
});

function deleteAction(event){
    list.removeChild(event.target.parentNode);
}
function editAction(event){
    var input = document.createElement("input");
    input.value = event.target.parentNode.firstChild.textContent;
    list.appendChild(input);    
}