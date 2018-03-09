function calculateTotal() {
  //como le hacemos para extraer toda
  //de cantidades de los elementos
  //en mi carrito
}

// PAYPAL--------------------------------------------------------
paypal.Button.render({
  env: 'sandbox',
 
  commit: true,
    style: {
             label: 'paypal',
             size:  'medium',    // small | medium | large | responsive
             shape: 'rect',     // pill | rect
             color: 'blue',     // gold | blue | silver | black
             tagline: false    
         },
 
  client: {
             sandbox:    'AbZHm7Lh_9Y9TzTTlpWDqN05rxu0grEYv1O1vOnyvKEZXCJbmqxzI0gIw_-ICiADc9Sr_hoA5Z-_xR6s',
             production: '<insert production client id>'
         },
 
  payment: function(data, actions) {
 
    return actions.payment.create({
      payment: {
        transactions: [
          {
            amount: { total: '0.01', currency: 'MXN'}
          }
        ]
      }
    });
  },
  onAuthorize: (data, actions) => {
 
    return actions.payment.execute().then(() =>{
      window-alert('Payment Complete!');
    });
  }
 },'#paypal-button-container');