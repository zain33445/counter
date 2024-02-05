let decrease = document.querySelector(".btn0")
let reset    = document.querySelector(".btn1")
let increase = document.querySelector(".btn2")
let counter = document.querySelector(".counter")

let a = 0;
let  b = 0;   

decrease.addEventListener("click",()=>{
        a=a-1
    counter.innerText = a
})
reset.addEventListener("click",()=>{
    counter.innerText = 0
})
     increase.addEventListener("click",()=>{
         console.log("clicked")
         b = b + 1;
         counter.innerText = b
         
        })
