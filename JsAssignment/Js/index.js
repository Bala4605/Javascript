var footElement=document.getElementById("foot");
footElement.innerHTML="Copyright @"+new Date().getFullYear()+"-present syncfusion";

var category =document.getElementById("category");
var book =document.getElementById("book");
var email =document.getElementById("email");
var author =document.getElementById("author");
var published =document.getElementById("published");
var price =document.getElementById("price");

var value1=document.getElementById("value1");
var value2=document.getElementById("value2");
var value3=document.getElementById("value3");
var value4=document.getElementById("value4");
var value5=document.getElementById("value5");
var value6=document.getElementById("value6");
var validBook=false;
var validAuthor=false;
var validYear=false;
var validEmail=false;
var validPrice=false;
function focused(event){
    console.log(event)
    if(event.target.id=="book"){
        
        var regex=/^([^0-9]{1,50})$/;

        if(regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validBook=true;
        }else{
            event.target.style.border="5px solid red";
            validBook=false;
        }
    }
    if(event.target.id=="email"){
        
        var regex=/^([a-zA-Z0-9\.-]+)@gmail.com$/;

        if(regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validEmail=true;
        }else{
            event.target.style.border="5px solid red";
            validEmail=false;
            
        }
    }
    if(event.target.id=="author"){
        
        var regex=/^([^0-9]{1,50})$/;

        if(regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validAuthor=true;
        }else{
            event.target.style.border="5px solid red";
            validAuthor=false;
        }
    }
    if(event.target.id=="published"){
    

        if(Number(event.target.value)>=1000 && Number(event.target.value)<new Date().getFullYear()){
            event.target.style.border="5px solid green";
            validYear=true;
        }else{
            event.target.style.border="5px solid red";
            validYear=false;
        }
    }
    if(event.target.id=="price"){
        var regex=/^([0-9]+).([0-9]+)$/;
        if(Number(event.target.value)>0 && regex.test(event.target.value)){
            event.target.style.border="5px solid green";
            validPrice=true;
        }else{
            event.target.style.border="5px solid red";
            validPrice=false;
        }
    }
}


function save(){

    if(validBook && validAuthor && validEmail && validYear && validPrice){
    value1.innerHTML=category.options[category.selectedIndex].value;
    value2.innerHTML=book.value;
    value3.innerHTML=email.value;
    value4.innerHTML=author.value;
    value5.innerHTML=published.value;
    value6.innerHTML=price.value;}
    else{
        alert("Please enter valid details");
    }
    
}
function cancel(){
    category.value="";
    book.value="";
    email.value="";
    author.value="";
    published.value="";
    price.value="";
}

function show(){
    document.getElementById("form").style.display="none";
    document.getElementById("show").style.display="block";
}
function back(){
    document.getElementById("show").style.display="none";
    document.getElementById("form").style.display="block";
   
}