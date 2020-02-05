var level = 0;
var difficulty = 0;
var play_array = [];
function initiate(){
    calc_difficulty();
    console.log(level);
    make_playground();
    randomized();
    console.log(difficulty);
}
function calc_difficulty(){
    if (level < 9){
        level = 9;
    }
    difficulty = (35/100) * level + difficulty;
    difficulty = Math.round(difficulty)
    console.log(difficulty + "DIFF");
}
function make_playground(){
    //Loop out cards on the playground
    var i;
    for (i = 0; i < level; i++) {
        var div = document.createElement('div');
        div.textContent = i;
        div.setAttribute('class', 'card');
        div.setAttribute('id', i);
        div.setAttribute('onClick', 'reply_click(this.id)');
        document.getElementById("wrapper").appendChild(div);
        console.log(i + "ID");
    }
}
function clear_playground(){
    document.getElementById("wrapper").innerHTML = "";
}

function randomized(){
        while(play_array.length < difficulty){
            var randoms = Math.floor(Math.random() * level) + 1;
            if(play_array.indexOf(randoms) === -1){ 
                play_array.push(randoms);
            }
        }
console.log(play_array);
}
/*
concept:
*/
function reply_click(clicked_id){
    if(play_array.indexOf(clicked_id) !== -1){
        document.getElementById(clicked_id).style.border = "3px solid green";
    }else{
        document.getElementById(clicked_id).style.border = "3px solid red";
    }
    document.getElementById("alerted").innerHTML = clicked_id;
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