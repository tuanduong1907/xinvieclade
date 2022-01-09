const main = document.querySelector('#main');

/* -------------------- Form login User -------------------- */
const templateFormUserLogin = `
    <div class="form-user__login">
        <form method="post" action="" id="user-login" class="form_login-content">
            <div class="form__login-header">
                <h3 class="form__heading">Đăng Nhập Tài Khoản Tìm Việc</h3>
                <img src="./assets/image/close-icon.svg" alt="" class="form__close">
            </div>
            <div class="form__login-body">
                <img src="./assets/image/login-image.svg" class="form__login-img" alt="">
                <div class="form-group">
                    <label for="user-login__email" class="form__title-input">Địa chỉ email</label>
                    <input type="text" placeholder="Nhập email..." name="user-login__email" id="user-login__email" class="form__login-input">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                    <label for="user-login__password" class="form__title-input">Mật khẩu</label>
                    <input type="password" placeholder="Nhập mật khẩu..." name="user-login__password" id="user-login__password" class="form__login-input">
                    <span class="form-message"></span>
                </div>
                <button class="btn form__button">Đăng Nhập</button>
                <div class="form__option">
                    <a href="#" class="form__option-item">
                        Quên mật khâu ?
                    </a>
                    <div id="reg-user-btn" class="form__option-item">
                        Đăng ký tài khoản
                    </div>
                </div>
                <div class="form__option-another">
                    <div class="form__option-text">
                        <div class="form__option-line"></div>
                        <span>Hoặc</span>
                        <div class="form__option-line"></div>
                    </div>
                    <div class="form__social-wrap">
                        <div class="form__social">
                            <img src="./assets/image/facebok-2-icon.svg" alt="">
                            <span> Facebook </span>
                        </div>
                        <div class="form__social">
                            <img src="./assets/image/google-icon.svg" alt="">
                            <span> Google </span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div> 
`
main.insertAdjacentHTML('beforeend', templateFormUserLogin)
const btnLoginHeader = document.querySelector('.header__btn-login')
const formUserLogin = document.querySelector('.form-user__login')
const btnRegForm = document.querySelector('#reg-user-btn')

// Handle Function

function handleOpenModalLogin() {
    formUserLogin.classList.toggle('active')
    for(let i in inputValues) {
        inputValues[i].value = ''    
    }
}

function handleCloseModalLogin() {
    formUserLogin.classList.remove('active')
}

// Event Click
btnLoginHeader.addEventListener('click', handleOpenModalLogin)
formUserLogin.addEventListener('click', handleOpenModalLogin)

/* -------------------- Form Registration User -------------------- */

const templateFormUserReg = `
<div class="form-user__reg">
    <form method="post" action="" id="user-reg" class="form_login-content">
        <div class="form__login-header">
            <h3 class="form__heading">Đăng Ký Tài Khoản Tìm Việc</h3>
            <img src="./assets/image/close-icon.svg" alt="" class="form__close">
        </div>
        <div class="form__login-body">
            <div class="form-group">
                <label for="user-reg__fullname" class="form__title-input">Họ và tên</label>
                <input type="text" placeholder="Nhập họ và tên..." name="user-reg__fullname" id="user-reg__fullname" class="form__login-input">
                <span class="form-message"></span>
            </div>
            <div class="form-group">
                <label for="user-reg__email" class="form__title-input">Địa chỉ email</label>
                <input type="text" placeholder="Nhập email..." name="user-reg__email" id="user-reg__email" class="form__login-input">
                <span class="form-message"></span>
            </div>
            <div class="form-group">
                <label for="user-reg__phone" class="form__title-input">Số điện thoại</label>
                <input type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' placeholder="Nhập số điện thoại..." name="user-reg__phone" id="user-reg__phone" class="form__login-input">
                <span class="form-message"></span>
            </div>
            <div class="form-group">
                <label for="user-reg__password" class="form__title-input">Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu..." name="user-reg__password" id="user-reg__password" class="form__login-input">
                <span class="form-message"></span>
            </div>
            <div class="form-group">
                <label for="user-reg__confirm-password" class="form__title-input">Xác nhận lại mật khẩu</label>
                <input type="password" placeholder="Nhập lại mật khẩu..." name="user-reg__confirm-password" id="user-reg__confirm-password" class="form__login-input">
                <span class="form-message"></span>
            </div>
            <button class="btn form__button">Đăng Ký</button>
            <div class="form__option--reg">
                <span>Bạn đã có tài khoản ?</span>
                <span id="login-user-btn" class="form__option-item">Đăng nhập</span>
            </div>
            <div class="form__option-another">
                <div class="form__option-text">
                    <div class="form__option-line"></div>
                    <span>Hoặc</span>
                    <div class="form__option-line"></div>
                </div>
                <div class="form__social-wrap">
                    <div class="form__social">
                        <img src="./assets/image/facebok-2-icon.svg" alt="">
                        <span> Facebook </span>
                    </div>
                    <div class="form__social">
                        <img src="./assets/image/google-icon.svg" alt="">
                        <span> Google </span>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div> 
`
main.insertAdjacentHTML('beforeend', templateFormUserReg)
const formUserReg = document.querySelector('.form-user__reg')
const btnLoginUser = document.querySelector('#login-user-btn')
const inputValues = document.querySelectorAll('.form__login-input')


// Handle Function

function handleOpenModalReg() {
    formUserReg.classList.add('active')
    if(formUserLogin) {
        handleCloseModalLogin()
    }
    for(let i in inputValues) {
        inputValues[i].value = ''    
    }
}

function handleCloseModalreg() {
    formUserReg.classList.remove('active')
}

// Event Click
btnRegForm.addEventListener('click', handleOpenModalReg)
formUserReg.addEventListener('click', handleCloseModalreg)
btnLoginUser.addEventListener('click', (e) => {
    handleOpenModalLogin()
    handleCloseModalreg()
})


/* -------------------- Form Login Employer -------------------- */
const templateEmployerLogin = `
    <div class="form-employer__login">
        <form method="post" action="" id="employer-login" class="form_login-content">
            <div class="form__login-header">
                <h3 class="form__heading">Đăng Nhập Tài Khoản Nhà Tuyển Dụng</h3>
                <img src="./assets/image/close-icon.svg" alt="" class="form__close">
            </div>
            <div class="form__login-body">
                <img src="./assets/image/login-image.svg" class="form__login-img" alt="">
                <div class="form-group">
                    <label for="employer-login__email" class="form__title-input">Địa chỉ email</label>
                    <input type="text" placeholder="Nhập email..." name="employer-login__email" id="employer-login__email" class="form__login-input">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                    <label for="employer-login__password" class="form__title-input">Mật khẩu</label>
                    <input type="password" placeholder="Nhập mật khẩu..." name="employer-login__password" id="employer-login__password" class="form__login-input">
                    <span class="form-message"></span>
                </div>
                <button class="btn form__button">Đăng Nhập</button>
                <div class="form__option">
                    <a href="#" class="form__option-item">
                        Quên mật khâu ?
                    </a>
                    <div id="reg-employer-btn" class="form__option-item">
                        Đăng ký tài khoản
                    </div>
                </div>
            </div>
        </form>
    </div> 
`

main.insertAdjacentHTML('beforeend', templateEmployerLogin)
const btnFormEmployer = document.querySelector('.container__employer-btn')
const formEmployerLogin = document.querySelector('.form-employer__login')

// Event Click
btnFormEmployer.addEventListener('click', openEmployerLogin)
formEmployerLogin.addEventListener('click', closeEmployerLogin)

// Function Handle
function openEmployerLogin() {
    formEmployerLogin.classList.add('active')
}

function closeEmployerLogin(e) {
    formEmployerLogin.classList.remove('active')

}


/* -------------------- Form Reg Employer -------------------- */

