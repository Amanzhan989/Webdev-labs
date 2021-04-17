//creating delete img
var arr = document.getElementsByTagName("li");
for(var i = 0; i < arr.length; i++) {
    var img = document.createElement("img");
    img.setAttribute("src","https://icon-library.com/images/icon-delete/icon-delete-16.jpg");
    img.setAttribute("width", "20");
    img.setAttribute("height", "20"); 
    img.className = "cls";
    arr[i].appendChild(img);
}

//deleting items
function delet(){
    var curr = this.parentElement;
    curr.style.display = "none";
}

var del = document.getElementsByClassName("cls");
for(var i = 0;i < del.length;i++)
    del[i].onclick = delet;



//clear
function clearElements(){
    var cle = document.getElementsByTagName("li");
    for(var i = 0;i < cle.length;i++)
        cle[i].style.display = "none";
}
//all done
function allDone(){
    var don = document.getElementsByTagName("li");
    for(var i = 0;i < don.length;i++)
        don[i].checked = true; 
}

//add element
function addElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("inp1").value;
    var t = document.createTextNode(inputValue);
    
    if(inputValue === ""){
        alert("Wrong");
    }else{
        li.innerHTML = `<input type="checkbox"> &nbsp; &nbsp;`;
        li.appendChild(t);
        li.className = "bx";
        document.getElementById("ull").appendChild(li);
    }

    document.getElementById("inp1").value = "";
    
    var img = document.createElement("img");
    img.setAttribute("src","https://icon-library.com/images/icon-delete/icon-delete-16.jpg");
    img.setAttribute("width", "20");
    img.setAttribute("height", "20"); 
    img.className = "cls";
    li.appendChild(img);

    for(var i = 0;i < del.length;i++)
        del[i].onclick = delet;

}