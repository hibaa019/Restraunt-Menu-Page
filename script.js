const menu = [

{cat:"burger",name:"Wagyu Burger",price:1890,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"},
{cat:"burger",name:"Chicken Burger",price:1650,img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"},
{cat:"burger",name:"BBQ Burger",price:2190,img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=500"},
{cat:"burger",name:"Cheese Burger",price:1750,img:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500"},

{cat:"sandwich",name:"Italian Sandwich",price:1350,img:"https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500"},
{cat:"sandwich",name:"Philly Steak",price:1890,img:"https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500"},
{cat:"sandwich",name:"Grilled Chicken",price:1450,img:"https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500"},
{cat:"sandwich",name:"Egg Sandwich",price:1200,img:"https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=500"},

{cat:"pizza",name:"Pepperoni Pizza",price:2590,img:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500"},
{cat:"pizza",name:"Margherita",price:2350,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500"},
{cat:"pizza",name:"Tikka Pizza",price:2290,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500"},
{cat:"pizza",name:"Four Cheese",price:2450,img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"},

{cat:"drinks",name:"Mojito",price:690,img:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500"},
{cat:"drinks",name:"Mango Lassi",price:750,img:"https://images.unsplash.com/photo-1626201850129-1c0b3c2f6f49?w=500&q=80"},
{cat:"drinks",name:"Berry Fizz",price:790,img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500"},
{cat:"drinks",name:"Watermelon Juice",price:650,img:"https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=500&q=80"},

{cat:"coffee",name:"Flat White",price:690,img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500"},
{cat:"coffee",name:"Caramel Macchiato",price:790,img:"https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500"},
{cat:"coffee",name:"Espresso Shot",price:590,img:"https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500"},
{cat:"coffee",name:"Rose Latte",price:890,img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"},

{cat:"dessert",name:"Lava Cake",price:990,img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"},
{cat:"dessert",name:"Cheesecake",price:1150,img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"},
{cat:"dessert",name:"Brownie Sundae",price:1050,img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500"},
{cat:"dessert",name:"Red Velvet",price:950,img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80"}

];

let cart=[];

function render(){
const main=document.getElementById("menu");

const categories=["burger","sandwich","pizza","drinks","coffee","dessert"];

main.innerHTML="";

categories.forEach(cat=>{

let items=menu.filter(i=>i.cat===cat);

main.innerHTML+=`
<div class="section">
<h2>${cat.toUpperCase()}</h2>
<div class="grid">

${items.map(item=>`
<div class="card">
<img src="${item.img}">
<div class="card-body">
<h3>${item.name}</h3>
<p class="price">Rs ${item.price}</p>
<button onclick="add('${item.name}',${item.price})">Add to Cart</button>
</div>
</div>
`).join("")}

</div>
</div>
`;

});

}

function add(name,price){
cart.push({name,price});
document.getElementById("cartCount").innerText=cart.length;
updateCart();
}

function updateCart(){
let total=0;
let html="";

cart.forEach(i=>{
total+=i.price;
html+=`<p>${i.name} - Rs ${i.price}</p>`;
});

document.getElementById("cartItems").innerHTML=html;
document.getElementById("total").innerText="Total: Rs "+total;
}

function toggleCart(){
document.getElementById("cart").style.display=
document.getElementById("cart").style.display==="block"?"none":"block";
}

render();
