document.getElementById("Button").addEventListener("click", changeColour);


function changeColour(){   
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementById("Span").textContent = "#" + randomColor;
};

