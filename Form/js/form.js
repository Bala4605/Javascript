function fun(event){
    event.preventDefault();
    console.log(event)
    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var pass=document.getElementById("pass");
    var phone=document.getElementById("phone");
    var email=document.getElementById("email");
    var gen=document.getElementsByName("gender");
    var add=document.getElementById("address");
    var date=document.getElementById("date");
    var time=document.getElementById("time");
    var lang=document.getElementsByName("lang");
    var select=document.getElementById("selected");
    console.log(time.value);
    
    
    document.getElementById("firstname").innerHTML=fname.value;
    document.getElementById("emailId").innerHTML=email.value;
    document.getElementById("phoneno").innerHTML=phone.value;
    document.getElementById("password").innerHTML=pass.value;
    for(var i=0;i<gen.length;i++){
        if(gen[i].checked){
            document.getElementById("gen").innerHTML=gen[i].value;
        }
    }
    document.getElementById("add").innerHTML=add.value;
    document.getElementById("timee").innerHTML=time.value;
    document.getElementById("datee").innerHTML=date.value.replaceAll("-","/");

    for(var i=0;i<lang.length;i++){
        if(lang[i].checked){
            var c= document.createElement("li");
            c.innerHTML=lang[i].value;
            document.getElementById("langauge").appendChild(c);
        }
    }
    for(var i=0;i<select.options.length;i++){
        if(select.options[i].selected){
            var c= document.createElement("li");
            c.innerHTML=select.options[i].value;
            document.getElementById("selecte").appendChild(c);
        }
    }
    document.getElementById("divTag").style.display="none";
    document.getElementById("div2").style.display="block";
    

}

