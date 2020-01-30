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