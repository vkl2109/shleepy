let counter = document.getElementById("counter")
let r = document.getElementById("right")
let w = document.getElementById("wrong")
let count = 0
let sheep = document.getElementById("sheep")

function increment () {
    count += 1
    counter.innerText = count
}
function start () {
    counter.innerText = 0
    r.style.background = 'White'
    w.style.background = 'White'
    count = 0
    random = Math.floor(Math.random() * 10) + 1
    random2 = Math.floor(Math.random() * 10)
    if (random2 == random)
    {
        random2 += 1
    }
    sheep.style.animationIterationCount = random
    r.innerHTML = random
    w.innerHTML = random2
    sheep.style.animationName = "none";

    requestAnimationFrame(() => {
        setTimeout(() => {
        sheep.style.animationName = ""
        }, 0);
    });
}
function right () {
    r.style.background = 'Green'
}
function wrong () {
    w.style.background = 'Red'
}