const templateEmployerReg = `
<div class="form-employer__reg">
     <form method="post" action="" id="employer-reg" class="form_login-content">
         <div class="form__login-header">
             <h3 class="form__heading">Đăng Ký Tài Khoản Nhà Tuyển Dụng</h3>
             <img src="./assets/image/close-icon.svg" alt="" class="form__close">
         </div>
         <div class="form__login-body">
             <!--  -->
             <h4 class="form__tittle-reg">Thông tin tài khoản</h4>
             <div class="form-group">
                 <label for="employer-reg__email" class="form__title-input">Địa chỉ email</label>
                 <input type="text" placeholder="Nhập email..." name="employer-reg__email" id="employer-reg__email" class="form__login-input">
                 <span class="form-message"></span>
             </div>
             <div class="form-group">
                 <label for="employer-reg__password" class="form__title-input">Mật khẩu</label>
                 <input type="password" placeholder="Nhập mật khẩu..." name="employer-reg__password" id="employer-reg__password" class="form__login-input">
                 <span class="form-message"></span>
             </div>
             <div class="form-group">
                 <label for="employer-reg__confirm-password" class="form__title-input">Xác nhận lại mật khẩu</label>
                 <input type="password" placeholder="Nhập lại mật khẩu..." name="employer-reg__confirm-password" id="employer-reg__confirm-password" class="form__login-input">
                 <span class="form-message"></span>
             </div>

             <h4 class="form__tittle-reg">Thông tin liên hệ</h4>
             <div class="form-group">
                 <label for="employer-reg__fullname" class="form__title-input">Họ và tên</label>
                 <input type="text" placeholder="Nhập họ và tên..." name="employer-reg__fullname" id="employer-reg__fullname" class="form__login-input">
                 <span class="form-message"></span>
             </div>
             <div class="form-group">
                 <label for="employer-reg__phone" class="form__title-input">Số điện thoại</label>
                 <input type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' placeholder="Nhập số điện thoại..." name="employer-reg__phone" id="employer-reg__phone" class="form__login-input">
                 <span class="form-message"></span>
             </div>

             <h4 class="form__tittle-reg">Thông tin công ty</h4>
             <div class="form-group">
                 <label for="employer-reg__company" class="form__title-input">Tên công ty</label>
                 <input type="text" placeholder="Tên công ty theo giấy phép đăng ký kinh doanh" name="employer-reg__company" id="employer-reg__company" class="form__login-input">
                 <span class="form-message"></span>
             </div>
             <div class="form-group">
                 <label for="employer-reg__tax-code" class="form__title-input">Mã số thuế</label>
                 <input type="text" placeholder="Nhập mã số thuế..." onkeypress='return event.charCode >= 48 && event.charCode <= 57' name="employer-reg__tax-code" id="employer-reg__tax-code" class="form__login-input">
                 <span class="form-message"></span>
             </div>
             <div class="form-group">
                 <label for="employer-reg__location" class="form__title-input">Địa điểm</label>
                 <div class="dropdown dropdown__location">
                     <div class="dropdown__select">
                     <span class="dropdown__selected">Chọn</span>
                     <svg width="15" height="6" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951" stroke="#2F383A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                     </div>
                     <ul class="dropdown__list">
                         <li class="dropdown__item">
                             <span class="dropdown__text">Khánh Hòa</span>
                         </li>
                         <li class="dropdown__item">
                             <span class="dropdown__text">Hồ Chí Minh</span>
                         </li>
                         <li class="dropdown__item">
                             <span class="dropdown__text">Đà Nẵng</span>
                         </li>
                         <li class="dropdown__item">
                             <span class="dropdown__text">Hà Nội</span>
                         </li>
                     </ul>
                 </div>
             </div>
             <div class="form-group">
                 <label for="employer-reg__address" class="form__title-input">Địa chỉ công ty</label>
                 <input type="text" placeholder="Nhập địa chỉ công ty..." name="employer-reg__address" id="employer-reg__address" class="form__login-input">
                 <span class="form-message"></span>
             </div>
             <div class="form-group">
                 <label for="employer-reg__field" class="form__title-input">Lĩnh vực hoạt động</label>
                 <div class="dropdown dropdown__field">
                     <div class="dropdown__select">
                     <span class="dropdown__selected">Chọn</span>
                     <svg width="15" height="6" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951" stroke="#2F383A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                     </div>
                     <ul class="dropdown__list">
                        <li class="dropdown__item">
                            <span class="dropdown__text">IT Phần Cứng / Mạng</span>
                        </li>
                        <li class="dropdown__item">
                            <span class="dropdown__text">IT Phần Mềm</span>
                        </li>
                        <li class="dropdown__item">
                            <span class="dropdown__text">Kinh Doanh / Bán Hàng</span>
                        </li>
                        <li class="dropdown__item">
                        <span class="dropdown__text">Kinh Doanh / Bán Hàng</span>
                        </li>
                        <li class="dropdown__item">
                            <span class="dropdown__text">Điện / Điện Tử / Điện Lạnh</span>
                        </li>
                     </ul>
                 </div>
             </div>
             <button class="btn form__button">Đăng Ký</button>
             <div class="form__option--reg">
                 <span>Bạn đã có tài khoản ?</span>
                 <span id="login-employer-btn" class="form__option-item">Đăng nhập</span>
             </div>
         </div>
     </form>
 </div>
` 
main.insertAdjacentHTML('beforeend', templateEmployerReg)

//Function Handle Form
const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(item => {
    const dropdownSelect = item.querySelector('.dropdown__select')
    const dropdownItems = item.querySelectorAll('.dropdown__item')
    const dropdownSelecteds = item.querySelector('.dropdown__selected')
    const dropdownList = item.querySelector('.dropdown__list')
    dropdownSelect.addEventListener('click', showDropdownList)
    dropdownItems.forEach(it => it.addEventListener('click', (e) => {
        const text = e.target.textContent
        dropdownSelecteds.textContent = text
        showDropdownList()
        
    }))
    // Function
    function showDropdownList(e) {
        dropdownList.style.height = `${dropdownList.scrollHeight}px`
        dropdownList.classList.toggle('active')
        if(!dropdownList.classList.contains('active')) {
            dropdownList.style.height = `0px`
        }
    }
})



