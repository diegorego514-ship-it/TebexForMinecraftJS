// application.js - Backend Logic
const url = "https://checkout.tebex.io/api/checkout";

async function createCheckout(username, password) {
    const headers = new Headers();
    // Added the critical space after 'Basic '
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers.append('Content-Type', 'application/json');

    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            // Add your JSON engine data here
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.ident; // This is the ID needed for the frontend
    } catch (error) {
        console.error("Tebex API Error:", error);
    }
}

// frontend-logic.js
function initTebexCheckout(ident) {
    const checkoutElement = document.getElementById("checkout");
    
    if (!checkoutElement) return;

    // Fixed the event listener syntax
    checkoutElement.addEventListener("open", () => {
        console.log("Checkout opened");
    });

    checkoutElement.addEventListener("payment:complete", (event) => {
        console.log("Payment completed!", event);
    });

    checkoutElement.addEventListener("payment:error", (event) => {
        console.log("Payment errored", event);
    });
}