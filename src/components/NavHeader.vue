<template>
    <header class="header">
        <symbol id="icon-cart" viewBox="0 0 38 32">
            <title>cart</title>
            <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
            <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
            <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
            <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
        </symbol>
        <div class="navbar">
            <div class="navbar-left-container">
                <a href="/">
                    <img class="navbar-brand-logo" src="/static/logo.png"></a>
            </div>
            <div class="navbar-right-container" style="display: flex;">
                <div class="navbar-menu-container">
                    <span v-if="cacheName" class="navbar-link">Welcome {{cacheName}}</span>
                    <a v-if="!cacheName" @click="mdInit('loginFlag')" href="javascript:void(0)" class="navbar-link">Log in</a>
                    <a v-if="!cacheName" @click="mdInit('registerFlag')" href="javascript:void(0)" class="navbar-link">Register</a>
                    <a v-if="cacheName" @click="logout()" href="javascript:void(0)" class="navbar-link">Log out</a>
                    <div v-if="cacheName" class="navbar-cart-container">
                        <span class="navbar-cart-count">{{cartCount}}</span>
                        <a class="navbar-link navbar-cart-link" href="#/cart">
                            <svg class="navbar-cart-logo">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div v-bind:class="{'md-show': loginFlag}" class="md-modal-fix-input md-modal modal-msg md-modal-transition">
            <div class="md-modal-inner">
                <div class="md-top">
                    <div class="md-title">Log in</div>
                    <button @click="loginFlag = false" class="md-close">Close</button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <div class="error-wrap">
                            <span v-if="tipFlag" class="error error-show">{{tip}}</span>
                        </div>
                        <ul>
                            <li class="regi_form_input marginTop">
                                <i class="icon IconPeople"></i>
                                <input v-model="userName" type="text" tabindex="1" name="loginname" class="regi_login_input regi_login_input_left" placeholder="User Name" data-type="loginname">
                            </li>
                            <li class="regi_form_input noMargin">
                                <i class="icon IconPwd"></i>
                                <input @keyup.enter="login()" v-model="userPwd" type="password" tabindex="2" name="password" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Password">
                            </li>
                        </ul>
                    </div>
                    <div class="login-wrap">
                        <a @click="login()" href="javascript:void(0)" class="btn-login">Log in</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-bind:class="{'md-show': registerFlag}" class="md-modal-fix-input md-modal modal-msg md-modal-transition">
            <div class="md-modal-inner">
                <div class="md-top">
                    <div class="md-title">Register</div>
                    <button @click="registerFlag = false" class="md-close">Close</button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <div class="error-wrap">
                            <span v-show="tipFlag" class="error error-show">{{tip}}</span>
                        </div>
                        <ul>
                            <li class="regi_form_input">
                                <i class="icon IconPeople"></i>
                                <input @blur="checkUserName()" v-model="userName" type="text" tabindex="1" name="loginname" class="regi_login_input regi_login_input_left" placeholder="User Name" data-type="loginname">
                            </li>
                            <li class="regi_form_input noMargin">
                                <i class="icon IconPwd"></i>
                                <input @keyup.enter="register()" v-model="userPwd" type="password" tabindex="2" name="password" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Password">
                            </li>
                        </ul>
                    </div>
                    <div class="login-wrap">
                        <a @click="register()" href="javascript:void(0)" class="btn-login">Register</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="loginFlag || registerFlag" @click="loginFlag = false; registerFlag = false" class="md-overlay"></div>
        <modal v-bind:mdFlag="mdFlag" v-on:close="mdFlag = false">
          <p slot="msg">
            恭喜注册成功！
          </p>
          <div class="btn--center"  slot="btnGroup">
            <a @click="mdFlag = false" href="javascript:void(0)" class="btn btn--m">关闭</a>
          </div>
        </modal>
    </header>
</template>

<script>
import "./../../static/css/login.css";
import axios from "axios";
import Modal from "./../components/Modal.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      tip: "",
      tipFlag: false,
      loginFlag: false,
      registerFlag: false,
      mdFlag: false
    };
  },
  computed: {
    // cacheName() {
    //   return this.$store.state.cacheName;
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    // }
    ...mapState(["cacheName", "cartCount"])
  },
  components: {
    Modal
  },
  mounted: function() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      axios.get("/users/checkLogin").then(res => {
        let data = res.data;
        if (data.status === "0") {
          // this.cacheName = data.result.userName;
          this.$store.commit("updateCacheName", data.result.userName);
          this.getCartCount();
        } else if (data.status === "1") {
          if (this.$route.path !== "/") {
            this.$router.push("/");
          }
        }
      });
    },
    mdInit(flag) {
      this.tipFlag = false;
      this.userName = "";
      this.userPwd = "";
      if (flag === "loginFlag") {
        this.loginFlag = true;
      } else {
        this.registerFlag = true;
      }
    },
    login() {
      if (!this.userName || !this.userPwd) {
        this.tipFlag = true;
        this.tip = "用户名 / 密码不可为空";
        return;
      }
      axios
        .post("/users/login", {
          userName: this.userName.trim(),
          userPwd: this.userPwd.trim()
        })
        .then(res => {
          let data = res.data;
          if (data.status === "1") {
            this.tipFlag = true;
            this.tip = "用户名 / 密码错误";
          } else if (data.status === "0") {
            this.loginFlag = false;
            // this.cacheName = data.result.userName;
            this.$store.commit("updateCacheName", data.result.userName);
            this.getCartCount();
          }
        });
    },
    checkUserName() {
      if (!this.userName) {
        this.tipFlag = true;
        this.tip = "用户名不可为空";
        return;
      }
      axios
        .get("/users/checkUserName", {
          params: { userName: this.userName.trim() }
        })
        .then(res => {
          let data = res.data;
          if (data.status === "1" || data.status === "0") {
            this.tipFlag = true;
            this.tip = data.msg;
          }
        });
    },
    register() {
      if (!this.userName || !this.userPwd) {
        this.tipFlag = true;
        this.tip = "用户名 / 密码不可为空";
        return;
      }
      axios
        .post("/users/register", {
          userName: this.userName.trim(),
          userPwd: this.userPwd.trim()
        })
        .then(res => {
          let data = res.data;
          if (data.status === "0") {
            this.mdFlag = true;
            this.registerFlag = false;
          }
        });
    },
    logout() {
      axios.post("/users/logout").then(res => {
        let data = res.data;
        if (data.status === "0") {
          // this.cacheName = "";
          this.$store.commit("updateCacheName", "");
          this.$store.commit("updateCartCount", "");
          this.$router.push("/");
        }
      });
    },
    getCartCount() {
      axios.get("/users/getCartCount").then(res => {
        let data = res.data;
        if (data.status === "0") {
          this.$store.commit("updateCartCount", data.result.getCartCount);
        }
      });
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  background-color: white;
  font-family: "moderat", sans-serif;
  font-size: 16px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 70px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5px 20px 10px 20px;
}

.navbar-left-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -20px;
}

.navbar-brand-logo {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px; 
}

.header a,
.footer a {
  color: #666;
  text-decoration: none;
}

a {
  -webkit-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

.navbar-right-container {
  display: none;
  justify-content: flex-start;
  align-items: center;
}

.navbar-menu-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}

.navbar-link {
  padding-left: 15px;
}

.navbar-cart-container {
  position: relative;
}

.navbar-cart-count {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -9px;
  right: -11px;
  width: 20px;
  border-radius: 10px;
  color: white;
  background-color: #eb767d;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.navbar-cart-logo {
  width: 25px;
  height: 25px;
  transform: scaleX(-1);
}
</style>