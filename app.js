const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayeofMonth = new Date(currYear, currMonth, 0).getDay(); //getting first day of month.
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of the month.
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); //getting last date of the month.
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of previous month.

  let liTag = "";
  //   console.log(firstDayeofMonth);
  let dDay = new Date(currYear, 6, 27);

  for (let i = firstDayeofMonth; i > 0; i--) {
    //creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    //creating li of all days of current month
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";

    // let isToday = i === dDay.getDate() ? "active" : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 7; i++) {
    //creating li of next month first days
    // console.log(i);
    // console.log(lastDayofMonth);
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
