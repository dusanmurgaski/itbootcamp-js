let racuni = document.getElementById("racuni");
let predavanje = document.getElementById("predavanje");
let mail = document.getElementById("mail");

let nizLi = [racuni, predavanje, mail];

for (let i = 0; i < nizLi.length; i++) {

    nizLi[i].addEventListener("click", () => {
        if (nizLi[i].style.textDecorationLine == "none") {
            nizLi[i].style.textDecorationLine = "line-through";
        }
        else {
            nizLi[i].style.textDecorationLine = "none";
        }
    });

}