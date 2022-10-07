
function pickAttacker() {
    const arr = []

    for (const attacker in attackers) {
        arr.push(attackers[attacker].name);
    }

    const random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);


    const name = attackers[random].name


    // Set operator card
    var img2 = new Image()
    img2.src = attackers[random].card;
    img2.setAttribute("class", "card")
    document.getElementById("card").innerHTML = ""
    document.getElementById("card").appendChild(img2);

    // Set operator icon
    var img1 = new Image();
    img1.src = attackers[random].icon;
    document.getElementById("icon").innerHTML = ""
    img1.setAttribute("class", "icon")
    document.getElementById("icon").appendChild(img1);

    document.getElementById("text").innerHTML = "";
    document.getElementById("text").appendChild(document.createTextNode(name));
    document.getElementById("text").style.backgroundColor = "#1387e1";

}



function pickDefender() {

    const arr = []
    for (const defender in defenders) {
        arr.push(defenders[defender].name);
    }
    const random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);

    const name = defenders[random].name

    // Set operator icon
    var img1 = new Image();
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


    document.getElementById("text").innerHTML = "";
    document.getElementById("text").innerHTML = name;
    document.getElementById("text").style.backgroundColor = "#ff932e";
}
