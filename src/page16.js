function showpic(mode){
    var selectedType = document.getElementById('type').value;
    var image = document.getElementById('image');
    image.classList.remove('expand-animation');
    if (mode == 1){
        if (selectedType === 'type1') {
            image.src = 'pic/single-1.png';
        } else if (selectedType === 'type2') {
            image.src = 'pic/single-2.png';
        } else if (selectedType === 'type3') {
            image.src = 'pic/single-3.png';
        }
    }else if (mode == 2){
        image.src = 'pic/success.png';
    }else if (mode == 3){
        image.src = 'pic/lost.png';
    }    
    setTimeout(function() {
        image.style.display = 'block';
        image.classList.add('expand-animation');
    }, 10); // 小延迟以确保动画被触发
}