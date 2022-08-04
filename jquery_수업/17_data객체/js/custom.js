$(document).ready(function(){

    var today = new Date();
    console.log(today);

    var year = today.getFullYear();
    console.log(year);

    var month = today.getMonth();
    console.log(month+1);

    var date = today.getDate();
    console.log(date);

    var hour = today.getHours();
    console.log("시간 : "+hour);

    var min = today.getMinutes();
    console.log("분 : "+min);

    var sec = today.getSeconds();
    console.log("초 : "+sec);
});