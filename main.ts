let answer = 0
input.onButtonPressed(Button.A, function () {
    answer = randint(0, 1)
    if (answer == 0) {
        basic.showString("No!")
    } else {
        basic.showString("Yes!")
    }
})
basic.forever(function () {
	
})
