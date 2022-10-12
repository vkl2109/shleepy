let counter = document.getElementById("counter")
let count = 0
let sheep = document.getElementById("sheep")

function increment () {
    count += 1
    counter.innerText = count
}
function start () {
    counter.innerText = 0
    count = 0
    random = Math.floor(Math.random() * 10)
    sheep.style.animationIterationCount = random
    sheep.style.animationName = "none";

    requestAnimationFrame(() => {
        setTimeout(() => {
        sheep.style.animationName = ""
        }, 0);
    });
}