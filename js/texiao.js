document.addEventListener('DOMContentLoaded',  () => {
  // 生成4-6颗星星 
  const starCount = Math.floor(Math.random()  * 3) + 30;
  
  for (let i = 0; i < starCount; i++) {
    createStar();
  }
});
 
function createStar() {
  const star = document.createElement('div'); 
  star.className  = 'star';
  
  // 区域控制（左上30%x30% / 右上30%x30%）
  const isLeft = Math.random()  > 0.5;
  const posX = isLeft ? 
    Math.random()  * 50 : 
    70 + Math.random()  * 50;
  const posY = Math.random()  * 50;
 
  star.style.left  = posX + '%';
  star.style.top  = posY + '%';
 
  // 动态参数 
  star.style.animationDelay  = Math.random()  * 3 + 's';
  star.style.animationDuration  = (Math.random()  * 2 + 2) + 's';
  
  // 添加光线元素 
  const core = document.createElement('span'); 
  star.appendChild(core); 
  
  document.body.appendChild(star); 
}