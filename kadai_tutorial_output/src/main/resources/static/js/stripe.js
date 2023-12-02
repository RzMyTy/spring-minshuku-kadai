 const stripe = Stripe('pk_test_51OHmQgIhYmnFrNDSi0pWyxLAus05ZVPkyHV1Bo5rD8rkLsvEwBgzoCvO4nR457Qvcw6sxCH57Xmlbw8DKfig0WnT00QMANXGqX');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });