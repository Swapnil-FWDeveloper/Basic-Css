
let Addfun=()=>{
    let input1=document.getElementById("num1").value;
    let inptu2=document.getElementById("num2").value;
    let sum=0
    sum=(+input1)+(+inptu2)
    // console.log(sum)
    document.getElementById("Output").innerText="Result :" + sum
    alert("Additon of this both the input box is "+sum)
}

let Subfun=()=>{
    let input1=document.getElementById("num1").value;
    let inptu2=document.getElementById("num2").value;
    let sum=0
    sum=(+input1)-(+inptu2)
    // console.log(sum)
    document.getElementById("Output").innerText="Result :" + sum
    alert("Substract of this both the input box is "+sum)
}

let Mulfun=()=>{
    let input1=document.getElementById("num1").value;
    let inptu2=document.getElementById("num2").value;
    let sum=0
    sum=(+input1)*(+inptu2)
    // console.log(sum)
    document.getElementById("Output").innerText="Result :" + sum
    alert("Multiplication of this both the input box is "+sum)
}

let Divfun=()=>{
    let input1=document.getElementById("num1").value;
    let inptu2=document.getElementById("num2").value;
    let sum=0
    sum=(+input1)/(+inptu2)
    // console.log(sum)
    document.getElementById("Output").innerText="Result :" + sum
    alert("Division of this both the input box is "+sum)
}