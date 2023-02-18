function add ()
{
    // getting data present inside input box 1
var num_1 = document.getElementById('num_1').value;
console.log(num_1 , " I am the number 1")
 // getting data present inside input box 2
var num_2 = document.getElementById('num_2').value;
console.log(num_2, "NO I AM THE NUMBER 1")
// Computing the result
var result = parseInt(num_1)+parseInt(num_2);
console.log(result, "This is the result")
// Showing reult in th website to user
var show_data = document.getElementById ('show-data').innerHTML=`result of addition of two numbers is ${result}`

}

function subtract ()
{
    var num_1 = document.getElementById('num_1').value;
console.log(num_1 , " I am the smartest")
 // getting data present inside input box 2
var num_2 = document.getElementById('num_2').value;
console.log(num_2, "I am the dumbest")
// Computing the result
var result = parseInt(num_1)-parseInt(num_2);
console.log(result, "This is the result")
// Showing reult in th website to user
var show_data = document.getElementById ('show-data').innerHTML=`result of subtraction of two numbers is ${result}`

}

function multiply ()
{
    var num_1= document.getElementById ('num_1').value;
    console.log (num_1, "I am the most strongest")
    var num_2= document.getElementById ('num_2').value; 
    console.log (num_2, "I am the loudest")
    var result= parseInt (num_1)*parseInt(num_2)
    console.log ( result,"Hi!")
    var show_data= document.getElementById ('show-data').innerHTML=`result of multiplication is ${result}`

}

function divide ()
{
    var num_1= document.getElementById ('num_1').value;
    console.log (num_1, "I am the most smallest")
    var num_2= document.getElementById ('num_2').value; 
    console.log (num_2, "I am the tallest")

    if(num_2==0){
        var show_data= document.getElementById ('show-data').innerHTML='Hey ! you entered 0 as denominator , Please add right figure.'
    }
    else{
        var result= parseInt (num_1)/parseInt(num_2)
        console.log ( result,"Hi!")
        var show_data= document.getElementById ('show-data').innerHTML=`result of division is ${result}`
    }
   

}

