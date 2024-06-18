/* let ArrProducts = [
    {
        id: 1,
        name: "IPhone 14 Pro Max",
        image: "hero.png",
        price: "70,000",
        rating: 5,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid similique in rem vel ex labore vitae explicabo quibusdam harum.",
        category: "mobiles"
    },

    {
        id: 2,
        name: "IPhone 13 Pro Max",
        image: "hero.png",
        price: "60,000",
        rating: 4,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid similique in rem vel ex labore vitae explicabo quibusdam harum.",
        category: "mobiles"
    },

    {
        id: 3,
        name: "IPhone 11 Pro Max",
        image: "hero.png",
        price: "35,300",
        rating: 3,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid similique in rem vel ex labore vitae explicabo quibusdam harum.",
        category: "mobiles"
    },

    {
        id: 4,
        name: "IPhone 15 ",
        image: "hero.png",
        price: "75,000",
        rating: 5,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid similique in rem vel ex labore vitae explicabo quibusdam harum.",
        category: "mobiles"
    },
]
const body = document.querySelector("body");
const products = document.querySelector(".products");

let checkOutList = [];


function onInIt(){
    ArrProducts.forEach((item, key) => {
      let div = document.createElement("div");
      div.classList.add("item");

      div.innerHTML=`
    <div class= "name"> ${item.name}</div>
    <div class= "price"><small>Rs.</small> ${item.price}</div>
    <button onclick="addToCart(${key + 1})"> <i class="fa fa-cart-plus"> </i> Add to Cart</button>
    `;

    products.appendChild(div);
  });
}

onInIt();

        div.innerHTML = 
        ` <span class="category">${item.category}</span>
          <img class="productImage" src="${item.image}" />
          <h2 class="productName">${item.name}</h2>
         <p class="productDescription">${item.des}</p>
        <p class="productPrice"><small>Rs.</small> ${item.price}</p>
          <button onclick="addToCart(${key + 1})"><i class="fa fa-cart-plus"> </i> Add to Cart </button>`;

        products.appendChild(div);
    }); 
}

onInIt();  


function addToCart(id){
    console.log(id);
}

*/

/*

let ArrProducts= [
    {
        id: 1,
        name: "IPhone 15 Pro Max",
        price: " 70,000",
        rating: 5,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
        },

        {
            id: 2,
            name: "IPhone 13 Pro Max",
            price: "60,000",
            rating: 4,
            des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
            image: "hero.png",
            },

            {
                id: 3,
                name: "IPhone 15",
                price: "65,000",
                rating: 3,
                des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
                image: "hero.png",
                },

                {
                    id: 4,
                    name: "IPhone 14 Pro",
                    price: "40,000",
                    rating: 5,
                    des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
                    image: "hero.png",
                    },
];




const body = document.querySelector("body");
let products = document.querySelector(".products");

let checkOutList = [];

function onInIt(){
  ArrProducts.forEach((item, key) => {
    let div = document.createElement("div");
    div.classList.add("item");

    

    let star = "";
    for(i=0; i<item.rating; i++){
        star+= `<i class= "fa fa-star"> </i> `
    }

    div.innerHTML=`
   
    <div class= "name"> ${item.name}</div>
    <img class= "image" src="${item.image}">
    <div class"star">${star}</div>
    <div class= "price"><small>Rs.</small> ${item.price}</div>
     <div class= "cat"> ${item.des}</div>
    <button onclick="addToCart(${key + 1})"> <i class="fa fa-cart-plus"> </i> Add to Cart</button>
    `;

    products.appendChild(div);
  });
}

onInIt();

function addToCart(id){
console.log(ArrProducts[id])
    if(checkOutList[id] == null){
        checkOutList[id] = ArrProducts[id];
        }

   
   

}

*/




/* Updating Shopping Basket  */

