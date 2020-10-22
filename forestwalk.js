/* How the game cycle is supposed to work:
    1. Display the title, miles walked, a randomly selected prompt, and input buttons.
    2. Select a scene script at random.
    3. Receive input from one of the buttons.
    4. Route the input from the clicked button to the selected script.
    5. Run the script:
        a. Game over. Hide the option buttons, reset miles walked and show a reset button.
        b. Press on. Miles walked stays the same, hide the option buttons, show a continue button.
        c. Press on with points awarded. Add to the miles walked counter, same as the previous.
*/

// Declare and show the miles walked here.
var milesWalked = 0;
document.getElementById("milesWalked").innerHTML = "Miles Walked: " + milesWalked;

// Hide the buttons that are only seen after a choice is made.
document.getElementById("gameOver").style.display = "none";
document.getElementById("continue").style.display = "none";
document.getElementById("topLine").style.display = "none";
document.getElementById("prompt").style.display = "none";
document.getElementById("buttonRow").style.display = "none";
document.getElementById("gameFinish").style.display = "none";
document.getElementById("epilogue").style.display = "none";

// Start the game
function start() {
    document.getElementById("topLine").style.display = "block";
    document.getElementById("prompt").style.display = "initial";
    document.getElementById("buttonRow").style.display = "block";
    document.getElementById("about").style.display = "none";
}

function finish() {
    document.getElementById("topLine").style.display = "none";
    document.getElementById("prompt").style.display = "none";
    document.getElementById("gameFinish").style.display = "none";
    document.getElementById("outcome").style.display = "none";
    document.getElementById("epilogue").style.display = "block";
}
// Display the prompt here.
function selectPrompt() {
    var intros = [0, 1, 2, 3];
    var introNumber = (Math.floor(Math.random() * intros.length));
    if (introNumber === 0) {
        document.getElementById("prompt").innerHTML =
            ("You are lost in a dark, misty forest, equipped only with a rifle, and a backpack full of sandwiches and ammunition. An indistinct, menacing figure approaches through the mist. What do you do?");
    }
    else if (introNumber === 1) {
        document.getElementById("prompt").innerHTML =
            ("You are hiking alone through a dense forest, on a silent winter night. You hear a twig snap, and sense something approaching you. What do you do?");
    }
    else if (introNumber === 2) {
        document.getElementById("prompt").innerHTML =
            ("It's nearly midnight in the wooded hinterland of rural Washington. You are alone, equipped only with a rifle and a backpack full of sandwiches and ammunition. An owl hoots, and you hear an approaching rustle in the brush. What do you do?");
    }
    else {
        document.getElementById("prompt").innerHTML =
            ("Stranded alone in a remote forest, you hear an ominous rustle from some nearby brush. What do you do?")
    }
}
selectPrompt();

// Button event handlers
var input = "";
function shoot() {
    input = "shoot";
    sceneSelect(input);
    document.getElementById("shootIt").style.display = "none";
    document.getElementById("petIt").style.display = "none";
    document.getElementById("feedIt").style.display = "none";
    return;
}

function pet() {
    input = "pet";
    sceneSelect(input);
    document.getElementById("shootIt").style.display = "none";
    document.getElementById("petIt").style.display = "none";
    document.getElementById("feedIt").style.display = "none";
    return;
}

function feed() {
    input = "feed";
    sceneSelect(input)
    document.getElementById("shootIt").style.display = "none";
    document.getElementById("petIt").style.display = "none";
    document.getElementById("feedIt").style.display = "none";
    return;
}

function pressOn() {
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("continue").style.display = "none";
    document.getElementById("shootIt").style.display = "initial";
    document.getElementById("petIt").style.display = "initial";
    document.getElementById("feedIt").style.display = "initial";
    document.getElementById("outcome").style.display = "none";
    selectPrompt();
    return;
}

// Select a scene at random
function sceneSelect() {
    var sceneNumber = (Math.floor(Math.random() * 9));
    if (sceneNumber === 0) {
        scene0(input);
    }
    if (sceneNumber === 1) {
        scene1(input);
    }
    if (sceneNumber === 2) {
        scene2(input);
    }
    if (sceneNumber === 3) {
        scene3(input);
    }
    if (sceneNumber === 4) {
        scene4(input);
    }
    if (sceneNumber === 5) {
        scene5(input);
    }
    if (sceneNumber === 6) {
        scene6(input);
    }
    if (sceneNumber === 7) {
        scene7(input);
    }
    if (sceneNumber === 8) {
        scene8(input);
    }
}

/* Scene x function template: 
function scenex() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1 );
        return;
    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("continue").style.display = "initial";
        return;
    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("gameOver").style.display = "initial";
        return;
    }
}*/

// Scene 0 function: a brown bear
function scene0() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You dispatch the brown bear with one well-placed shot. It seems a bit wasteful, since you lack the means to make any use of the carcass, but better him than you, right? Press on.";
        document.getElementById("continue").style.display = "initial";
    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You fearlessly stride up to the brown bear and try to hug it like a long-lost friend. It is not amused, but does find your internal organs rather tasty. Game over.";
        document.getElementById("gameOver").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked = 0)
    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You cautiously approach the brown bear, offering it a pastrami on rye. It sniffs with similar caution, before taking the sandwich and lumbering off into the mist, to attend to important bear business. Press on, +1 mile progress.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);
    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

