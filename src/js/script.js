
function pickAttacker() {

    const arr = []

    for (const attacker in attackers) {
        arr.push(attackers[attacker].name);
    }

    const random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);

    const card = document.getElementById('card');
    card.src = attackers[random].card;

    const icon = document.getElementById('icon');
    icon.src = attackers[random].icon;

    const name = document.getElementById('name');
    name.innerHTML = attackers[random].name
    name.style.backgroundColor = '#1387e1';


}



function pickDefender() {

    const arr = []

    for (const defender in defenders) {
        arr.push(defenders[defender].name);
    }

    const random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);

    const card = document.getElementById('card');
    card.src = defenders[random].card;

    const icon = document.getElementById('icon');
    icon.src = defenders[random].icon;

    const name = document.getElementById('name');
    name.innerHTML = defenders[random].name
    name.style.backgroundColor = '#ff932e';
}
