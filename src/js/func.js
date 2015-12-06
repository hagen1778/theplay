/**
 * Created by Hagen on 06.12.2015.
 */
function incScore(val){
    var score = $('#' + window.player + ' .score'), number = parseInt(score.text()) + val;
    score.animateNumber({ number: number  }).prop('number', number);
}

function initPlayers(){
    var container = $('#players');
    container.empty();
    for (i = 1; i < MAX_PLAYERS+1; i++) {
        container.append('<div id = "player' + i + '" class = "player">' +
        '<span class = "name">Player' +  i + '</span>:' +
        '<span class = "score">0</span>' +
        '</div>')
    }
    changePlayer(container.children(":first"))

}
function changePlayer(player){
    $('.player').removeClass('active');
    $(player).addClass('active');
    window.player = $(player).prop('id');
}
function initScore(){}


function initHandlebars(){
    Handlebars.registerHelper("debug", function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);

        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    });
    $('#content').render('template', questions);
}