const btnRegEmployer = document.querySelector('#reg-employer-btn')
const formEmployerReg = document.querySelector('.form-employer__reg')
const btnLoginEmployer = document.querySelector('#login-employer-btn')

//Function Handle Show Form
function openFormEmployerReg() {
    formEmployerReg.classList.add('active')
    closeEmployerLogin()
}

function closeFormEmployerReg() {
    openEmployerLogin()
    formEmployerReg.classList.remove('active')

}

// Event click
btnRegEmployer.addEventListener('click', openFormEmployerReg)
btnLoginEmployer.addEventListener('click', closeFormEmployerReg)
formEmployerReg.addEventListener('click', ()=> {
    formEmployerReg.classList.remove('active');
})
/* ----------------------------------------------------------------*/ 

const formLoginContent = document.querySelectorAll('.form_login-content')
formLoginContent.forEach(item => item.addEventListener('click',handlePreventBubbling))
const btnFormClose = document.querySelectorAll('.form__close')
btnFormClose.forEach(item => item.addEventListener('click', handleCloseModalreg))
btnFormClose.forEach(item => item.addEventListener('click', handleCloseModalLogin))
btnFormClose.forEach(item => item.addEventListener('click',  ()=> {
    if(formEmployerReg) {
        formEmployerReg.classList.remove('active');
    }
    if(formEmployerLogin) {
        closeEmployerLogin()
    }
}))




/* -------------------------- HANDLE VALIDATION ----------------------------------*/ 

// Login User
Validator({
    form: '#user-login',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#user-login__email', 'Vui lòng nhập email của bạn'),
        Validator.isEmail('#user-login__email'),
        Validator.isRequired('#user-login__password', 'Vui lòng nhập mật khẩu của bạn')
        
    ],
    onSubmit: function(data) {
        // Call Api
        console.log(data)
    }
});

// Reg User
Validator({
    form: '#user-reg',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#user-reg__fullname', 'Vui lòng nhập tên đầy đủ của bạn'),
        Validator.minLength('#user-reg__fullname', 6),
        Validator.isRequired('#user-reg__email', 'Vui lòng nhập email của bạn'),
        Validator.isEmail('#user-reg__email'),
        Validator.isRequired('#user-reg__phone', 'Vui lòng nhập số điện thoại của bạn'),
        Validator.minLength('#user-reg__phone', 10),
        Validator.isRequired('#user-reg__password', 'Vui lòng nhập mật khẩu của bạn'),
        Validator.minLength('#user-reg__password', 5),
        Validator.isRequired('#user-reg__confirm-password','Vui lòng nhập mật khẩu của bạn'),
        Validator.isComfirmed('#user-reg__confirm-password', function() {
            return document.querySelector('#user-reg #user-reg__password').value
        }, 'Mật khẩu nhập lại không chính xác')
    ],
    onSubmit: function(data) {
        // Call Api
        console.log(data)
    }
});

// Login Employer
Validator({
    form: '#employer-login',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#employer-login__email', 'Vui lòng nhập email của bạn'),
        Validator.isEmail('#employer-login__email'),
        Validator.isRequired('#employer-login__password', 'Vui lòng nhập mật khẩu của bạn')
        
    ],
    onSubmit: function(data) {
        // Call Api
        console.log(data)
    }
});


// Reg Employer
Validator({
    form: '#employer-reg',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#employer-reg__fullname', 'Vui lòng nhập tên đầy đủ của bạn'),
        Validator.minLength('#employer-reg__fullname', 6),
        Validator.isRequired('#employer-reg__email', 'Vui lòng nhập email của bạn'),
        Validator.isEmail('#employer-reg__email'),
        Validator.isRequired('#employer-reg__phone', 'Vui lòng nhập số điện thoại của bạn'),
        Validator.minLength('#employer-reg__phone', 10),
        Validator.isRequired('#employer-reg__password', 'Vui lòng nhập mật khẩu của bạn'),
        Validator.minLength('#employer-reg__password', 5),
        Validator.isRequired('#employer-reg__confirm-password','Vui lòng nhập mật khẩu của bạn'),
        Validator.isComfirmed('#employer-reg__confirm-password', function() {
            return document.querySelector('#employer-reg #employer-reg__password').value
        }, 'Mật khẩu nhập lại không chính xác'),
        Validator.isRequired('#employer-reg__company','Vui lòng nhập tên công ty'),
        Validator.isRequired('#employer-reg__tax-code','Vui lòng nhập mã số thuế'),
        Validator.isRequired('#employer-reg__address','Vui lòng nhập địa điểm công ty'),
    ],
    onSubmit: function(data) {
        // Call Api
        console.log(data)
    }
});
