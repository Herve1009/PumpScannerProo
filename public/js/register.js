const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    message.className = "message";
    message.textContent = "Création du compte...";

    const data = {
        fullName: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
        whatsapp: document.getElementById("whatsapp").value.trim(),
        country: document.getElementById("country").value.trim()
    };

    try {
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            message.className = "message success";
            message.textContent = "✅ Compte créé avec succès !";

            form.reset();

            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);

        } else {
            message.className = "message error";
            message.textContent = result.message || "Erreur lors de l'inscription.";
        }

    } catch (error) {
        message.className = "message error";
        message.textContent = "Impossible de contacter le serveur.";
    }
});
