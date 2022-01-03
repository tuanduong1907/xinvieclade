
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
document.querySelector('#main').insertAdjacentHTML('beforeend', templateFormUserLogin)
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
            <button onClick="showSuccessToast()" class="btn form__button">Đăng Ký</button>
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
document.querySelector('#main').insertAdjacentHTML('beforeend', templateFormUserReg)
const formUserReg = document.querySelector('.form-user__reg')
const formLoginContent = document.querySelectorAll('.form_login-content')
const btnFormClose = document.querySelectorAll('.form__close')
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

function handlePreventBubbling(e) {
    e.stopPropagation()
}

// Event Click
btnRegForm.addEventListener('click', handleOpenModalReg)
formUserReg.addEventListener('click', handleCloseModalreg)
btnFormClose.forEach(item => item.addEventListener('click', handleCloseModalreg))
btnFormClose.forEach(item => item.addEventListener('click', handleCloseModalLogin))
formLoginContent.forEach(item => item.addEventListener('click',handlePreventBubbling))
btnLoginUser.addEventListener('click', (e) => {
    handleOpenModalLogin()
    handleCloseModalreg()
})
