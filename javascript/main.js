const target = document.querySelectorAll('[data-animacao]');
const animateclass = 'animate';
function animacaoscroll(){
    const windowtop = window.pageYOffset + (window.innerHeight) ;
    target.forEach(function(element){
        if((windowtop)> element.offsetTop){
            element.classList.add(animateclass);
        } 
    })
}
if(target.length){
    window.addEventListener('scroll',function(){
        animacaoscroll();
})
}

const targetMenu = document.querySelectorAll('[data-animacao-menu]');
const animateClassMenu = 'animate';
function animacaoscrollmenu(){
    const windowtop = window.pageYOffset + ((window.innerHeight * 3) /5) ;
    targetMenu.forEach(function(element){
        if((windowtop)> element.offsetTop){
            element.classList.add(animateClassMenu);
        } 
    })
}
if(targetMenu.length){
    window.addEventListener('scroll',function(){
        animacaoscrollmenu();
})
}

const targetProduto = document.querySelectorAll('[ data-animacaoTexoProduto]');
const animacaoTexoProduto = 'anima';
function animacaoTextoProdutoScroll(){
    const windowtop = window.pageYOffset +((window.innerHeight * 6 /7));
    targetProduto.forEach(function(elemento){
        if((windowtop)> elemento.offsetTop){
            elemento.classList.add(animacaoTexoProduto);
        } 
    })
}
if(targetProduto.length){
    window.addEventListener('scroll',function(){
        animacaoTextoProdutoScroll();
})
}


const menuBtn = document.getElementById('menuBtn');
function toggleMenu(event){
    if (event.type === 'touchstart') event.cancelable();
    const menuNav = document.getElementById('menuNav');
    menuNav.classList.toggle('active');
    const active = menuNav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAttribute('aria-label','Fechar Menu')
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir Menu')

    }
}
menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('touchstart', toggleMenu);