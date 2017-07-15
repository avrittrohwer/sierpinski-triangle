'use strict'

const canvas = document.getElementById("canvas")
const width = canvas.width
const height = canvas.height
const ctx = canvas.getContext('2d')

const drawPoint = (x, y) => ctx.fillRect(x, y, 1, 1)

const ax = width / 2
const ay = 0
const bx = 0
const by = height - 1
const cx = width - 1
const cy= height - 1
var _x = Math.floor(Math.random() * width)
var _y = Math.floor(Math.random() * height)

drawPoint(ax, ay)
drawPoint(bx, by)
drawPoint(cx, cy)

var i = 0
const serp = () => {
    if (i < 100000) {
        switch (Math.floor(Math.random() * 3)) {
        case 0:
            // go towards point a
            _x = (_x + ax) / 2
            _y = (_y + ay) / 2
            break
        case 1:
            // go towards point b
            _x = (_x + bx) / 2
            _y = (_y + by) / 2
            break
        case 2:
            // go towards point c
            _x = (_x + cx) / 2
            _y = (_y + cy) / 2
            break
        }
        drawPoint(_x, _y)
        i++
        setTimeout(serp, .1)
    }
}
serp()