/* let shoppingBasket = document.querySelector(".shoppingBasket");

shoppingBasket.onclick = () => {
    body.classList.add("active");
};


let close = document.querySelector(".close");

close.onclick = () => {
    body.classList.remove("active");
};




let productList = document.querySelector(".productList");



*/


/*
const ArrProducts = [
    {
        id: 1,
        name: "IPhone 15 Pro Max",
        price: "70,000",
        rating: 5,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
    {
        id: 2,
        name: "IPhone 13 Pro Max",
        price: "60,000",
        rating: 4,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
    {
        id: 3,
        name: "IPhone 15",
        price: "65,000",
        rating: 3,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
    {
        id: 4,
        name: "IPhone 14 Pro",
        price: "40,000",
        rating: 5,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
];

const body = document.querySelector("body");
const products = document.querySelector(".products");
let productList = document.querySelector(".productList");
let quantity = document.querySelector(".quantity");
let total = document.querySelector(".total  ");



//Shopping Basket 
let shoppingBasket = document.querySelector(".shoppingBasket");

shoppingBasket.onclick = () => {
    body.classList.add("active");
};


let close = document.querySelector(".close");

close.onclick = () => {
    body.classList.remove("active");
};

// ------


// Initialize products on page load
function onInIt() {
    ArrProducts.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("item");

        // Ratings stars
        let star = "";
        for (let i = 0; i < item.rating; i++) {
            star += `<i class="fa fa-star"></i>`;
        }

        div.innerHTML = `
            <div class="name">${item.name}</div>
            <img class="image" src="${item.image}">
            <div class="star">${star}</div>
            <div class="price"><small>Rs.</small> ${item.price}</div>
            <div class="cat">${item.des}</div>
            <button onclick="addToCart(${item.id})"><i class="fa fa-cart-plus"></i> Add to Cart</button>
        `;

        products.appendChild(div);
    });
}

// Call onInIt to populate initial products
onInIt();

// Array to store products in cart
let checkOutList = [];

// Function to add product to cart
function addToCart(id) {
    // Find the product in ArrProducts based on id
    const productToAdd = ArrProducts.find(product => product.id === id);

    // Check if the product already exists in the cart
    const existingProduct = checkOutList.find(product => product.id === id);

    if (existingProduct) {
        // Increment quantity if the product already exists in cart
        existingProduct.quantity++;
    } else {
        // Add new product to cart with initial quantity
        checkOutList.push({ ...productToAdd, quantity: 1 });
    }

    console.log(checkOutList); // For testing

    reloadCart();
}

// Function to reload cart display
function reloadCart() {
    // Assuming productList and quantity are defined in your HTML or JavaScript
    const productList = document.querySelector(".productList");
    const quantity = document.querySelector(".quantity");

    productList.innerHTML = ""; // Clear previous contents
    let count = 0;
    let totalPrice = 0;

    checkOutList.forEach((item, key) => {
        totalPrice+=parseInt(item.price*item.quantity)
        count += item.quantity;
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.image}">
            <div>${item.name}</div>
            <div>Rs. ${item.price}</div>
            <div>
            <button> - </button>
            <div  class="count">${item.quantity} </div>
            <button> + </button>
            </div>
        `;
        productList.appendChild(li);
    });

    total.innerHTML = `<small> Subtotal (${count} items) Rs.</small> ` + totalPrice;
    quantity.innerHTML = count;
}


*/


