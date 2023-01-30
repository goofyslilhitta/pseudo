function show_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A:" + pA)
    OLED.newLine()
    OLED.writeStringNewLine("player B:" + pB)
    OLED.newLine()
    OLED.writeStringNewLine("ties:" + Tie)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
let Rounds = 0
let Tie = 0
let pB = 0
let pA = 0
OLED.init(128, 64)
pA = 0
pB = 0
Tie = 0
Rounds = 0
OLED.writeStringNewLine("you wanna play a game? ")
basic.pause(2000)
show_scoreboard()
