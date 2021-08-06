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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')


let futureDate = new Date(2021, 12, 25, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()

const month = months[futureDate.getMonth()]
const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()

giveaway.textContent = `Hurry up! Give her something to satisfy, or wait until she stops crying ends on  ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const subtract = futureTime - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = Math.floor(subtract / oneDay)
  let hours = Math.floor((subtract % oneDay) / oneHour)
  let mins = Math.floor((subtract % oneHour) / oneMinute)
  let secs = Math.floor((subtract % oneMinute) / 1000)

  const values = [days, hours, mins, secs]

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })

  if (subtract < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class"expired">She stopped crying. But Christmas has come.</4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()