const button =document.getElementById("button");
const h = document.getElementById("h");

const mess = document.getElementById("mess");
const {hash} = window.location;
const message = atob(hash.replace('#',''));
if(message){
    document.getElementById("message_box").classList.add("hide");

   document.getElementById("message_sh").classList.remove("hide");
       h.innerHTML = message;

}
const message_link = document.getElementById("message_link");
button.addEventListener("click",(e)=>{
    e.preventDefault();

    document.getElementById("message_box").classList.add("hide");
   document.getElementById("message_lin").classList.remove("hide");
let valu = btoa(mess.value);
let valu2 = `${window.location}#${valu}`;
message_link.value = valu2;

})