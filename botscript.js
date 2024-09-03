function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Append user message to chat box
    chatBox.innerHTML += "<div>You: " + userInput + "</div>";

    // Clear user input field
    document.getElementById("user-input").value = "";

    // Scroll chat box to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot response (replace with backend logic)
    setTimeout(function() {
        var botResponse = generateBotResponse(userInput);
        chatBox.innerHTML += "<div>Bot: " + botResponse + "</div>";
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function generateBotResponse(userInput) {
    // Simple bot response generation based on user input
    if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
        return "Hello! Do you need assistance on something";
    } else if (userInput.toLowerCase().includes("yes")  || userInput.toLowerCase().includes("yeah")  || userInput.toLowerCase().includes("sure") || userInput.toLowerCase().includes("yh")) { 
        return "How may we be of help.KINDLY SELECT FROM THE OPTION GIVEN :<br>1. place an order <br>2. Product Quality<br>3. Delivery Delay<br>4. Order Confirmation<br>5. Order Tracking<br>6. Payment Issue<br>7. Delivery Issue<br>8. Order Cancellation";
   

    } else if (userInput.toLowerCase().includes("place an order") || userInput.toLowerCase().includes("1")   ) { 
        return " <br> To place an order on jumia: <br>a. Click on the product you wish to purchase and add it to your cart       "


    } else if (userInput.toLowerCase().includes("product quality") || userInput.toLowerCase().includes("2")   ) { 
        return " <br> We apologize for any issues with the product quality. Please provide details so we can assist you further."
    
    } else if (userInput.toLowerCase().includes("Delivery Delay")|| userInput.toLowerCase().includes("3")   ) { 
        return " <br>  We're sorry for any delays with your delivery. Please provide your order number so we can track it."

    } else if (userInput.toLowerCase().includes("Order Confirmation")|| userInput.toLowerCase().includes("4")   ) { 
        return " <br> We'll be happy to assist you with your order confirmation. Please provide your order number."

    } else if (userInput.toLowerCase().includes("Order Tracking")|| userInput.toLowerCase().includes("5")   ) { 
        return " <br> To track your order, please provide your order number."

    } else if (userInput.toLowerCase().includes("Payment Issues")|| userInput.toLowerCase().includes("6")   ) { 
        return " <br>We're sorry to hear about the payment issue. Please provide more details so we can assist."

    } else if (userInput.toLowerCase().includes("Delivery Issues")|| userInput.toLowerCase().includes("7")   ) { 
        return " <br> We apologize for any issues with the product quality. Please provide details so we can assist you further."

    } else if (userInput.toLowerCase().includes("Order Cancellation")|| userInput.toLowerCase().includes("8")   ) { 
        return " <br> If you wish to cancel your order, please provide your order number and reason for cancellation."

    } else if (userInput.toLowerCase().includes("thanks")  || userInput.toLowerCase().includes("thank you")   ) { 
        return " <br>  Sure, Happy to help."

    } else if (userInput.toLowerCase().includes("Okay") ) { 
        return "<br> further assistance, please contact our live agent on WhatsApp: <a href='https://wa.me/+2349071763610' >Chat with us </a> ."
  
    } else {
        return " For further assistance, please contact our live agent on WhatsApp: <a href='https://wa.me/+2349071763610' >Chat with us </a> .";
    }
}

