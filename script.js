
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
    if (close){
        close.addEventListener('click', () =>{
            nav.classList.remove('active');
        })
}
/*Registration form*/
const user_con = document.querySelector('.user-container');
        const regis_btn = document.querySelector('.registration-btn');
        const login_btn = document.querySelector('.login-btn');
        regis_btn.addEventListener('click',() => {
        user_con.classList.add('login-section--display')
           })
        login_btn.addEventListener('click',() => {
    user_con.classList.remove('login-section--display')
        })