const stars = document.querySelectorAll('.fas');
const emojis = document.querySelector('.emoji-container');



stars.forEach((star, index)=>{
  
    star.addEventListener('click',(e)=>{
    
        emojis.style.transform =`translateX(-${index * 50}px)`;
        stars.forEach((starEl, idx) => {
            if(idx <= index){
                starEl.classList.add('active')
            }else{
                starEl.classList.remove('active')
            }
        });
 
     
    })


})

