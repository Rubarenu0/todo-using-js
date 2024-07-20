var ul=document.getElementById("addnew");
var input=document.getElementById("input");
// var input=document.addtask.value;
    function addtask(){
       
        var list=document.createElement("li");
        list.innerHTML=input.value+"<button onclick='remove(event)' id='delete-btn' >Delete</button>";
        if(input.value==null||input.value==""){
            alert("Must enter something");
        }
        else{
        ul.append(list); 
        }
    }
    function remove(event){
        event.target.parentElement.remove();
    }