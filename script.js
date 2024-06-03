

window.addEventListener("DOMContentLoaded", function(){

    let form = document.querySelector("#form1");

    form.addEventListener("submit", function(e){

        let dairy = document.querySelector("#dairy").value;
        let meat = document.querySelector("#meat").value;
        let produce = document.querySelector("#produce").value;
        let grains = document.querySelector("#grains").value;
        let other = document.querySelector("#other").value; 
        
        addItemToList(dairy,meat,produce,grains,other);

        e.preventDefault();
    });

    function addItemToList(d,m,p,g,o){
        
        let row = document.createElement("tr");
        row.innerHTML = `<td>${d}</td><td>${m}</td><td>${p}</td><td>${g}</td><td>${o}</td><td><button class="delete">X</button></td>`;

        document.querySelector("#grocery-list").appendChild(row);
        
        clearFields();
        showAlert("Item(s) added successfully!","success");
    }

    function clearFields(){
        document.querySelector("#dairy").value = "";
        document.querySelector("#meat").value = "";
        document.querySelector("#produce").value = "";
        document.querySelector("#grains").value = "";
        document.querySelector("#other").value = "";
    }

    function showAlert(m, c){
        let div = document.createElement("div");
        div.innerText = m;
        div.className = c;
        div.id = "box";

        document.querySelector("#notification").appendChild(div);

        this.setTimeout(function(){
            this.document.querySelector("#box").remove();
        }, 3000);
    }   

    this.document.querySelector("#data").addEventListener("click", function(e){
        deleteItem(e.target);
    });

    function deleteItem(elementToDelete){
        if(elementToDelete.className === "delete"){
            elementToDelete.parentElement.parentElement.remove();
            showAlert("Item(s) removed successfully!","success");
        }
    }
});