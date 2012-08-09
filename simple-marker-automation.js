(function() {
    var work = function(){
        if ($("div.notice").length < 1) {
            if (parseInt($("p.top_text span.blue").text()) > 0) {
                var actions = $("div.actions span>*");
                var fill = actions.eq(0);
                var next = actions.eq(1);
                (function(){
                    setTimeout(function() {fill.click();}, 100 );
                    setTimeout(function() {next.click();}, 200 );
                })();
            } else {
                clearInterval(intervalID);
            }
        }
    };
    var intervalID = setInterval(function(){work();}, 500);
})();