var time=document.getElementById("time");
setTimeout(function(){time.value="1seconds"},1000);
setTimeout(function(){time.value="2seconds"},2000);
setTimeout(function(){time.value="3seconds"},3000);
setTimeout(function(){time.value="4seconds"},4000);
setTimeout(function(){time.value="5seconds"},5000);
setTimeout(function(){time.value="6seconds"},6000);
setTimeout(function(){time.value="7seconds"},7000);
setTimeout(function(){time.value="8seconds"},8000);
setTimeout(function(){time.value="9seconds"},9000);





$("#v").click(function(){
    var d=document.querySelectorAll(".different");
    var x=0;
    for(let k=0;k<d.length;k++){
        if(d[k].checked){
            x++;
        }
    }
   n= document.querySelector("#note").innerHTML=x;
   n= document.querySelector("#note1").innerHTML=x;

   if(x>=5){
    var r=document.getElementsByClassName("resultat");


    document.getElementsByTagName("body")[0].append("r");
    r[0].style.display="block";
    r[0].style.width="80%";
    r[0].style.height=" 500px" ;
    var h=document.getElementsByTagName("header");
    h[0].style.display="none";
       
   }
   else{
    var r1=document.getElementsByClassName("resultat1");
    document.getElementsByTagName("body")[0].append("r1");
    r1[0].style.display="block";
    r1[0].style.width="80%";
    r1[0].style.height=" 500px" ;
    var h=document.getElementsByTagName("header");
    h[0].style.display="none";

   }
    
        
    });

     







