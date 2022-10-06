
function pickAttacker() {
    const arr = []
    for (const attacker in attackers) {
        arr.push(attackers[attacker].name);
    }
    const random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);


    // Set operator icon
    var img1 = new Image(125, 125);
    img1.src = attackers[random].icon;
    img1.setAttribute("class", "icon")
    document.getElementById("icon").innerHTML = ""
    document.getElementById("icon").appendChild(img1);

    // Set operator card
    var img2 = new Image()
    img2.src = attackers[random].card;
    img2.setAttribute("class", "card")
    document.getElementById("card").innerHTML = ""
    document.getElementById("card").appendChild(img2);
    document.getElementById("a").innerHTML = "";
    document.getElementById("a").appendChild(document.createTextNode(attackers[random].name));
    document.getElementById("a").style.backgroundColor = "#1387e1";

}



function pickDefender() {

    const arr = []
    for (const defender in defenders) {
        arr.push(defenders[defender].name);
    }
    const random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);

    // Set operator icon
    var img1 = new Image(125, 125);
    img1.src = defenders[random].icon;
    img1.setAttribute("class", "icon")
    document.getElementById("icon").innerHTML = ""
    document.getElementById("icon").appendChild(img1);

    // Set operator card
    var img2 = new Image()
    img2.src = defenders[random].card;
    img2.setAttribute("class", "card")
    document.getElementById("card").innerHTML = ""
    document.getElementById("card").appendChild(img2);


    document.getElementById("a").innerHTML = "";
    document.getElementById("a").appendChild(document.createTextNode(defenders[random].name));
    document.getElementById("a").style.backgroundColor = "#ff932e";
}
