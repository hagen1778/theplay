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

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function checkPrev(obj){debugger
    $(obj).prev().prop("checked", true)
}


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
    Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);

        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
    });

    questions.questions.forEach(function(q){
        q.answers = shuffle(q.answers);
    });
    //$('#content').render('template', questions);

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    $('#content').html(template(questions))
}