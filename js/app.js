function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215); //#0xFFFFFF = 16777215
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode
}

//event call
document.getElementById("btn").addEventListener(
    "click", // the name of the event listener
    getColor // the function that is called when the event occurs 
)

//init call
getColor();