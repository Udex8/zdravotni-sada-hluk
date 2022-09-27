OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("volume:" + input.soundLevel())
    if (input.soundLevel() < 100) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (input.soundLevel() < 150) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    basic.pause(2000)
})
