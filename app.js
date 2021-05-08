const countDown = () => {
  const future = new Date("October 27 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = future - now;

  //Getting hours minutes and seconds
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  //Getting actual stuff back
  const actualSeconds = Math.floor((difference % minutes) / seconds);
  const actualMinutes = Math.floor((difference % hours) / minutes);
  const actualHours = Math.floor((difference % days) / hours);
  const actualDays = Math.floor(difference / days);

  //Selecting and changing the text
  document.querySelector(".day").innerText = actualDays;
  document.querySelector(".hour").innerText = actualHours;
  document.querySelector(".minute").innerText = actualMinutes;
  document.querySelector(".second").innerText = actualSeconds;
};

setInterval(() => {
  countDown();
}, 1000);
