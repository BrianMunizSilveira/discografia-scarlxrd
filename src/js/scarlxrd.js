const backToTopButton=document.getElementById("back-to-top");function toggleInfo(){document.querySelector(".info-container").classList.toggle("active")}window.addEventListener("scroll",()=>{window.scrollY>500?backToTopButton.classList.add("show"):backToTopButton.classList.remove("show")}),backToTopButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("DOMContentLoaded",function(){var t=new Date(document.lastModified),o=t.getDate().toString().padStart(2,"0"),e=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getFullYear();document.getElementById("data-atualizacao").textContent=`${o}/${e}/${a}.`});