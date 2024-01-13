const sun = document.querySelector(".sun");
const moon  = document.querySelector(".moon")
const button = document.querySelector(".button");
const body = document.querySelector(".body");
let isBackgroundChanged = false;
moon.style.opacity = '0';
button.addEventListener('click',()=>{
        if (isBackgroundChanged) {
            sun.style.left = "0";
            moon.style.left = "0";
            sun.style.opacity = '1';
            moon.style.opacity = '0';
            document.body.classList.remove('dark-mode');
            button.style.background = 'linear-gradient(#77C2D0, #3D91A7)';
        } else {
            sun.style.left = "67%";
            moon.style.left = "67%";
            button.style.background = 'linear-gradient(#041326, #0E314C)';
            sun.style.opacity = '0';
            moon.style.opacity = '1';
            document.body.classList.add('dark-mode');
        }
        isBackgroundChanged = !isBackgroundChanged;
});