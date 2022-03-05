let yourName = prompt("Lütfen Adınızı Girinizi : ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} ${yourName}`

function showTime(){
    var today = new Date();    
    var date = today.getDate();
    date = date < 10 ? "0"+date : date;
    var month = today.getMonth()+1;
    month = month < 10 ? "0"+month : month;
    var hours = today.getHours();
    hours = hours < 10 ? "0"+hours : hours;
    var minute = today.getMinutes();
    minute = minute < 10 ? "0"+minute : minute;   
    var second = today.getSeconds();
    second = second < 10 ? "0"+second : second; 


    const turkishDays = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cümartesi","Pazar"];
    document.getElementById("myClock").innerHTML = date + '-' + month + '-'+ today.getFullYear() + "<br/>" + hours + ":" + minute + ":" + second + "<br/>" + turkishDays[today.getUTCDate()];
    
}

setInterval(showTime, 1000);
showTime();
