// Selecting element
const plusBtn1 = document.getElementById("plusBtn1");
const plusBtn2 = document.getElementById("plusBtn2");

const minusBtn1 = document.getElementById("minusBtn1");
const minusBtn2 = document.getElementById("minusBtn2");

const itemCount1 = document.getElementById("itemCount1");
const itemCount2 = document.getElementById("itemCount2");

const itemPrice1 = document.getElementById("itemPrice1");
const itemPrice2 = document.getElementById("itemPrice2");

const removeItem1 = document.getElementById("removeItem1");
const removeItem2 = document.getElementById("removeItem2");


const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");

const checkoutBtn = document.getElementById("checkoutBtn");

// Increment for item 1
plusBtn1.addEventListener("click", function() {
    manageItem("itemCount1", "itemPrice1", "plus");
})

// Decrement for item 1
minusBtn1.addEventListener("click", function() {
    manageItem("itemCount1", "itemPrice1", "minus");
})

// Increment for item 2
plusBtn2.addEventListener("click", function() {
    manageItem("itemCount2", "itemPrice2", "plus");
})

// Decrement for item 2
minusBtn2.addEventListener("click", function() {
    manageItem("itemCount2", "itemPrice2", "minus");
})


// Remove for item 1
removeItem1.addEventListener("click", function() {
    removeItem("item1", "itemPrice1");
})

// Remove for item 2
removeItem2.addEventListener("click", function() {
    removeItem("item2", "itemPrice2");
})

// Manage Item
function manageItem(itemCountId, itemPriceId, type) {
    const itemCount = document.getElementById(itemCountId).value;
    const newItemCount = type == "plus" ? parseInt(itemCount) + 1 : parseInt(itemCount) - 1 ;

    const itemPrice = document.getElementById(itemPriceId).innerText;

    let itemPriceAmount = parseInt(itemPrice/itemCount) * newItemCount;

    document.getElementById(itemCountId).value = newItemCount;
    document.getElementById(itemPriceId).innerText = itemPriceAmount;
    updateTotal();

}

function removeItem(itemId, itemPriceId) {
    document.getElementById(itemId).style.display="none";
    document.getElementById(itemPriceId).innerText = 0;
    
    updateTotal();
}

// Update price 

function updateTotal() {
    const price1 = itemPrice1.innerText;
    const price2 = itemPrice2.innerText;
    if(price1 == 0) {
        document.getElementById("item1").style.display="none";
        
    } else  if (price2 == 0) {
        document.getElementById("item2").style.display="none";
    }
    const subTotal = parseFloat(price1) + parseFloat(price2);
     if (subTotal == 0) {
        document.getElementById("items-container").style.display="none";
        document.getElementById("empty-container").style.display="block";
     }
    // adding 5% tax
    let tax = subTotal * 5 / 100 ;
    document.getElementById('tax').innerText = tax;
    document.getElementById("subtotal").innerText = subTotal;

    document.getElementById('total').innerText = subTotal + tax;
}

// Checkout 
checkoutBtn.addEventListener("click", function() {
    document.getElementById("checkout-container").style.display = "block";
    document.getElementById("items-container").style.display = "none";
})

updateTotal();