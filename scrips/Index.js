const darkButton = document.getElementById('dark');
let darkmode = true;
const body = document.body;

darkButton.onclick = () => {
    if(darkmode){
        body.classList.replace('light', 'dark');
    } else {
        body.classList.replace('dark', 'light')
    }
};
