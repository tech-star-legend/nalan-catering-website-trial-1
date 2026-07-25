const loader = document.querySelector(".loader");

const loadingText = document.getElementById("loading-text");

const messages = [

    "Grinding Fresh Spices...",

    "Preparing Traditional Recipes...",

    "Serving Happiness...",

    "Welcome to Nalan Catering"

];

let index = 0;

const textInterval = setInterval(()=>{

    index++;

    if(index < messages.length){

        loadingText.textContent = messages[index];

    }

},800);

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.classList.add("hide");

        clearInterval(textInterval);

    },3000);

});