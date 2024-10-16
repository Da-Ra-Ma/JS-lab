const button = document.getElementById("id-button");
const paragraph = document.querySelector("p");
let buttonState = 0;

let changeCssAttributes = function()
{
    if (buttonState === 0) 
    {
        paragraph.style.color = "red";
        paragraph.style.fontSize = "100px";
        paragraph.style.margingLeft = "250px";

        paragraph.innerText = "World hello!";

        buttonState = 1;
    }
    else
    {
        paragraph.style.color = "black";
        paragraph.style.fontSize = "50px";
        paragraph.style.margingLeft = "0px";

        paragraph.innerText = "Hello world!";

        buttonState = 0;
    }
}

button.addEventListener("click", changeCssAttributes);