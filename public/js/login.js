const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    message.className = "message";
    message.textContent = "Connexion en cours...";

    const data = {
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok && result.success) {

            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));

            message.className = "message success";
            message.textContent = "✅ Connexion réussie.";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);

        } else {

            message.className = "message error";
            message.textContent =
                result.message || "Email ou mot de passe incorrect.";

        }

    } catch (error) {

        console.error(error);

        message.className = "message error";
        message.textContent = "Impossible de contacter le serveur.";

    }

});
