function sendWebhook() {
    const webhookURL = "PUT_YOUR_DISCORD_WEBHOOK_URL_HERE";

    const username = document.getElementById("username").value || "Website";
    const message = document.getElementById("message").value;

    if (!message.trim()) {
        alert("You forgot the message.");
        return;
    }

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            content: message
        })
    })
    .then(() => {
        document.getElementById("message").value = "";
        alert("Message sent ✅");
    })
    .catch(err => {
        console.error(err);
        alert("Webhook failed.");
    });
}
