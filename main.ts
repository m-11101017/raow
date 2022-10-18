input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.OnceInBackground)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 200) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
