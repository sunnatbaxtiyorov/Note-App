// let users =[''];

// function addUsers(){
//     let template = users.map(user =>`<li>${user}</li>`).join('\n');
//     document.querySelector('ul').innerHTML = template;

    
// }
// addUsers();
// let btnAdd = document.querySelector('button');
// let input = document.querySelector('input');
// btnAdd.addEventListener('click', ()=>{
//     users.push(input.value);
//     input.value = '';
//     addUsers();


    
// })

// localStorage.setItem("Save", "sdasd");
// const ul = document.querySelector("ul");
// const div = document.querySelector(".div");
// div.innerHTML = localStorage.getItem("Save");



function save(){
    var new_data =  ' ' + document.getElementById('input').value;
    if (localStorage.getItem('data') == null ){
         localStorage.setItem('data','[]')
     }

     var old_data = JSON.parse(localStorage.getItem('data'));
     old_data.push(new_data);


     localStorage.setItem('data',JSON.stringify(old_data)); 


 }

 function view(){

  

    if (localStorage.getItem('data') != null){
        document.getElementById("output").style.display = "block";
    }else{
        document.getElementById("output").style.display = "none";
    }
     if(localStorage.getItem('data') != null){
         document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('data'));
     }
 }

 let clear = document.querySelector('#save');
 let inputs = document.querySelectorAll('input');

 clear.addEventListener('click', () => {
 inputs.forEach(input => input.value = '');
 });