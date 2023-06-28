radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == adresse) {
        lumiere = 1
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
})
input.onButtonPressed(Button.A, function () {
    led.unplot(adresse, 0)
    led.unplot(suivant, 1)
    adresse += 1
    if (adresse > maxAdresse) {
        adresse = 0
    }
    suivant = adresse + 1
    if (suivant > maxAdresse) {
        suivant = 0
    }
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    if (dernier == 0) {
        dernier = 1
        led.plot(4, 4)
        lumiere = 1
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        dernier = 0
        led.unplot(4, 4)
        lumiere = 0
        strip.showColor(neopixel.hsl(255, 125, 10))
    }
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function () {
    if (lumiere == 1) {
        lumiere = 0
        strip.showColor(neopixel.hsl(255, 125, 10))
        radio.sendNumber(suivant)
    }
})
let lumiere = 0
let dernier = 0
let suivant = 0
let adresse = 0
let maxAdresse = 0
let strip: neopixel.Strip = null
basic.clearScreen()
radio.setGroup(35)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    . # # # .
    `)
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
maxAdresse = 4
adresse = 0
suivant = 1
dernier = 0
lumiere = 0
strip.showColor(neopixel.hsl(255, 125, 10))
basic.forever(function () {
    led.plot(adresse, 0)
    led.plot(suivant, 1)
    if (dernier == 1) {
        suivant = 0
    }
})
