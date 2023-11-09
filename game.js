var count = 0;
var powerups = 0;
var powerups2 = 0;
function clickCookie() {
    count += 1 + 10 * powerups2;
    document.getElementById('counter').innerHTML = count;
    updateStats();
}
function buyPowerup() {
    if (count >= 25) {
        count -= 25;
        powerups += 1;
        setInterval(function() {
            count += 2;
            document.getElementById('counter').innerHTML = count;
            updateStats();
        }, 1000);
    }
}
function buyPowerup2() {
    if (count >= 100) {
        count -= 100;
        powerups2 += 1;
        updateStats();
    }
}
function updateStats() {
    document.getElementById('stats').innerHTML = 'Power-Ups: ' + powerups + ', Power-Ups 2: ' + powerups2 + ', Clics por hora: ' + ((1 + 10 * powerups2) * 60 * 60 + powerups * 2 * 60 * 60);
}

