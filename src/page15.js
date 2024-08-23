function calculate(){
    var anss = document.querySelectorAll('.ans');
    anss.forEach(function (ans) {
        ans.textContent = Math.floor(Math.random()*100)+'枚';
    });
}
const img1 = document.getElementById('frame1');
img1.style.width = 'auto'; 
img1.style.height = img1.offsetWidth * 1.25 + 'px';

const img2 = document.getElementById('frame2');
img2.style.width = 'auto';
img2.style.height = img2.offsetWidth * 1.25 + 'px';

const img3 = document.getElementById('shuqian');
img3.style.width = '15%';
img3.style.height = img3.offsetWidth * 1.38 + 'px';
