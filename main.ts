let ñeñeñe = 0
basic.showIcon(IconNames.Silly)
basic.pause(500)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.pause(500)
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                # # # # #
                # . . . #
                `)
            basic.pause(500)
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    # # # . .
                    # . . # .
                    # # # . .
                    # . . # .
                    # # # . .
                    `)
                basic.pause(500)
                ñeñeñe += 1
            }
        }
    }
    if (ñeñeñe == 1) {
        basic.showIcon(IconNames.Asleep)
        music.playMelody("C E D G F E A C ", 400)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
})
