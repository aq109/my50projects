(function(){
    let panels = document.querySelectorAll('.panel');
    panels.forEach(function(value){
        value.addEventListener('click',function(){
            removeName();
            this.classList.add('active');
        })
    })
    function removeName() {
        panels.forEach(function(value) {
            value.classList.remove('active')
        }) 
    }
})()