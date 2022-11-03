const btn = document.getElementById('btn')
const prop = document.getElementById('prop')

btn.addEventListener('click', () => {
    if (btn.style.top === '180px') {
        btn.style.top = '187px'
        prop.style.animationPlayState = "running"

    } else {
        btn.style.top = '180px'
        prop.style.animationPlayState = "paused"
    }
})