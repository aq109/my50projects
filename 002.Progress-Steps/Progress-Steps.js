(function(){
    let prev = document.querySelector("#prev");
    let next = document.querySelector("#next");
    let circles = document.querySelectorAll('.circle');
    let progress = document.querySelector("#progress");

    
    let lent = 0;
    
    bianli();
    // 按上一个按钮
    prev.addEventListener('click',function(){
        lent--;
        bianli();
    });
    // 点击下一个按钮
    next.addEventListener('click',function(){
        lent++;
        bianli();
    })

    // 初始化函数
    function bianli() {
        circles.forEach(function(value,index) {
            if(lent >= index) {
                value.classList.add('active');
            }else {
                value.classList.remove('active');
            }
        })
        progress.style.width = lent/(circles.length - 1) * 100 +'%';
        // 判断lent  为 0 和 最大点
        lent === 0 ? prev.disabled = true : lent === circles.length - 1 ? next.disabled = true :(prev.disabled = false,next.disabled = false)
    }
    
}())