// Scene 1 function: Robert Pattinson
function scene1() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Jesus Christ, what is wrong with you? You've just shot Robert Pattinson! Fortunately, it was only a flesh wound, but you still spend the next five years in prison for assault with a deadly weapon. The volume of hate mail you receive is depressing, but at least that got you out of the woods. Game over.";
        document.getElementById("gameOver").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked = 0)

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Robert Pattinson doesn't appreciate you trying to pet him, since you're kind of violating his personal space, but supposes you're harmless enough. Press on!";
        document.getElementById("continue").style.display = "initial";

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Robert Pattinson thanks you very politely for the sandwich, before moving on down the trail. Well done, +1 mile progress!";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

// Scene 2 function: a 1976 Ford Pinto
function scene2() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You take a few pot shots at the rusted hulk of a 1976 Ford Pinto, until an errant bullet penetrates the gas tank. The car violently bursts into flames. Your death is incredibly painful, but mercifully quick. Game over.";
        document.getElementById("gameOver").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked = 0)

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You run your fingertips along the faded clear coat of the 1976 Ford Pinto, and wistfully ponder planned obsolescence, and the wastefulness of industrial society. +1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You consider shoving a ham sandwich into the gas tank of the rusty, abandoned 1976 Ford Pinto, but think better of it. The thing is already scrap, anyway. Press on.";
        document.getElementById("continue").style.display = "initial";

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

// Scene 3 function: Richard Spencer
function scene3() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Nice shot, but Richard Spencer is only wounded. You shoot him again to finish him off, and move along, feeling like you've made the world a better place. +1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Richard Spencer calls you a rude name for trying to fondle him, but hastily moves on before you can pursue him further. Press on.";
        document.getElementById("continue").style.display = "initial";

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Richard Spencer thanks you for the sandwich. Shame on you for giving aid and comfort to the enemy. -1 mile progress, press on.";
        document.getElementById("gameOver").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked -= 1);

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

// Scene 4 function: a mountain man
function scene4() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "The mountain man only emits a stoic grunt of pain, before collapsing from the mortal wound. You have destroyed a little piece of American history. -1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked -= 1);

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "The mountain man brushes your affectionate caress away, growling, 'I've buried too many friends to go makin' new ones.' You feel like a jerk, but he lumbers along down the trail without another word. Press on.";
        document.getElementById("continue").style.display = "initial";

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "The mountain man cracks a smile and rumbles, 'Why, that's mighty kind of ye. Thankee.' What a gentle soul. +1 mile progress, Press on!";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

//Scene 5 function: Nigella the Cat
function scene5() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Nigella the Cat yowls and dies quickly from the .30-30 bullet. He was a very good cat, you monster. -1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked -= 1);

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Nigella the Cat flops over onto his side and purrs audibly as you stroke and skritch his luxuriously soft coat. +1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "Nigella the Cat sniffs at the proffered turkey on sourdough, licks it a bit, and turns his nose up. Such a fussy boi. Press on!";
        document.getElementById("continue").style.display = "initial";

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

// Scene 6 function: a drug-crazed Nazi 
function scene6() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "As soon as you see the swastika armband, you open fire. It takes a few shots, but the drug-crazed Nazi goes down. Well done! +1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "The drug-crazed Nazi snarls an ethnic slur and punches you in the nose, before running off down the trail in pursuit of more sweet, sweet methamphetamine. -1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked -= 1);

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You take pity on the drug-crazed Nazi, as he looks like he hasn't eaten in at least two or three days, and offer him a roast beef and cheddar on kummelweck. He snatches the sandwich from your hand and bolts off into the underbrush. That's what you get for your kindness. Press on.";
        document.getElementById("continue").style.display = "initial";

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

// Scene 7 function template: a tiger
function scene7() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You miss the large but graceful tiger, but the loud report of your rifle sends it fleeing into the brush. Press on!";
        document.getElementById("continue").style.display = "initial";

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You cautiously approach the majestic tiger, allowing it to sniff and lick your hand before petting it. It flops over on it's side like a cat on nip. +1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "The tiger enthusiastically noms the sandwich, but finds it insufficient, and helps itself to your arm, as well. You bleed out within a few minutes. Game over.";
        document.getElementById("gameOver").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked = 0);

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

// Scene 8 function template: a hippie
function scene8() {
    if (input === "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "You have splattered the forest floor with the blood of a hippie, who expires with a whimper. A bit heavy-handed, don't you think? Now you have to bury her, and that's going to be a real time suck. -1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked -= 1);

    }
    else if (input === "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "The hippie purrs, 'mm, yass daddy, pet me'. She seems nice, but you are uncomfortable with how obviously drugged she is and hasten down the trail. +1 mile progress, press on.";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1);

    }
    else if (input === "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "The hippie sniffs disdainfully at your proffered sandwich. 'I don't eat anything that has a face', she insists before prancing down the trail, silently judging you.";
        document.getElementById("continue").style.display = "initial";

    }
    if (milesWalked === 10) {
        document.getElementById("buttonRow").style.display = "none";
        document.getElementById("continue").style.display = "none";
        document.getElementById("gameFinish").style.display = "initial";
        return;
    }
}

/* Scene x function template:
function scenex() {
    if (input == "shoot") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("continue").style.display = "initial";
        document.getElementById("milesWalked").innerHTML = "Miles Walked: " + (milesWalked += 1 );

    }
    else if (input == "pet") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("continue").style.display = "initial";

    }
    else if (input == "feed") {
        document.getElementById("outcome").style.display = "initial";
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("gameOver").style.display = "initial";

    }
}*/