
let total_price= 0;

let data= JSON.parse(localStorage.getItem("cart"));
let obj={};

let displayCart= (data) => {

   

    let container = document.getElementById("product");
       

    data.forEach((el,ind) => {
        
        let box = document.createElement("div");
        box.setAttribute("class","details");

        let box1 = document.createElement ("div");
        box1.setAttribute("id","box_one")

        let img_box = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.img_1;
        

        img_box.append(image);

        let detail_box = document.createElement("div");

        let p1 = document.createElement("p")
        p1.innerText = el.title;

        let p2 = document.createElement("p");
        p2.innerText = el.description;

        let remove= document.createElement("button");

        remove.innerText= "✖";
       
        remove.addEventListener("click", function(){
            removecart(el, ind)
        })

        let addtowl= document.createElement("button");
        addtowl.id="addtoBag";
        addtowl.innerText= "Add to Wishlist";
        addtowl.addEventListener("click", function(){
            addToWishlist(el, ind);
            addtowl.innerText= "Added to Wishlist"
        })

        detail_box.append(p1, p2, remove,addtowl);

        box1.append(img_box,detail_box);
        
        let box2 = document.createElement("div");
        box2.setAttribute("id","box_two")

        let price_div = document.createElement("div");
        
        let strp = document.createElement("p");
        strp.setAttribute("id","stkprice");
        strp.innerText ="€"+el.strikedoffprice;

        let price = document.createElement("p");
        price.innerText = "€"+el.price;
        price.style.color = "red";

        price_div.append(strp,price);

        let quan_box = document.createElement("div");

        let p3 = document.createElement("p");
        p3.innerText = "1";

        quan_box.append(p3);

        let sub_box = document.createElement("div");

        let sub = document.createElement('p');
        sub.innerText = "€"+el.price;

        sub_box.append(sub);

        box2.append(price_div,quan_box,sub_box);

        let hr = document.createElement("hr")

        box.append(box1,box2);
        
        container.append(box);
        container.append(hr);

        if(obj.price === undefined) {
            obj.price = el.price;
        } else {
            a = obj.price;
            obj.price = a + el.price;
        }
    });


    
}

displayCart(data);

function removecart(el, index){
    data.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(data));
    window.location.reload();
};


function addtowishlist(el, index){
    let data1= JSON.parse(localStorage.getItem("wishlist"));
    data1.push(data[index]);
    data.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(data1))

    alert( "ITEM ADDED TO THE WISHLIST");
    window.location.reload();
}

let subtotal = (obj) => {
    let container1 = document.getElementById("sub_total");
    
    let a = document.createElement("a")
    a.innerText = "Subtotal";

    let a1 = document.createElement("a");
    a1.innerText = " "+"€"+obj.price;

    let p = document.createElement("p");
    p.innerText = "Grand Total" + " " + "€"+obj.price;

    let p1 = document.createElement("p");
    p1.innerText = "VAT exception. VAT not included. Shipping not included."
    
    let btn1 = document.createElement('button');
    btn1.innerText= "PROCEED TO CHECKOUT";
    btn1.setAttribute("id",'btn');
    btn1.addEventListener("click",()=>{
        window.location.href="login.html"
    })
    
    container1.append(a,a1,p,p1,btn1);
}

subtotal(obj);

document.querySelector("#btn").addEventListener("click",()=>{
    window.location.href="login.html"
})
