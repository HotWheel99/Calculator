let resoult = document.querySelector(".resoult");
let num1 = document.querySelector(".number1");
let num2 = document.querySelector(".number2");



document.querySelector(".btn-plus").onclick = function () {
    //alert(parseInt(num1) + parseInt(num2));
    resoult.value = Number(num1.value) + Number(num2.value);
    if (num1.value === "" || num2.value === "") {
        resoult.value = "";
    }

};

document.querySelector(".btn-minus").onclick = function () {
    //alert(parseInt(num1) - parseInt(num2));
    resoult.value = Number(num1.value) - Number(num2.value);
    if (num1.value === "" || num2.value === "") {
        resoult.value = "";
    }
};

document.querySelector(".btn-mul").onclick = function () {
    //alert(parseInt(num1) * parseInt(num2));
    resoult.value = Number(num1.value) * Number(num2.value);
    if (num1.value === "" || num2.value === "") {
        resoult.value = "";
    }
};

document.querySelector(".btn-div").onclick = function () {

    if (num1.value === "" || num2.value === "") {
        resoult.value = "";
    }

    else if(num2.value == 0) {
        alert("You can't divide by 0");
        num1.value = "";
        num2.value = "";
        resoult.value = "";
    }

    else {
        //alert(parseInt(num1) / parseInt(num2));
        resoult.value = Number(num1.value) / Number(num2.value);
    }
};

document.querySelector(".ac-btn").onclick = function () {
    num1.value = "";
    num2.value = "";
    resoult.value = "";
};