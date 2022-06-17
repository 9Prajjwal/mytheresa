import showData from "./data.js";

let data = showData();

console.log(data);
let productList =  [];

let obj={};

obj.a = data.length;

console.log(obj);


let appendData = (data) => {

    document.getElementById("product").innerHTML=null;

    let product = document.getElementById("product");

    let result = document.getElementById("result");
    result.innerHTML = null;

    let p = document.createElement("p");
    p.innerText = obj.a;

    result.append(p);
   
    data.forEach((el) => {

      

        let box = document.createElement("div");
        box.setAttribute("class","product");
    
        let a=document.createElement("a");
        a.setAttribute("href","product.html");
        a.addEventListener("click", function() {
            addToProductlist(el);                   
        }) 
    
        let img1 = document.createElement("img");
        img1.src = el.img_1;
        img1.addEventListener("mouseenter", function() {
            img1.src=el.img_2;
        })
        img1.addEventListener("mouseleave",function() {
            img1.src=el.img_1;
        })
    
        a.append(img1)
       
    
        let title1 = document.createElement("h3");
        title1.innerText = el.title;
        title1.setAttribute("white-space","nowrap");
    
        let a_p = document.createElement("p");
        a_p.innerText = el.description;
    
        let price1 = document.createElement("b");
        price1.innerText = `€${el.price}`;
        price1.style.color="red";
    
        let strprice = document.createElement("a");
        strprice.innerHTML= `€${el.strikedoffprice}    `;
        strprice.setAttribute("class", "strikep")
    
        let offer = document.createElement("p")
        offer.innerHTML= ` ${el.discount}% off`;
        offer.style.color="red";
        offer.style.fontWeight="bolder";
       
    
        box.append(a, title1, a_p,  strprice, price1, offer)
    
        product.append(box);

    
       });

}


let displayPage = async () => {
    try{
        appendData(data);
        
        console.log("data:",data);
       
    }catch(err) {
        console.log(err);
    }
}

displayPage();



let addToProductlist = (el) => {
    console.log(el);
    productList.push(el);
    localStorage.setItem("Product", JSON.stringify(productList))
};    


let sorting = () => {
    let prices = document.querySelector("#sortby").value;
    console.log(prices)
    if (prices == "hightolow") {
        data.sort(function (a, b) {
            return b.price - a.price;
            
        });
 console.log(data);
        appendData(data)
    }
    if (prices == "lowtohigh") {
       data.sort(function (a, b) {
            return a.price - b.price;
        });
        appendData(data)
    }
}

document.getElementById('sortby').addEventListener('change', sorting);

//------------title-filter-start----------//

function junya()  {
    let value = document.querySelector("#junya").checked;
    console.log(value);
    if (value == true) {
        let junya_item = data.filter(function (elem, index) {
            return elem.title == "JUNYA WATANABE";
        });
        appendData(junya_item);
    } else {
        appendData(data);
    }
}

document.getElementById('junya').addEventListener('change', junya);


function homme() {
    var value = document.querySelector("#homme").checked;
    console.log(value)
    if (value == true) {
        var homme_item = data.filter(function (elem, index) {
            return elem.title == "HOMME DEUX";
        });
        appendData(homme_item);
    } else {
        appendData(data);
    }
}

document.getElementById('homme').addEventListener('change',homme);

function nanu() {
    var value = document.querySelector("#nanu").checked;
    console.log(value);
    if (value == true) {
        var nanu_item = data.filter(function (elem, index) {
            return elem.title == "NANUSHKA";
        });
        appendData(nanu_item);
    } else {
        appendData(data);
    }
}

document.getElementById('nanu').addEventListener('change', nanu);

function alanui() {
    var value = document.querySelector("#alanui").checked;
    console.log(value);
    if (value == true) {
        var alanui_item = data.filter(function (elem, index) {
            return elem.title == "ALANUI";
        });
        appendData(alanui_item);
    } else {
        appendData(data);
    }
}

document.getElementById('alanui').addEventListener('change',alanui);

let lanvin = () => {
    let value = document.querySelector("#lanvin").checked;
    console.log(value);
    if (value == true) {
        let lanvin_item = data.filter(function (elem, index) {
            return elem.title == "LANVIN";
        });
        appendData(lanvin_item);
    } else {
        appendData(data);
    }
}

document.getElementById('lanvin').addEventListener('change',lanvin);

let marni = () =>  {
    var value = document.querySelector("#marni").checked;
    console.log(value);
    if (value == true) {
        var marni_item = data.filter(function (elem, index) {
            return elem.title == "MARNI";
        });
        appendData(marni_item);
    } else {
        appendData(data);
    }
}

document.getElementById('marni').addEventListener('change',marni);

         // price filter

        

         let $50to$100 = () =>  {
            let $ = document.querySelector("#fifty").checked;
            if ($ == true) {
                let $50to$100 = data.filter(function (elem) {
                    if (elem.price > 50  && elem.price <= 100) {
                        return elem.price;
                        
                    }
                    
                });
                appendData($50to$100);
    } else {
        appendData(data);
    }
        }

        document.getElementById('fifty').addEventListener('change', $50to$100);
        
        let $101to$200 = () =>  {
            var Rs = document.querySelector("#hundred").checked;
            if (Rs == true) {
                var Rs1199toRs2098 = data.filter(function (elem) {
                    if (elem.price > 100 && elem.price <= 200) {
                        return elem.price;
                    }
                });
               appendData(Rs1199toRs2098);
            } else {
               appendData(data)
            }
        }

        document.getElementById('hundred').addEventListener('change',$101to$200);
        
        
        let $201to$500 = () =>  {
            var Rs = document.querySelector("#twohundred").checked;
            if (Rs == true) {
                var Rs2098toRs3119 = data.filter(function (elem) {
                    if (elem.price > 200 && elem.price <= 500) {
                        return elem.price;
                    }
                });
                appendData(Rs2098toRs3119);
            } else {
               appendData(data)
            }
        }

        document.getElementById('twohundred').addEventListener('change',$201to$500);
        
        let $501andabove = () =>  {
            var Rs = document.querySelector("#fivehundred").checked;
            if (Rs == true) {
                var Rs3119toRsabove = data.filter(function (elem) {
                    if (elem.price > 500) {
                        return elem.price;
                    }
                });
                appendData(Rs3119toRsabove);
            } else {
                appendData(data)
            }
        }

        document.getElementById('fivehundred').addEventListener('change',$501andabove);
        
        //----------price-filter-end--------------//
        
        //---------discount-filter-start-----------//
        
        
        
        let above50 = () =>  {
            var above50 = document.querySelector("#above50").checked;
            if (above50 == true) {
                var above50 = data.filter(function (elem) {
                    if (elem.discount >= 50) {
                        return elem.discount;
                    }
                });
                appendData(above50);
            } else {
                appendData(data)
            }
        }

        document.getElementById('above50').addEventListener('change',above50);
        
        let above60 = () =>  {
            var above60 = document.querySelector("#above60").checked;
            if (above60 == true) {
                var above60 = data.filter(function (elem) {
                    if (elem.discount >= 60) {
                        return elem.discount;
                    }
                });
                appendData(above60);
            } else {
                appendData(data)
            }
        }

        document.getElementById('above60').addEventListener('change',above60);
        
        let above70 = () => {
            var above70 = document.querySelector("#above70").checked;
            if (above70 == true) {
                var above70 = data.filter(function (elem) {
                    if (elem.discount >= 70) {
                        return elem.discount;
                    }
                });
                appendData(above70);
            } else {
                appendData(data)
            }
        }

        document.getElementById('above70').addEventListener('change',above70);
        