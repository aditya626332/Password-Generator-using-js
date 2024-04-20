const passwordBox=document.getElementById("pass")
const length=12
let btn=document.querySelector("button")
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*_";
const alchar=uppercase+lowercase+numbers+symbols;

// btn.addEventListener("click",)
// function generate(){
//     let password=""
//     password += uppercase[Math.floor(Math.random()*uppercase.length)]
//     password += lowercase[Math.floor(Math.random()*lowercase.length)]
//     password += numbers[Math.floor(Math.random()*numbers.length)]
//     password += symbols[Math.floor(Math.random()*symbols.length)]
//     while(length>password.length){
//         password += alchar[Math.floor(Math.random()*alchar.length)]
//     }
//     passwordBox.value=password;
// }
btn.addEventListener("click",function(){
    let password=""
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]
    while(length>password.length){
        password += alchar[Math.floor(Math.random()*alchar.length)]
    }
    passwordBox.value=password;
})