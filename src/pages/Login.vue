<template>
  <div class="container">
        <h1>宿舍管理系统</h1>
        <div class="form">
            <input type="text" placeholder="您的账号">
            <input type="password" placeholder="您的密码">
            <button class="btn-login">登录</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Login',
}
</script>

<style scoped>
body{
    height: 100vh;
    /* 弹性布局 居中显示 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    /* background: linear-gradient(to top left,#ffe29f,#ffa99f,#ff719a); */
    /* 溢出隐藏 */
    overflow: hidden;
}
.container{
    padding-top: 20%;
    text-align: center;
    color: #fff;
}
.container h1{
    font-size: 40px;
    font-weight: 100;
    letter-spacing: 2px;
    margin-bottom: 15px;
    /* 过渡效果 */
    transition: 1s ease-in-out;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    opacity: 1;
    /* 不透明度改变时的过渡效果 */
    transition: opacity 0.5s;
}
.form input{
    outline: none;
    border: 1px solid rgba(255,255,255,0.4);
    background-color: rgba(255,255,255,0.2);
    width: 250px;
    padding: 10px 15px;
    border-radius: 3px;
    margin: 0 auto 10px auto;
    text-align: center;
    color: #fff;
    font-size: 15px;
    transition: 0.25s;
}
.form input::placeholder{
    color: #fff;
    font-size: 14px;
    font-weight: 300;
}
.form input:hover{
    background-color: rgba(255,255,255,0.4);
}
.form input:focus{
    background-color: #fff;
    width: 300px;
    color: #09203f;
}
.btn-login{
    outline: none;
    background-color: #fff;
    color: #09203f;
    border: none;
    width: 250px;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.25s;
}
.btn-login:hover{
    background-color: #f5f7f9;
}

.container.success h1{
    transform: translateY(75px);
}
.container.success .form{
    opacity: 0;
    visibility: hidden;
}

</style>