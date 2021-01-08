let products = [
{name: "brulee", price: 1 } ,
{name:"white choco" , price: 1.5},
{name:"dates", price: 0.75 },
]
let cart = [];
    let total = 0 ;

function myCart(index){
    let product = products[index];
    let quantity= document.getElementById(index).value;
    console.log(quantity)
    product.quantity = quantity;
   cart.push(product);
    
    document.getElementById("list").innerHTML="";

    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        let price = element.price * element.quantity ;
        total= total + price;
        let list = document.getElementById("list");
        list.innerHTML +=`<li>${element.name} ${element.price}</li>`;

        console.log(list)   
    }
    document.getElementById(`total`).innerText=`${total} KD`
}