var level = 25;
var difficulty = 0;
var play_array = [];
function initiate(){ // Call all the functions
    calc_difficulty();
    console.log(level);
    make_playground();
    randomized();
    console.log(difficulty);
}
function calc_difficulty(){
    if (level < 9){ // The level value cannot be lower than 9.
        level = 9;
    }
    difficulty = (35/100) * level + difficulty; //calc the difficulty to scale with the level
    difficulty = Math.round(difficulty) // Makes the difficulty value a integer
}
function make_playground(){
    //Loop out cards on the playground
    var i;
    for (i = 0; i < level; i++) { //Creates a new div for each loop wth the attributes and content set below.
        var div = document.createElement('div');
        div.textContent = i;
        div.setAttribute('class', 'card');
        div.setAttribute('id', i);
        div.setAttribute('onClick', 'reply_click(this.id)'); // add an onClick event to the div that sends the id of it to the funcition reply_click()
        document.getElementById("wrapper").appendChild(div);
    }
}
function clear_playground(){ //When called, makes the playground empty
    document.getElementById("wrapper").innerHTML = "";
}

function randomized(){  // Fills the array with random numbers. Max number determines by level
        while(play_array.length < difficulty){
            var randoms = Math.floor(Math.random() * level) + 1;
            if(play_array.indexOf(randoms) === -1){ 
                play_array.push(randoms);
            }
        }
}

function reply_click(clicked_id){ // Grabs the value from the id on the div/card when it's clicked on.
    console.log("level="+level+"\n difficulty="+difficulty+"\n array="+play_array+"\n clicked_id="+clicked_id); // Console info

    if(play_array.includes(clicked_id)){ // Takes the id from the div and searches in the array for it. Returns either true or false.
        document.getElementById(clicked_id).style.border = "3px solid green"; // Makes the div/cards border green
    }else{
        document.getElementById(clicked_id).style.border = "3px solid red"; // Makes the div/cards border red
    }
    document.getElementById("alerted").innerHTML = clicked_id; // Just prints it out on the screen for testing
    
}
            
/*
pseudocode:'
/
            if (exists) clicked_id= randomized[x] = true
                if (value already added skip(Done with array, if exists/contains)) = false
                    variable add 1
                        if variable(int) == all answers(int) = true
                            next round
                            add score
            else
                health - 1
                if health < 5
                    gameover
*/