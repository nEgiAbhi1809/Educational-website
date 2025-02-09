// alert();

window.addEventListener('scroll',()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})





    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            // Change icon
            const icon = faq.querySelector('.faq-icon i');
            if (icon.className === 'fa-solid fa-plus') {
                icon.className = 'fa-solid fa-minus';
            } else {
                icon.className = 'fa-solid fa-plus';
            }
        });
    });


    const menu = document.querySelector(".nav-menu ul");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");
    
    menuBtn.addEventListener('click', () => {
        // menu.style.display = "flex";
        menu.classList.add("show");
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";
    });
    
    closeBtn.addEventListener('click', () => {
        // menu.style.display = "none";
        menu.classList.remove("show");
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
    });
    