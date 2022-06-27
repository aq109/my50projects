window.addEventListener('DOMContentLoaded',function(){
    let btn = document.querySelector('.btn');
    let active = this.document.querySelector('.search');

    btn.addEventListener('click',() => active.classList.toggle('active'));
})