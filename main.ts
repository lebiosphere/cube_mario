radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == adresse) {
        lumiere = 1
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
input.onButtonPressed(Button.A, function () {
    adresse += 1
    if (adresse > maxAdresse) {
        adresse = 0
    }
    suivant = adresse + 1
    if (suivant > 9) {
        suivant = 0
        basic.pause(100)
    }
    basic.clearScreen()
    led.plot(Math.min(adresse, 4), Math.floor(adresse / 5))
})
input.onButtonPressed(Button.B, function () {
    if (dernier == 0) {
        dernier = 1
        led.plot(4, 4)
        lumiere = 1
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        dernier = 0
        led.unplot(4, 4)
        lumiere = 0
        strip.showColor(neopixel.hsl(255, 125, 10))
    }
    basic.pause(100)
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
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
maxAdresse = 4
adresse = 0
suivant = 1
dernier = 0
lumiere = 0
