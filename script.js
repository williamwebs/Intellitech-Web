const menuIcon = document.querySelector("#menuIcon");
const nav = document.querySelector(".nav-sec");

menuIcon.addEventListener("click", ()=>{
    if (nav.style.display == "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
})

// Quote modal

const closeModal = document.querySelector('.close-quote-menu')
const quoteModal = document.querySelector('.quote-modal')
const quoteNavMenu = document.querySelector('#quote-nav')
const quoteHeroBtn = document.querySelector('#quote-hero-btn')
const quoteServiceBtn = document.querySelector('#quote-service-btn')
const quoteCollabBtn = document.querySelector('#quote-collab-btn')
// const quoteProductbBtn = document.querySelector('#productQuoteBtn')
// const productQuote = document.getElementById('productQuoteBtn')

quoteModal.style.display = "none"

closeModal.addEventListener('click', ()=>{
    quoteModal.style.display = "none"
})

quoteNavMenu.addEventListener('click', ()=>{
    quoteModal.style.display = "block"
});

        


quoteHeroBtn.addEventListener('click', ()=>{
    quoteModal.style.display = "block"
})

quoteServiceBtn.addEventListener('click', ()=>{
    quoteModal.style.display = "block"
})

quoteCollabBtn.addEventListener('click', ()=>{
    quoteModal.style.display = "block"
})

// document.querySelector('.quote-collab-btn').addEventListener('click', ()=>{
//     quoteModal.style.display = "block"
// })

        

        