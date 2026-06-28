const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

if (!token || !user) {
    window.location.href = "login.html";
}

document.getElementById("welcome").textContent =
    "Bienvenue " + (user.full_name || user.fullName);

document.getElementById("role").textContent =
    user.role || "FREE";

document.getElementById("logoutBtn").addEventListener("click", () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "login.html";

});

async function chargerSignaux() {

    const container = document.getElementById("signalsContainer");

    container.innerHTML = "Chargement des signaux...";

    try {

        const response = await fetch("/api/signals");

        const data = await response.json();

        if (!data.success) {

            container.innerHTML = "Impossible de charger les signaux.";

            return;

        }

        document.getElementById("signalCount").textContent =
            data.signals.length;

        container.innerHTML = "";

        data.signals.forEach(signal => {

            container.innerHTML += `
                <div class="signal-card">

                    <h3>${signal.token}</h3>

                    <p><strong>Symbole :</strong> ${signal.symbol}</p>

                    <p><strong>Score IA :</strong> ${signal.score}/100</p>

                    <p><strong>Risque :</strong> ${signal.risk}</p>

                    <p>
                        <strong>Action :</strong>

                        <span class="${
                            signal.type === "BUY"
                            ? "buy"
                            : "sell"
                        }">

                        ${signal.type}

                        </span>

                    </p>

                </div>
            `;

        });

    } catch (error) {

        container.innerHTML =
            "Erreur lors du chargement des signaux.";

        console.error(error);

    }

}

chargerSign
