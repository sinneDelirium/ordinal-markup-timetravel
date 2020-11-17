// ==UserScript==
// @name         Ordinal Markup Time Travel Script v0.1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allows player to use button placed in the top-left corner to accelerate time by 1 hour.
// @author       sinneDelirium
// @match        https://patcailmemer.github.io/Ordinal-Markup/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function timet(x) {
        let temptime = Date.now() - x*1000;
        game.lastTick = temptime;
    }

    // Button code taken from https://hibbard.eu/tampermonkey-tutorial/
    $('body').append('<input type="button" value="Open" id="CP">')
    $("#CP").css("position", "fixed").css("top", 0).css("left", 0);
    $('#CP').click(function(){
        timet(3600);
    });
})();