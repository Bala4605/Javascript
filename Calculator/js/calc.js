
function clearvalue(){
    var b=document.getElementById("inp");
    b.value="";
}
function cal(){
    var a=document.getElementById("inp");
    a.value=eval(a.value);
}
function curVal(val){
    var c=document.getElementById("inp");
    c.value+=val.target.innerHTML;
}

