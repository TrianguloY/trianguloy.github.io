/*
 * This is a pro adblock message, to show users that ads are displaying and they should use an adblock.
 * If they already are, the name of the file (adblock.js) and/or the class of the message (bottomAd) will be blocked by the adblock and so those users won't see anything!
 * 
 * You can use it in your own page if you want, just append:
 *     <script src="https://trianguloy.github.io/adblock.js" type="text/javascript"></script>
 * anywhere, and the message will be shown in that location if the user is not using any adblock.
 */

var domString = `<div class="bottomAd" style="padding: 10px; background: #500000; text-align: center; font-weight: bold; color: #fff; border-radius: 5px;">
(!) You are not using an adblocker, you are surfing the web full of ads (and companies may be using your data to target and/or track you).<br>
Consider using an adblock, they are available for almost all commercial browsers and will remove almost all ads from the web!
</div>`;

var div = document.createElement('div');
div.innerHTML = domString;
var script = document.scripts[document.scripts.length - 1];
script.parentElement.insertBefore(div.firstChild, script); 
