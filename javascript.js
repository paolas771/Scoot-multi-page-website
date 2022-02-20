var hamButton = document.getElementsByClassName("icon")[0];
var scootButton = document.getElementsByClassName("scootinButton")[0];
var scootButton2 = document.getElementsByClassName("scootinButton")[1];
var learnAboutButton = document.getElementsByClassName("learnButton")[0];
var learnAboutButton2 = document.getElementsByClassName("learnButton")[2];
var learnLocationButton = document.getElementsByClassName("learnButton")[1];
var x = document.getElementById("links");

//code below this is for hamburger navigation 
hamButton.addEventListener("click", () => {
    var icon = document.getElementById("buttonImg");
    var behind = document.getElementsByClassName("topSection")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
        icon.src = "assets/icons/hamburger.svg";
        behind.style.opacity = "1";

    } else {
        x.style.display = "block";
        icon.src = "assets/icons/close.svg";
        behind.style.opacity = ".75";

    }

});

//code below this is for when button is pressed it takes user to different parts of the page
scootButton.addEventListener("click", () => {
    location.href = '#footer';
});
scootButton2.addEventListener("click", () => {
    location.href = '#footer';
});
learnAboutButton.addEventListener("click", () => {
    location.href = 'about.html';
});
learnAboutButton2.addEventListener("click", () => {
    location.href = 'about.html';
});
learnLocationButton.addEventListener("click", () => {
    location.href = 'locations.html';
});

//code below this is for FAQ section with arrow is pushed every screen has different box width
var faqButton = document.getElementsByClassName("faqButton")[0];
var faqButton2 = document.getElementsByClassName("faqButton")[1];
var faqButton3 = document.getElementsByClassName("faqButton")[2];
var faqButton4 = document.getElementsByClassName("faqButton")[3];
var faqButton5 = document.getElementsByClassName("faqButton")[4];
var faqButton6 = document.getElementsByClassName("faqButton")[5];
faqButton.addEventListener("click", () => {
    hideShow(0);
});
faqButton2.addEventListener("click", () => {
    hideShow(1);
});
faqButton3.addEventListener("click", () => {
    hideShow(2);
});
faqButton4.addEventListener("click", () => {
    hideShow(3);
});
faqButton5.addEventListener("click", () => {
    hideShow(4);
});
faqButton6.addEventListener("click", () => {
    hideShow(5);
});

function hideShow(index) {
    var ans = document.getElementsByClassName("answer")[index];
    var section = document.getElementsByClassName("faqSection")[index];
    var buttonImg = document.getElementsByClassName("buttonImg")[index];
    if (ans.style.display === "block") {
        ans.style.display = "none";
        section.style.height = "112px"
        //https://css-tricks.com/snippets/css/flip-an-image/
        buttonImg.style.transform = "scaleY(1)"

    } else {
        ans.style.display = "block";
        var width = section.offsetWidth;
        if (width === 311) {
            section.style.height = "311px";
        } else {
            section.style.height = "191px";
        }
        buttonImg.style.transform = "scaleY(-1)";
    }
}