let Mat: Matrix.Strip = null
input.onButtonPressed(Button.A, () => {
    Mat.showString("Hello!", Matrix.colors(NeoPixelColors.Green))
    basic.pause(1000)
    Mat.showCustomNew("006e333b6e1c361c", 0, Matrix.colors(NeoPixelColors.Red))
    basic.pause(1000)
    Mat.clear()
    Mat.setPixel(
    0,
    0,
    0,
    Matrix.colors(NeoPixelColors.Blue)
    )
    Mat.setPixel(
    7,
    7,
    0,
    Matrix.colors(NeoPixelColors.Violet)
    )
})
Mat = Matrix.create(DigitalPin.P8, 1)
