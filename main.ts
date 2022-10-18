input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("C5 A B G A F G E ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
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
    }
})
basic.forever(function () {
    if (input.lightLevel() < 200) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
