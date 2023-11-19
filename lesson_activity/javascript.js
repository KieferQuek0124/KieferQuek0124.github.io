//popup box
function showmessage(){
    alert("Submit Succesfull");
}

function bigmg(x){
  x.style.height="60%";
  x.style.width="60%";
}

function normalImg(x){
   x.style.height="50%";
   x.style.width="50%";
}


var cartItems = loadCart() || []; 
 
function addToCart(productName, price) { 
    var item = { name: productName, price: price }; 
    cartItems.push(item); 
 
    saveCart(); 
    updateCartUI(); 
} 
 
function removeFromCart(index) { 
    cartItems.splice(index, 1); 
 
    saveCart(); 
    updateCartUI(); 
} 
 
function updateCartUI() { 
    var cartList = document.getElementById('cart-items'); 
    var totalElement = document.getElementById('cart-total'); 
 
    // Clear existing items 
    cartList.innerHTML = ''; 
 
    // Add new items 
    cartItems.forEach(function (item, index) { 
        var listItem = document.createElement('li'); 
        listItem.textContent = item.name + ' - ' + item.price + ' MYR'; 
 
        // Add Remove button 
        var removeButton = document.createElement('button'); 
        removeButton.textContent = 'Remove'; 
        removeButton.onclick = function () { 
            removeFromCart(index); 
        }; 
 
        listItem.appendChild(removeButton); 
        cartList.appendChild(listItem); 
    }); 
 
    // Update total 
    var total = cartItems.reduce(function (sum, item) { 
        return sum + item.price; 
    }, 0); 
 
    totalElement.textContent = total + ' MYR'; 
} 
 
function saveCart() { 
    localStorage.setItem('cart', JSON.stringify(cartItems)); 
} 
 
function loadCart() { 
    var storedCart = localStorage.getItem('cart'); 
    return storedCart ? JSON.parse(storedCart) : null; 
} 
 
// Add this function in your JavaScript 
function showCart() { 
    var cartContainer = document.getElementById('cart-container'); 
    cartContainer.style.display = 'block'; 
 
    // Add a close button (optional) 
    var closeButton = document.createElement('button'); 
    closeButton.textContent = 'Close Cart'; 
    closeButton.onclick = function () { 
        cartContainer.style.display = 'none'; 
        saveCart(); 
    }; 
 
    cartContainer.appendChild(closeButton); 
}

