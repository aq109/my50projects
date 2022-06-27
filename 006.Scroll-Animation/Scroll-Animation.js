window.addEventListener('DOMContentLoaded',function(){
    let boxs = document.querySelectorAll('.box');
    let hh = document.querySelector('h1');

    window.addEventListener('scroll',cheackBox)

    cheackBox();

    function cheackBox() {
        // 获取页面被卷起来的头部   长
        let topScroll = window.pageYOffset;

        // 获取  页面  可视的高度
        let windowHeight = window.innerHeight;

        boxs.forEach(function(value) {
            if(value.offsetTop <= topScroll + windowHeight - value.offsetHeight) {
                value.classList.add('show');
            } else {
                value.classList.remove('show');
            }
            
        })
    }
    
    
})