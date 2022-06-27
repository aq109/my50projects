window.addEventListener('DOMContentLoaded',function(){
    let container = document.querySelector('.container');
    let close = document.querySelector("#close");
    let open = document.querySelector("#open");

    open.addEventListener('click',() => container.classList.add('show-nav'));
    close.addEventListener('click',() => container.classList.remove('show-nav'));
})
