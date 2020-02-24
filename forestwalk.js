var score = 0;
document.getElementById("score").innerHTML = "Score: " + score

var intros = [0, 1, 2];
var introNumber = (Math.floor(Math.random() * intros.length));
if (introNumber == 0) {
    document.getElementById("prompt").innerHTML =
        ("You are lost in a dark, misty forest, equipped only with a rifle, and a backpack full of sandwiches and ammunition. An indistinct, menacing figure approaches through the mist. What do you do?");
}
else if (introNumber == 1) {
    document.getElementById("prompt").innerHTML =
        ("You are hiking alone through a dense forest, on a silent winter night. You hear a twig snap, and sense something approaching you. What do you do?");
}
else {
    document.getElementById("prompt").innerHTML = ("Maybe add a few more prompts to this statement later...")
}

var scenario = [0, 1, 2, 3, 4, 5, 6, 7];
var activeScenario = (Math.floor(Math.random() * scenario.length));
document.getElementById("scenario").innerHTML = "This is scenario " + activeScenario + ". Once selected, it requires logic to respond to each button option: game over, continue, or continue with points added to the score counter.";