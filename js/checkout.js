let productsCart = JSON.parse(localStorage.getItem("cart"));

let sum = 0;

function calculateTotal(productsCart) {
  //como le hacemos para extraer toda
  //de cantidades de los elementos
  //en mi carrito
  
  let checkout = " ";
  let template = " ";
  productsCart.forEach(item => {
    let productName = item.title;
    //console.log(productName);
    let price = item.price;
    //console.log(price);
    sum += price;

    template = `
    <th scope="row">${productName}</th>
    <td>${price}</td>
    `

    let tr = document.createElement('tr');
    tr.innerHTML=template
    let productsContainer = document.getElementById('checkout');
    let totalContainer = document.getElementById('total-container');
    productsContainer.insertBefore(tr, total);
  });
  
    let total = document.getElementById('total');
  totalContainer.innerHTML = sum;
  console.log(sum);

 
}


calculateTotal(productsCart);

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
