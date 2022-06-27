window.addEventListener('DOMContentLoaded',function(){
    let bg = document.querySelector('.bg');
    let gb = document.querySelector('.loading-text');

    let num = 0;
    let time =setInterval(dudu,25);

    function dudu() {
        if(num > 100) {
            clearInterval(time);
        }else {
            //  loadText.innerText = `${load}%`
            // loadText.style.opacity = scale(load, 0, 100, 1, 0)
            // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

            // scale(load, 0, 100, 1, 0) ？？
            bg.style.filter = 'blur('+(25-num/4)+'px)'
            // bg.style.opacity = num/100;
            gb.innerHTML=num + '%';
            gb.style.opacity = (100 - num)+'%';
            num++;
        }
    }
})