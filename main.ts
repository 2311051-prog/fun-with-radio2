input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 2450, 5000, 100, 91, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    while (true) {
        for (let index2 = 0; index2 < index; index2++) {
            radio.sendString("999")
            radio.sendNumber(666)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    _1 = 999
    radio.sendString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let index = 0
let _1 = 0
radio.setGroup(1)
_1 = 999
let _2 = 666
basic.forever(function () {
    index = 4
    while (true) {
        for (let index2 = 0; index2 < index; index2++) {
            basic.showNumber(999)
            basic.showNumber(666)
        }
    }
})
