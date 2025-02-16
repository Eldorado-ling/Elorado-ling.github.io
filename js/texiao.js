// [BlogRoot]/source/js/stars.js  
document.addEventListener('DOMContentLoaded',  () => {
  const starCount = Math.floor(Math.random()  * 4) + 30;
  
  // 初始化星星 
  for (let i = 0; i < starCount; i++) {
    createStar(true); // 首次创建 
  }
 
  // 持续维护星星数量 
  setInterval(() => {
    const currentStars = document.querySelectorAll('.star').length; 
    if (currentStars < 3) createStar();
  }, 3000);
});
 
function createStar(initial = false) {
  const star = document.createElement('div'); 
  star.className  = 'star';
  
  // 首次生成时随机位置 
  if (initial) {
    star.style.left  = Math.random()  * 100 + 'vw';
    star.style.top  = Math.random()  * 100 + 'vh';
  }
 
  // 动画参数 
  star.style.animationDelay  = Math.random()  * 3 + 's';
  star.style.animationDuration  = (Math.random()  * 1.5 + 1) + 's';
  
  document.body.appendChild(star); 
 
  // 每次动画结束后更新位置 
  star.addEventListener('animationiteration',  () => {
    star.style.left  = Math.random()  * 100 + 'vw';
    star.style.top  = Math.random()  * 100 + 'vh';
    star.style.animationDuration  = (Math.random()  * 1.5 + 1) + 's';
  });
}