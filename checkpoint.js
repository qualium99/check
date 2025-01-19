// Handle checkout form submission
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide the checkout page
    document.getElementById('checkout-page').style.display = 'none';

    // Show the iframe and load the external payment page
    const iframe = document.getElementById('payment-iframe');
    iframe.src = "https://travis-services.kit.com/products/payment-invoice?step=checkout";
    iframe.style.display = 'block';
});

// Handle payment form submission (if needed)
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Payment processed successfully!');
});