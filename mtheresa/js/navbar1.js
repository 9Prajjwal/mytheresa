function navbar1() {
    return `
        <div id="head">
            <div id="first_part">
                <a>
                    <p>WOMEN</p>
                </a>
                <a>
                    <p>MEN</p>
                </a>
                <a>
                    <p>KIDS</p>
                </a>
                <a>
                    <p>LIFE</p>
                </a>
            </div>
            <div id="second_part">
                <a>
                    <p>Signup for Newsletter</p>
                </a>
                <a>
                    <p id="ma">My account</p>
                </a>
                <a>
                    <p id="wl">My Wishlist</p>
                </a>
                <a>
                    <p>International | English</p>
                </a>
            </div>
        </div>
        <div id="mid">
            <div id="stdiv">
                <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220608T143740"
                    alt="">
            </div>
            <div id="nddiv">
                <p>SHOPPING BAG</p>
                <h5 id="count"></h5>
            </div>
        </div>

        <div id="tail">
            <div>
                <a >NEWARRIVALS</a>
                <a >DESIGNERS</a>
                <a >CLOTHING</a>
                <a >SHOES</a>
                <a >BAGS</a>
                <a >ACCESSORIES</a>
                <a >SALE</a>
            </div>
            <div>
                <input type="text" placeholder="Search for...">
            </div>
            
        </div>
    `
}

document.querySelector("#navbar").innerHTML=navbar1();


document.querySelector("#tail").addEventListener("click",()=>{
    window.location.href="clothing.html";
})

document.querySelector("#first_part").addEventListener("click",()=>{
    window.location.href="menhomepage.html";
})

document.querySelector("#wl").addEventListener("click",()=>{
    window.location.href="wishlist.html";
})

document.querySelector("#nddiv").addEventListener("click",()=>{
    window.location.href="cart.html";
})

document.querySelector("#ma").addEventListener("click",()=>{
    window.location.href="login.html";
})

document.querySelector("#stdiv").addEventListener("click",()=>{
    window.location.href="menhomepage.html";
})
