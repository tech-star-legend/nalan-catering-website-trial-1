/*==========================================================
                NALAN CATERING
                MAIN JAVASCRIPT
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
                LOADER
    =====================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            document.body.style.overflowY = "auto";

        }, 2500);

    });

    document.body.style.overflow = "hidden";

    /*=====================================
            NAVBAR SCROLL EFFECT
    =====================================*/

    const navbar = document.querySelector(".navbar");

    function navbarScroll(){

        if(window.scrollY > 40){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);

    /*=====================================
            SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*=====================================
            SCROLL REVEAL
    =====================================*/

    const revealItems=document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom-in"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    revealItems.forEach(item=>{

        observer.observe(item);

    });

    /*=====================================
            HERO IMAGE PARALLAX
    =====================================*/

    const heroImage=document.querySelector(".hero-image img");

    window.addEventListener("mousemove",(e)=>{

        if(!heroImage) return;

        const x=(window.innerWidth/2-e.clientX)/55;

        const y=(window.innerHeight/2-e.clientY)/55;

        heroImage.style.transform=

        `translate(${x}px,${y}px)`;

    });

    /*=====================================
            BUTTON RIPPLE
    =====================================*/

    document.querySelectorAll(".primary-btn").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-5px)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0px)";

        });

    });

    /*=====================================
            ACTIVE NAVIGATION
    =====================================*/

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".desktop-menu a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-150;

            if(window.scrollY>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

});