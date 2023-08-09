const btn = document.getElementById("btn");
const topRow = document.querySelector(".top");
const topMiddle = document.querySelector(".middle");
const topBottom = document.querySelector(".bottom");
const responsiveNav = document.querySelector(".nav-list")

let open = false;
btn.addEventListener("click" , () => {

        if (open === false) {
                topRow.style.transform = "translate(-10%, 15%) rotate(45deg)";
                topMiddle.style.display = "none";
                topBottom.style.transform = "translate(-15%, -15%) rotate(-45deg)";
                responsiveNav.style.right = "-4.5rem"

        } else
        {
                topRow.style.transform = "translate(0%, 0%) rotate(0)";
                topMiddle.style.display = "block";
                topBottom.style.transform = "translate(0%, 0%) rotate(0deg)";
                responsiveNav.style.right = "-100%"
        }
        open = !open

  

})