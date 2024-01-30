const wrapper=document.querySelector('.sliderWrapper');
const menuitems=document.querySelectorAll('.menuItem');

menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`;
    });
}); 