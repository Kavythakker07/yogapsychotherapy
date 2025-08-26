






var bgmi= document.querySelector(".bgmi");
var freefire= document.querySelector(".freefire");
var valorant= document.querySelector(".valorant");
var cod= document.querySelector(".cod");


bgmi.addEventListener("mouseenter",()=>{
    gsap.to(".bgmi img",{
        marginTop:"-68vw",
        duration:4
       })
    
})
bgmi.addEventListener("mouseleave",()=>{
    gsap.to(".bgmi img",{
        marginTop:"0vw",
        duration:4
       })
    
})
freefire.addEventListener("mouseenter",()=>{
    gsap.to(".freefire img",{
        marginTop:"-68vw",
        duration:4
       })
    
})
freefire.addEventListener("mouseleave",()=>{
    gsap.to(".freefire img",{
        marginTop:"0vw",
        duration:4
       })
    
})



valorant.addEventListener("mouseenter",()=>{
    gsap.to(".valorant img",{
        marginTop:"-68vw",
        duration:4
       })

})
valorant.addEventListener("mouseleave",()=>{
    gsap.to(".valorant img",{
        marginTop:"0vw",
        duration:4
       })

})


cod.addEventListener("mouseenter",()=>{
    gsap.to(".cod img",{
        marginTop:"-68vw",
        duration:4
       })

})
cod.addEventListener("mouseleave",()=>{
    gsap.to(".cod img",{
        marginTop:"0vw",
        duration:4
       })

})

// // JavaScript to handle responsiveness
document.addEventListener('DOMContentLoaded', function () {
    function adjustLayout() {

        
        // Get the current screen width
        const screenWidth = window.innerWidth;
        if(screenWidth>280){
            bgmi.addEventListener("mouseenter",()=>{
                gsap.to(".bgmi img",{
                    marginTop:"-74vw",
                    duration:4
                   })
                
            })
            bgmi.addEventListener("mouseleave",()=>{
                gsap.to(".bgmi img",{
                    marginTop:"0vw",
                    duration:4
                   })
                
            })
            freefire.addEventListener("mouseenter",()=>{
                gsap.to(".freefire img",{
                    marginTop:"-74vw",
                    duration:4
                   })
                
            })
            freefire.addEventListener("mouseleave",()=>{
                gsap.to(".freefire img",{
                    marginTop:"0vw",
                    duration:4
                   })
                
            })
            
            
            
            valorant.addEventListener("mouseenter",()=>{
                gsap.to(".valorant img",{
                    marginTop:"-74vw",
                    duration:4
                   })
            
            })
            valorant.addEventListener("mouseleave",()=>{
                gsap.to(".valorant img",{
                    marginTop:"0vw",
                    duration:4
                   })
            
            })
            
            
            cod.addEventListener("mouseenter",()=>{
                gsap.to(".cod img",{
                    marginTop:"-74vw",
                    duration:4
                   })
            
            })
            cod.addEventListener("mouseleave",()=>{
                gsap.to(".cod img",{
                    marginTop:"0vw",
                    duration:4
                   })
            
            })
        }
         
      else if(screenWidth<=280 && screenWidth>80){
            bgmi.addEventListener("mouseenter",()=>{
                gsap.to(".bgmi img",{
                    marginTop:"-219vw",
                    duration:2
                   })
                
            })
            bgmi.addEventListener("mouseleave",()=>{
                gsap.to(".bgmi img",{
                    marginTop:"0vw",
                    duration:2
                   })
                
            })
            freefire.addEventListener("mouseenter",()=>{
                gsap.to(".freefire img",{
                    marginTop:"-219vw",
                    duration:2
                   })
                
            })
            freefire.addEventListener("mouseleave",()=>{
                gsap.to(".freefire img",{
                    marginTop:"0vw",
                    duration:2
                   })
                
            })
            
            
            
            valorant.addEventListener("mouseenter",()=>{
                gsap.to(".valorant img",{
                    marginTop:"-219vw",
                    duration:2
                   })
            
            })
            valorant.addEventListener("mouseleave",()=>{
                gsap.to(".valorant img",{
                    marginTop:"0vw",
                    duration:2
                   })
            
            })
            
            
            cod.addEventListener("mouseenter",()=>{
                gsap.to(".cod img",{
                    marginTop:"-219vw",
                    duration:2
                   })
            
            })
            cod.addEventListener("mouseleave",()=>{
                gsap.to(".cod img",{
                    marginTop:"0vw",
                    duration:2
                   })
            
            })
            }
            
            
            
        
       else if(screenWidth<=80){
           
     
    }
}

    // Adjust layout on initial load
    adjustLayout();

    // Adjust layout when the window is resized
    window.addEventListener('resize', adjustLayout);
});

gsap.to(".main",{
    display:"block",
    delay:4
})

gsap.to(".loading",{
    display:"none",
    delay:4
})

// Example of GSAP animation for hover effects
document.querySelectorAll('.news-item, .gallery-item, .merch-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3 });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
    });
});
