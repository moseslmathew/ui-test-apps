setInterval(setClock,1000)
function setClock(){

    const hourHand=document.querySelector('.hand.hour')
    const minuteHand=document.querySelector('.hand.minute')
    const secondHand=document.querySelector('.hand.second')

    const currentDate=new Date();
    var hours=currentDate.getHours(); 
    hours=hours>12?hours-12:hours;  

    const secondsRatio=currentDate.getSeconds()*6;
    const minuteRatio=currentDate.getMinutes()*6;           
    const hourRatio=hours*30+(30/60)*currentDate.getMinutes();     

   

    setRotation(hourHand,hourRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(secondHand,secondsRatio);

    
}
function setRotation(element,rotationAngle){
element.style.setProperty('--rotation',rotationAngle)
}



setClock()