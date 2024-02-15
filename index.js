const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")

const newYearTime = new Date("jan 1, 2025 00:00:00").getTime()

updateCountdown()

function updateCountdown() {
    const timeNow = new Date().getTime()
    const gap = newYearTime - timeNow

    const millisecond = 1
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 60

    const dayRemaining = Math.floor(gap / day)
    const hourRemaining = Math.floor((gap % day) / hour)
    const minuteRemaining = Math.floor((gap % hour) / minute)
    const secondRemaining = Math.floor((gap % minute) / second)
    const millisecondRemaining = Math.floor((gap % second) / millisecond)
} 