function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="addToCart(${product.id})"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  //addToCart(product);
  return productContainer;
    changeButtonStatus(button);
}

drawProducts(data);

let cartCheckout = []; //Array vacio donde meteremos los productos después
//Metemos como parámetro id en la función addToCart
function addToCart(id) {
  cartCheckout.push(id);
  localStorage.setItem("cart", JSON.stringify(cartCheckout));
  increaseCounter();


  
  /* cuando agrego a carrito, tengo que:
  1) Incrementar en uno mi contador del menu
  2) Guardar mi producto en algun lugar
  3) Cambiar el boton de agregar a carrito
  por quitar del carrito
  */
 }

function removeFromCart(products) {
 // cartCheckout.pop(products);
 localStorage.setItem("cart", JSON.stringify(cartCheckout));
 decreaseCounter()
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
}

function increaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
  let containerCounter = document.getElementById("counterItems");
  
  let cartCheckout = localStorage.getItem("cart")

  containerCounter.innerHTML++;

}

function decreaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/

}

function changeButtonStatus(button) {
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
   if (button.innerText =="Agregar a carrito") {
        
        button.innerText = "Quitar del carrito";
        button.classList.remove("btn-primary");
        button.classList.add("btn-secondary");

  }
   else {
      
       button.innerText = "Agregar a carrito";
       button.classList.add("btn-primary");
       button.classList.remove("btn-secondary");

  }
  // En este if..else solo cambiamos el boton de agregar a quitar
}
addToCart();