//buat variable menu_icon
let menu_icon = document.getElementById("menu_icon");
let aside_menu = document.getElementById("aside_menu");
let close_icon = document.getElementById("close_icon");
let mobile_menu = document.getElementById("mobile_menu");
let password = document.getElementById("password");
let form_auth = document.getElementById("form_auth");
let email = document.getElementById("email");
let password2 = document.getElementById("password2");
let togglepass = document.getElementById('togglepass');
let helper_pass = document.getElementById('helper_pass')

// show menu
menu_icon.addEventListener('click', ()=>{
    aside_menu.style.display = "flex";
    setTimeout(()=>{
        mobile_menu.style.transform = "translateX(0%)"
    }, 200)
});

// close menu
close_icon.addEventListener('click', ()=>{
    mobile_menu.style.transform = "translateX(100%)"
    setTimeout(()=>{
        aside_menu.style.display = "none";
    }, 200)
});

// toggle password
togglepass.addEventListener('click' ,()=>{
    if (password.getAttribute('type') == 'password') {
    password.setAttribute('type', 'text');
    password2.setAttribute('type', 'text');
    return;
}

    password.setAttribute('type', 'password');
    password2.setAttribute('type', 'password');
});

//listen field pass
let formInputData = {
    email : '',
    password : '',
    password2 : '',
};

password.addEventListener("input", (e) => {
    formInputData.password = e.target.value;
    console.info(formInputData);
});
    
password2.addEventListener("input", (e) => {
    formInputData.password2 = e.target.value;
    console.info(formInputData);

    if(formInputData.password !== formInputData.password2){
    helper_pass.style.display = 'flex';
    return;
    }

    helper_pass.style.display = 'none'
});
//listen field email
email.addEventListener('input', (e) => {
    formInputData.email = e.target.value;
});

//handle submit
form_auth,addEventListener('submit', (e) => {
    // cegah form reload page
    e.preventDefault();

    console.info(formInputData)
});
