var shop = document.getElementById("shop");

var list = document.getElementById("lista");

var add = document.getElementById("add");

var final = document.getElementById("fin");

add.addEventListener("click", addElement);

function addElement(event)
{
    // <li>-ul mare
    var element = document.createElement("li");
    element.innerText = shop.value;    

    // buton edit   
    var edit = document.createElement("button");
    edit.innerText = "Edit";
   edit.addEventListener("click", editAction);
    // buton delete  
    var del = document.createElement("button");
    del.innerText = "Delete";

    del.addEventListener("click", deleteAction);
    
    
    var submit = document.createElement("button");
    submit.innerText = "Submit";
    submit.addEventListener("click", submitAction);

    element.appendChild(edit);
    element.appendChild(del);
    element.appendChild(submit);

    list.appendChild(element);     
}

function deleteAction(event){
    list.removeChild(event.target.parentNode);
}
function editAction(event){
   
    var input = document.createElement("input");
    input.value = event.target.parentNode.firstChild.textContent;
    event.target.parentNode.removeChild(event.target.parentNode.firstChild);
    event.target.parentNode.insertBefore(input, event.target.parentNode.childNodes[0]);
}
function submitAction(event)
{
    var finalElement = document.createElement("li");
    finalElement.appendChild(event.target.parentNode.firstChild);
    final.appendChild(finalElement);
    list.removeChild(event.target.parentNode);
    var arr =[];
    for(i=0;i<final.children.length;i++)
    {
        arr[i] = final.children[i].innerText;
    }
    arr.sort();
    for(i=0;i<arr.length;i++)
    {
        final.children[i].innerText = arr[i];
    }
}
shop.onkeypress = adding;

function adding(e)
{
    if(e.code === "Enter")
    addElement();
}