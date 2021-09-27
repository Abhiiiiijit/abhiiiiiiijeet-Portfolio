//Clear all Value
function clearScreen(){
    document.getElementById("result").value= "";
}

//Display Value
function display(value)
{
    document.getElementById("result").value += value;
}

//Expression
function calculate(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    //This Eval function evaluate the expression in JS and gives the value 
    document.getElementById("result").value = y;
}

// //Dark Mode
// function $(el){
//     return document.querySelector(el);
// }
// let container = $('.container');
// let toggle = $('toggle-theme');
// toggle.addEventListener('click',()=>{
//     let list = container.classList;
//     if(list.contains('default')){
//         list.replace('default', 'dark');
//         toggle.textContent = 'Light';
//     }
//     else{
//         list.replace('dark', 'default');
//         toggle.textContent = 'dark'
//     }
// });