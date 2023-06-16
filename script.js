const uri = " https://fakestoreapi.com/products"
// https://estore-gdn3.onrender.com/estore
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let dataDiv = document.querySelector('.dataDiv');
let productsName = document.querySelector('#productsName');

let nama = " Electronic's !"
let namlena = nama.length

let namfuca = () => {
    let loops = setInterval(anim, 200)
    let a, b, c;
    b = 0
    c = ""
    function anim() {
        a = nama[b]
        b = b + 1;
        c = c + a;
        productsName.innerText = c;
    }
    setTimeout(function () {
        clearInterval(loops)
    }, 200 * namlena)
    setTimeout(runner, 4000)
}

let heada = "Electric !"
let lena = heada.length
function electric() {
    let loops = setInterval(anim, 200)
    let a, b, c;
    b = 0
    c = ""
    function anim() {
        a = heada[b]
        b = b + 1;
        c = c + a;
        productsName.innerText = c;
    }
    setTimeout(function () {
        clearInterval(loops)
    }, 200 * lena)
    setTimeout(namfuca, 4000)
}

let nam = " Women's Wear ! "
let namlen = nam.length
let namfuc = () => {
    let loops = setInterval(anim, 200)
    let a, b, c;
    b = 0
    c = ""
    function anim() {
        a = nam[b]
        b = b + 1;
        c = c + a;
        productsName.innerText = c;
    }
    setTimeout(function () {
        clearInterval(loops)
    }, 200 * namlen)
    setTimeout(electric, 4000)
}

let head = " Men's Wear ! "
let len = head.length
function runner() {
    let loops = setInterval(anim, 200)
    let a, b, c;
    b = 0
    c = ""
    function anim() {
        a = head[b]
        b = b + 1;
        c = c + a;
        productsName.innerText = c;
    }
    setTimeout(function () {
        clearInterval(loops)
    }, 200 * len)
    setTimeout(namfuc, 4000)
}
runner();



let html;
let div;

const fetchData = async () => {
    let res = await fetch(uri);
    let data = await res.json();

    data.forEach(element => {
        div = document.createElement('div');
        div.setAttribute("class", "cards");
        div.innerHTML = `<img src="${element.image}" alt="image">
        <p>${element.title.slice(0, 25)}...</p>
        <div id="pricedata"><span id="price">₹${element.price}</span ><img id="likeUnlike" src="unlikedheart.png" alt="liked" /></div>
        <div><p>${element.description.slice(0,50)}...<p></div>
        <div class="buttons">
            <button class="btnAdd">Add To Cart</button>
            <button class="btnBuy">Buy Now</button>
        </div>
        </div>`
        dataDiv.append(div)
    
    });
    // console.log(data)
}


fetchData()


// fetch(uri)
//     .then((res) => {
//         return res.json()
//     })
//     .then((json) => {
//         json.forEach(element => {
//             console.log(element.image)
//         });
//     })

// console.log(data)