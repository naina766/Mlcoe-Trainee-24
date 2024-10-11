function cursorEffect(){
const page1Cont = document.querySelector("#page1-content");
const mousecr =  document.querySelector("#mousecr")

page1Cont.addEventListener("mousemove",function(move){
   mousecr.style.left = move.pageX + "px";
   mousecr.style.top = move.move.pageY + "px";
} )

page1Content.addEventListener("mouseenter",function(){
    mousecr.style.transform = "scale(1)";
    mousecr.style.opacity = "1";
})
page1Content.addEventListener("mouseleave",function(){
    mousecr.style.transform = "scale(0)";
    mousecr.style.scale = "0";
})
}

cursorEffect();

function page2Animation(){
    const mousecr = document.getElementById("mousecr");
    mousecr.addEventListener('click', function(){
        document.getElementById('page2').scrollIntoView({ behavior: 'smooth'});
    })

    window.addEventListener('scroll',()=>{
        const page2 = document.getElementById('page2');
        const page1 = document.getElementById('page1');
        const page1Height = page1.offsetHeight;

        if(window.scrollY > page1Height -100){
            page2.style.opacity = 1;
            page2.style.transition = "opacity 1s ease-in-out";
        }
    });
}

page2Animation();
