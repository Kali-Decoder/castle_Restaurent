const btn1=document.querySelectorAll(".btn1");
var total=0;
const date=document.querySelector(".date").firstElementChild;
var d=new Date();
var d1=d.toDateString();
date.innerHTML=d1;

btn1.forEach((ele)=>{
    ele.addEventListener("click",()=>{
       if(ele.innerHTML==='Purchase')
       {
           ele.innerHTML="Purchased";
           ele.style.backgroundColor='black';
           ele.style.color='white';
         var amt=ele.previousElementSibling.lastChild.innerHTML;
            amt=parseInt(amt.substring(1,amt.length));
            total=total + amt;
            

       }
       else{
           ele.innerHTML="Purchase";
           ele.style.backgroundColor='rgb(268,26,98)';
           var amt=ele.previousElementSibling.lastChild.innerHTML;
            amt=-parseInt(amt.substring(1,amt.length));
            total=total+ (amt);
            
       }
       
    });
});

document.querySelector(".bill").addEventListener("click",()=>{
    document.querySelector(".tot").innerHTML=`Total Amount : ${total}`;
})