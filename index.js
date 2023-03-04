let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwBtn = document.getElementById("pw-gen-btn");
let pw1El= document.getElementById("pw1");
let pw2El = document.getElementById("pw2");

function generatePasswords() {
    pwBtn.textContent = "Generating password..."
    for (let j = 0; j < 2; j++) {
        let newPassword = generateSinglePassword()

        if (j === 0) {
            pw1El.textContent = newPassword;
        } else if (j === 1) {
            pw2El.textContent = newPassword;
        }
    }
}


function generateSinglePassword() {
    let passwordArray = ""
    for (let i = 0; i < 15; i++) {
        let randomCharacter = Math.floor(Math.random() * 89)
        passwordArray += characters[randomCharacter]
        console.log(passwordArray)
    }
    return passwordArray

}