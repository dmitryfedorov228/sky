// const items = document.querySelectorAll('.time__count-item > div');
// let countdownDate = new Date(2022, 12, 30, 10, 20, 0);
//
// function getCountdownTime() {
//     const now = new Date().getTime();
//
//     const distance = countdownDate - now;
//
//
//     const oneDay = 24 * 60 * 60 * 1000;
//     const oneHour = 60 * 60 * 1000;
//     const oneMinute = 60 * 1000;
//
//     let days = Math.floor(distance / oneDay);
//     let hours = Math.floor((distance % oneDay) / oneHour);
//     let minutes = Math.floor((distance % oneHour) / oneMinute);
//
//     const values = [days, hours, minutes];
//
//     console.log(values);
//
//     items.forEach(function (item, index) {
//         item.textContent = values [index];
//     });
//
//     if (distance < 0){
//         clearInterval(countdown);
//     }
//
// }
//
//
//
//
// let countdown = setInterval(getCountdownTime, 1000);
//
// getCountdownTime();a