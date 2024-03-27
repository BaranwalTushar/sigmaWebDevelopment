let data = [
    {id:1,name:"Tushar",email:"tusharbaranal123@gmail.com"},
    {id:2,name:"vasno",email:"tushar123@gmail.com"}
]

function main(){
    localStorage.setItem("object",JSON.stringify(data));
    var tableData = document.querySelector(".table_data");

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record =>{
        elements += `<tr>
        
        <td>${record.name}</td>
        <td>${record.email}</td>

        <td>
        <button class="edit_button" onclick={edit(${record.id})}>Edit</button>
        <button class = "delete_button" onclick={delet(${record.id})}>Delete</button>
        </td>
        </tr>`
        
    })
    tableData.innerHTML = elements;
}

function create(){
    document.querySelector(".create").style.display = "block";
    document.querySelector(".add_button").style.display = "none";
}

function add(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = {
        id : 3, name:name, email:email
        
    };
    data.push(newObj)
    document.querySelector(".create").style.display = "none";
    document.querySelector(".add_button").style.display = "block";
    main();
}

function edit(id){
    document.querySelector('.update').style.display = "block";
    var obj = data.find(finding => finding.id === id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.id').value = obj.id;finding
}
function update(){
   var id  = parseInt(document.querySelector('.id').value);
   var name = document.querySelector('.uname').value;
   var email = document.querySelector('.uemail').value;

   var index = data.findIndex(finding => finding.id === id);
   data[index] = {id,name,email};
   document.querySelector('.update').style.display = "none";
   main(); 
}

function delet(id){
  
    data = data.filter(finding => finding.id !== id);
    main();
}
