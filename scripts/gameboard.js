var level = 0;
function initiate(){
    level = 9;
    make_playground();
}
function make_playground(){
    //Loop out cards on the playground
    var i;
    for (i = 0; i < level; i++) {
        var div = document.createElement('div');
        div.textContent = i;
        div.setAttribute('class', 'card');
        document.getElementById("wrapper").appendChild(div);
    }
}
function clear_playground(){
    document.getElementById("wrapper").innerHTML = "";
}

/*
concept:
            <div id="1" class="card" onClick="reply_click(this.id)">1</div>
            <div id="2" class="card" onClick="reply_click(this.id)">2</div>
            <div id="3" class="card" onClick="reply_click(this.id)">3</div>
                
            <script type="text/javascript">
            function reply_click(clicked_id)
            {
                alert(clicked_id);
            }
            </script>

pseudocode:
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