var Text = document.querySelector('#text');
setInterval(function(){
    Text.innerHTML ="This is wonderful page";
    ''
},3000);


let btnn =document.querySelector('#btn');
let imgg =document.querySelector('img');

btnn.addEventListener("click",function(){
    imgg.style.marginLeft="200px";
});

imgg.addEventListener("mouseover",function(){
    imgg.style.width="75px";
});
    