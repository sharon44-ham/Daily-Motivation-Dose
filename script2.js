const nameInput = document.querySelector(".name");
const btn = document.querySelector(".btn");

function saveName(evt) {
    evt.preventDefault();
    const username = nameInput.value.trim();
    if (username !== "") {
        localStorage.setItem("motivationUser", username);
        window.location.href = "quote.html";
    } else {
        alert("Please enter your name.");
    }
}

if (btn) {
    btn.addEventListener("click", saveName);
}

// Redirect to main app if user already saved their name
const savedName = localStorage.getItem("motivationUser");
if (savedName && window.location.pathname.includes("index.html")) {
    window.location.href = "quote.html";
}
