'use strict'

const canvas = document.getElementById('canvas')
const width = window.innerWidth * 0.9
const height = (width / 2) * Math.sqrt(3)
canvas.width = width
canvas.height = height
const ctx = canvas.getContext('2d')

// vertices
const ax = width / 2
const ay = 0
const bx = 0
const by = height - 1
const cx = width - 1
const cy= height - 1

// paint the vertices
ctx.fillRect(ax, ay, 1, 1)
ctx.fillRect(bx, by, 1, 1)
ctx.fillRect(cx, cy, 1, 1)

// recursive function that uses setTimeout to animate each draw
const serp = (i, limit, x, y, animateEh) => {
    if (i < limit) {
        switch (Math.floor(Math.random() * 3)) {
        case 0:
            // go towards point a
            x = (x + ax) / 2
            y = (y + ay) / 2
            break
        case 1:
            // go towards point b
            x = (x + bx) / 2
            y = (y + by) / 2
            break
        case 2:
            // go towards point c
            x = (x + cx) / 2
            y = (y + cy) / 2
            break
        }
        ctx.fillRect(x, y, 1, 1)
        i++

        if (animateEh) {
            setTimeout(serp, 1, i, limit, x, y, animateEh)
        } else {
            // super ugly way of not exceeding the max call stack size but I'll just
            // leave this hack in for now
            while (i < limit) {
                switch (Math.floor(Math.random() * 3)) {
                case 0:
                    // go towards point a
                    x = (x + ax) / 2
                    y = (y + ay) / 2
                    break
                case 1:
                    // go towards point b
                    x = (x + bx) / 2
                    y = (y + by) / 2
                    break
                case 2:
                    // go towards point c
                    x = (x + cx) / 2
                    y = (y + cy) / 2
                    break
                }
                ctx.fillRect(x, y, 1, 1)
                i++
            }
        }
    }
}

const form = document.getElementById('settings')
form.addEventListener('submit', e => {
    e.preventDefault()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    const points = document.getElementById('points').value
    const animateEh = document.getElementById('animateEh').checked
    let x = Math.floor(Math.random() * width)
    let y = Math.floor(Math.random() * height)

    serp(0, points, x, y, animateEh)
}, false)