const ArrProducts = [
    {
        id: 1,
        name: "IPhone 15 Pro Max",
        price: 70000,
        rating: 5,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
    {
        id: 2,
        name: "IPhone 13 Pro Max",
        price: 60000,
        rating: 4,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
    {
        id: 3,
        name: "IPhone 15",
        price: 65000,
        rating: 3,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
    {
        id: 4,
        name: "IPhone 14 Pro",
        price: 40000,
        rating: 5,
        des: "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system",
        image: "hero.png",
    },
];

const body = document.querySelector("body");
const products = document.querySelector(".products");
let productList = document.querySelector(".productList");
let quantity = document.querySelector(".quantity");
let total = document.querySelector(".total");

// Shopping Basket 
let shoppingBasket = document.querySelector(".shoppingBasket");

shoppingBasket.onclick = () => {
    body.classList.add("active");
};

let close = document.querySelector(".close");

close.onclick = () => {
    body.classList.remove("active");
};

// Initialize products on page load
function onInIt() {
    ArrProducts.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("item");

        // Ratings stars
        let star = "";
        for (let i = 0; i < item.rating; i++) {
            star += `<i class="fa fa-star"></i>`;
        }

        div.innerHTML = `
            <div class="name">${item.name}</div>
            <img class="image" src="${item.image}">
            <div class="star">${star}</div>
            <div class="price"><small>Rs.</small> ${item.price}</div>
            <div class="cat">${item.des}</div>
            <button class="addToCartBtn" data-id="${item.id}"><i class="fa fa-cart-plus"></i> Add to Cart</button>
        `;

        products.appendChild(div);

        // Add event listener for "Add to Cart" button
        div.querySelector(".addToCartBtn").addEventListener("click", () => {
            addToCart(item.id); // Call addToCart function with product id
            alert("Item has been added to cart."); // Optional alert message
        });
    });
}

// Call onInIt to populate initial products
onInIt();

// Array to store products in cart
let checkOutList = [];

// Function to add product to cart
function addToCart(id) {
    // Find the product in ArrProducts based on id
    const productToAdd = ArrProducts.find(product => product.id === id);

    // Check if the product already exists in the cart
    const existingProduct = checkOutList.find(product => product.id === id);

    if (existingProduct) {
        // Increment quantity if the product already exists in cart
        existingProduct.quantity++;
    } else {
        // Add new product to cart with initial quantity
        checkOutList.push({ ...productToAdd, quantity: 1 });
    }

    console.log(checkOutList); // For testing

    reloadCart();
}

// Function to reload cart display
function reloadCart() {
    productList.innerHTML = ""; // Clear previous contents
    let count = 0;
    let totalPrice = 0;

    checkOutList.forEach((item, key) => {
        totalPrice += item.price * item.quantity;
        count += item.quantity;
        let li = document.createElement("li");
        li.innerHTML = `
            
            <div>${item.name}</div>
            <div>Rs. ${item.price}</div>
            <div>
                <button onclick="decreaseQuantity(${key})"> - </button>
                <div class="count">${item.quantity}</div>
                <button onclick="increaseQuantity(${key})"> + </button>
            </div>
        `;
        productList.appendChild(li);
    });

    total.innerHTML = `<small> Subtotal (${count} items) Rs.</small> ` + totalPrice.toLocaleString(); // Format total price with comma separation
    quantity.innerHTML = count;
}

// Function to decrease quantity of an item in cart
function decreaseQuantity(index) {
    if (checkOutList[index].quantity > 0) {
        checkOutList[index].quantity--;
        reloadCart();
    }

    // Check if quantity is zero after decrementing
    if (checkOutList[index].quantity === 0) {
        // Optionally remove the item from the cart
        const confirmation = confirm(`Do you want to remove ${checkOutList[index].name} from cart?`);
        if (confirmation) {
            checkOutList.splice(index, 1); // Remove the item from the array
            reloadCart(); // Update the cart display
        } else {
            // Restore quantity to 1 if user cancels
            checkOutList[index].quantity = 1;
            reloadCart();
        }
    }
}

// Function to increase quantity of an item in cart
function increaseQuantity(index) {
    checkOutList[index].quantity++;
    reloadCart();
}

// Order placement
total.addEventListener("click", () => {
    if (checkOutList.length === 0) {
        alert("Please add at least one item to the cart.");
    } else {
        alert("Order Placed!");
        // You can optionally perform further actions here, like sending the order to a server, clearing the cart, etc.
    }
});
























