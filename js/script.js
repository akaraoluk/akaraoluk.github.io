
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out")
    document.querySelector("section.active").classList.remove("active")
}


/*---------------Active Section--------------------*/

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
            hideSection();
            document.body.classList.add("hide-scrolling");
        setTimeout(() =>{
            window.scrollTo(0,0);
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            document.body.classList.remove("hide-scrolling");
        },0);
        const target = e.target.getAttribute("href");
        document.querySelector(target).classList.add("active");
    }
});

/*---------------------- About Tabs ----------------------*/

const tabsContainer = document.querySelector(".about-tabs");
const skillsTabsContainer = document.querySelector(".skills-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});


skillsTabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-skill-item") && !e.target.classList.contains("active")){
        skillsTabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-skill-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

/*---------------Portfolio Item Details Popup---------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

/*--------------------------- hide popup when clicking outside of it ---------------------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

function toggleHomePage(){
    hideSection();
    document.querySelector(".home-section").classList.add("active");
}
document.querySelector(".close-button").addEventListener("click", toggleHomePage);
document.querySelector(".close-button-2").addEventListener("click", toggleHomePage);