// question 1

const bgButton = document.querySelector("#bg");

bgButton.onclick = function () {
    document.body.style.backgroundColor = "green";
}

// question 2

const togglerButton = document.querySelector(".toggler");
const toggleeDiv = document.querySelector(".togglee");

togglerButton.onclick = function () {
    toggleeDiv.classList.toggle("extra");
}

// question 3

const select = document.querySelector("select");

select.onchange = addParagraphs;

function addParagraphs() {
    const selectValue = document.querySelector("select").value;
    const paragraphsContainer = document.querySelector(".paragraphs-container");
    let htmlContent = "";

    if (selectValue === "") {
        paragraphsContainer.innerHTML = htmlContent;
    } else {
        for (let i = 0; i < selectValue; i++) {
            htmlContent += `<p class="content">Lorem ipsum dolor sit amet.</p>`;
        }
        paragraphsContainer.innerHTML = htmlContent;
    }
}

// question 4

const input = document.querySelector("input");
const charCount = document.querySelector(".char-count b");

input.onkeydown = function () {
    charCount.innerHTML = input.value.length;
}

// question 5

const body = document.querySelector("body");

window.onscroll = handleScroll;

function handleScroll() {
    if (window.scrollY >= 35) {
        body.classList.add("highlight");
    } else {
        body.classList.remove("highlight");
    }
}