radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        enemyXY[0] = value
    } else if (name == "Y") {
        enemyXY[1] = value
    }
})
let enemyXY: number[] = []
enemyXY = [0, 0]
let myXY = [0, 0]
radio.setGroup(90)
basic.forever(function () {
    myXY = [Math.map(input.acceleration(Dimension.X), -1020, 1020, 0, 4), Math.map(input.acceleration(Dimension.Y), -1020, 1020, 0, 4)]
    radio.sendValue("X", myXY[0])
    radio.sendValue("Y", myXY[1])
    basic.clearScreen()
    led.plot(myXY[0], myXY[1])
    led.plot(enemyXY[0], enemyXY[1])
})
