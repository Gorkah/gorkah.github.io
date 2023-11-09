var count = 0;
var powerups = 0;
var powerups2 = 0;
var powerups3 = 0;
var powerups4 = 0;
function clickCookie() {
    count += 1 + 10 * powerups2 + 50* powerups3 + 3000 * powerups4;
    document.getElementById('counter').innerHTML = count;
    createCrumbs();
    updateStats();
}
// Función para crear migas
function createCrumbs() {
    var crumbs = document.createElement('div');
    crumbs.className = 'crumbs';
    document.getElementById('game').appendChild(crumbs);

    // Posición aleatoria para las migas
    var xPos = Math.random() * 50 + 25;
    var yPos = Math.random() * 50 + 25;

    crumbs.style.left = xPos + 'vw';
    crumbs.style.top = yPos + 'vh';

    // Elimina la migaja después de un tiempo
    setTimeout(function() {
        crumbs.remove();
    }, 1000);
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
function buyPowerup3(){
    if (count >= 300) {
        count -= 300;
        powerups3 += 1;
        updateStats();
    }
}
function buyPowerup4(){
    if(count>= 18000){
        count -= 18000
        powerups4 += 1;
        updateStats();
    }
}
function updateStats() {
    document.getElementById('stats').innerHTML = 'Power-Ups: ' + powerups + ', Power-Ups 2: ' + powerups2 + ', Power-Ups 3: ' + powerups3 + ', Power-Ups 4: ' + powerups4 +', Clics por hora: ' + ((0 + 10 * powerups2) * 60 * 60 + powerups * 2 * 60 * 60 + (powerups3*10*60*60));
}

