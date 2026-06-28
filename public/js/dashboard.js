const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

if (!token || !user) {
    window.location.href = "login.html";
}

document.getElementById("welcome").textContent =
    "Bienvenue " + (user.full_name || user.fullName) + " 👋";

document.getElementById("email").textContent =
    user.email || "-";

document.getElementById("whatsapp").textContent =
    user.whatsapp || "-";

document.getElementById("country").textContent =
    user.country || "-";

const role = user.role || "FREE";

if (role === "PREMIUM") {
    document.getElementById("role").innerHTML =
        "💎 PREMIUM";
} else {
    document.getElementById("role").innerHTML =
        "🆓 FREE";
}

document
.getElementById("logoutBtn")
.addEventListener("click", () => {

    if (confirm("Voulez-vous vraiment vous déconnecter ?")) {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "login.html";
    }

});
