document.addEventListener('DOMContentLoaded', () => {
    const cart = []; // Array to hold cart items
    const cartButton = document.getElementById('proceedToPayment'); // Proceed to payment button

    // Add event listener to all "add-to-cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(item => {
        item.addEventListener('click', function() {
            const pizzaBox = this.closest('.box'); // Get the parent div (pizza box)
            const pizzaName = pizzaBox.getAttribute('data-name'); // Get pizza name
            const pizzaPrice = pizzaBox.getAttribute('data-price'); // Get pizza price

            // Add selected pizza to cart
            addToCart(pizzaName, pizzaPrice);
        });
    });

    // Function to add pizza to cart
    function addToCart(name, price) {
        const pizza = {
            name: name,
            price: parseFloat(price)
        };
        cart.push(pizza); // Add to cart array
        updateCartButton(); // Update the Proceed to Payment button
        console.log(cart); // For testing: log the cart contents
        localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage for persistence
    }

    // Function to update the "Proceed to Payment" button visibility
    function updateCartButton() {
        if (cart.length > 0) {
            cartButton.style.display = 'block'; // Show the button if there's something in the cart
        } else {
            cartButton.style.display = 'none'; // Hide it if cart is empty
        }
    }

    // Handle Proceed to Payment button click
    cartButton.addEventListener('click', () => {
        window.location.href = 'payment.html'; // Redirect to payment page
    });

    // Retrieve cart from localStorage when the page loads (if any)
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart.push(...JSON.parse(storedCart)); // Add stored items to cart
        updateCartButton(); // Ensure the button is shown if there are items
    }
});
