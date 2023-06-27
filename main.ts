radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == adresse) {
        dernier = 1
    }
})
input.onButtonPressed(Button.A, function () {
    adresse += 1
    if (adresse > 9) {
        adresse = 0
    }
    suivant = adresse + 1
    if (suivant > 9) {
        suivant = 0
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    if (dernier == 0) {
        dernier = 1
        lumiere = 1
    } else {
        dernier = 0
        lumiere = 0
    }
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    if (lumiere == 1) {
        lumiere = 0
        radio.sendNumber(suivant)
    }
})
let lumiere = 0
let dernier = 0
let suivant = 0
let adresse = 0
radio.setGroup(35)
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
adresse = 0
suivant = 1
dernier = 0
lumiere = 0
basic.showNumber(adresse)
basic.forever(function () {
    basic.showNumber(adresse)
    basic.pause(10)
    if (dernier == 1) {
        basic.showIcon(IconNames.House)
    }
    if (lumiere == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    basic.pause(10)
})
