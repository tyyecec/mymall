<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="content">Address</span>
    </nav-bread>
    <div class="checkout-page">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-add" viewBox="0 0 31 32">
            <title>add</title>
            <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
          </symbol>
          <symbol id="icon-edit" viewBox="0 0 32 32">
            <title>edit</title>
            <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
          </symbol>
          <symbol id="icon-del" viewBox="0 0 32 32">
            <title>delete</title>
            <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
            <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <title>clock</title>
            <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
          </symbol>
          <symbol id="icon-question" viewBox="0 0 32 32">
            <title>question</title>
            <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
            <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
            <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
          </symbol>
        </defs>
      </svg>
      <div class="container">
        <div class="checkout-addr">
          <div class="page-title-normal">
            <h2 class="page-title-h2"><span>check out</span></h2>
          </div>
          <div class="check-step">
            <ul>
              <li class="cur"><span>Confirm</span> address</li>
              <li><span>View your</span> order</li>
              <li><span>Make</span> payment</li>
              <li><span>Order</span> confirmation</li>
            </ul>
          </div>
          <div class="page-title-normal checkout-title">
            <h2><span>Shipping address</span></h2>
          </div>
          <div class="addr-list-wrap">
            <div class="addr-list">
              <ul>
                <li v-bind:class="{'check': checkIndex === index}" @click="checkAddress(index,item.addressId)" v-for="(item, index) in addressListFilter" :key="item.addressId">
                  <dl>
                    <dt>{{item.userName}}</dt>
                    <dd class="address">{{item.streetName}}</dd>
                    <dd class="tel">{{item.tel}}</dd>
                  </dl>
                  <div @click="addressDelConfirm(item.addressId)" class="addr-opration addr-del">
                    <a href="javascript:void(0)" class="addr-del-btn">
                      <svg class="icon icon-del">
                        <use xlink:href="#icon-del"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="addr-opration addr-set-default">
                    <a @click="setDefaultAddress(item.addressId)" v-if="item.isDefault === '1'" href="javascript:void(0)" class="addr-set-default-btn"><i>Set default</i></a>
                  </div>
                  <div v-if="item.isDefault === '0'" class="addr-opration addr-default">Default address</div>
                </li>
                <li class="addr-new">
                  <div @click="mdInit()" class="add-new-inner">
                    <i class="icon-add">
                    <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                  </i>
                    <p>Add new address</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="shipping-addr-more">
              <a v-bind:class="{'open':limit>3}" @click="moreAddress()" class="addr-more-btn up-down-btn" href="javascript:void(0)">
              more
              <i class="i-up-down">
                <i class="i-up-down-l"></i>
                <i class="i-up-down-r"></i>
              </i>
            </a>
            </div>
          </div>
          <div class="page-title-normal checkout-title">
            <h2><span>Shipping method</span></h2>
          </div>
          <div class="lemall-msg-info hidden">
            <span>The region you selected is not within our delivery area. Please select another shipping address within our delivery areas.</span>
          </div>
          <div class="shipping-method-wrap">
            <div class="shipping-method">
              <ul>
                <li class="check">
                  <div class="name">Standard shipping</div>
                  <div class="price">￥ 10</div>
                  <div class="shipping-tips">
                    <p>Once shipped，Order should arrive in the destination in 2-5 business days</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="order-foot-wrap">
            <div class="prev-btn-wrap">
              <router-link to="/cart" class="btn btn--m">Previous</router-link>
            </div>
            <div class="next-btn-wrap">
              <a @click="nextNext()" v-bind:class="{'btn--dis':addressId === ''}" class="btn btn--m btn--red">Next</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal v-bind:mdFlag="mdFlag" v-on:close="closeModal()">
      <p slot="msg">确定删除此地址吗？</p>
      <div class="btn--center"  slot="btnGroup">
        <a @click="addressDel()" href="javascript:void(0)" class="btn btn--m">确定</a>
        <a @click="mdFlag = false" href="javascript:void(0)" class="btn btn--m">取消</a>
      </div>
    </modal>
    <modal v-bind:mdFlag="delMdFlag" v-on:close="closeModal()">
      <p slot="msg">
        删除地址失败，请至少保留一个地址！
      </p>
      <div class="btn--center" slot="btnGroup">
        <a @click="delMdFlag = false" href="javascript:void(0)" class="btn btn--m">关闭</a>
      </div>
    </modal>
    <div v-bind:class="{'md-show': addAddressFlag}" class="md-modal-fix-input md-modal modal-msg md-modal-transition">
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">Add</div>
          <button @click="addAddressFlag = false" class="md-close">Close</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <div class="error-wrap">
              <span v-show="tipFlag" class="error error-show">姓名/地址/电话不可为空</span>
            </div>
            <ul>
              <li class="regi_form_input">
                <input v-model="userName" type="text" tabindex="1" name="loginname" class="regi_login_input regi_login_input_left" placeholder="User Name" data-type="loginname">
              </li>
              <li class="regi_form_input">
                <input v-model="streetName" type="text" tabindex="2" name="streetname" class="regi_login_input regi_login_input_left" placeholder="Street Name">
              </li>
              <li class="regi_form_input noMargin">
                <input @keyup.enter="addressAdd()" v-model="tel" type="text" tabindex="3" name="tel" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Tel">
              </li>
            </ul>
          </div>
          <div class="login-wrap">
            <a @click="addressAdd()" href="javascript:void(0)" class="btn-login">Add new address</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="addAddressFlag" @click="addAddressFlag = false" class="md-overlay"></div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "./../components/NavHeader.vue";
import NavFooter from "./../components/NavFooter.vue";
import NavBread from "./../components/NavBread.vue";
import Modal from "./../components/Modal.vue";
import axios from "axios";

export default {
  data() {
    return {
      addressList: [],
      limit: 3,
      checkIndex: 0,
      mdFlag: false,
      delMdFlag: false,
      delAddressId: "",
      addAddressFlag: false,
      tipFlag: false,
      userName: "",
      streetName: "",
      tel: "",
      addressId: ""
    };
  },
  computed: {
    addressListFilter() {
      return this.addressList.slice(0, this.limit);
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  mounted: function() {
    this.getAddressList();
  },
  methods: {
    getAddressList() {
      this.addressId = "";
      axios.get("/users/addressList").then(res => {
        let data = res.data;
        if (data.status === "0" && data.result.addressList.length > 0) {
          this.checkIndex = 0;
          this.addressId = data.result.addressList[0].addressId;
          this.addressList = data.result.addressList;
        }
      });
    },
    moreAddress() {
      if (this.limit === 3) {
        this.limit = this.addressList.length;
      } else {
        this.limit = 3;
      }
    },
    setDefaultAddress(addressId) {
      axios.post("/users/setDefaultAddress", { addressId }).then(res => {
        let data = res.data;
        if (data.status === "0") {
          this.getAddressList();
        }
      });
    },
    closeModal() {
      this.mdFlag = false;
      this.delMdFlag = false;
    },
    addressDelConfirm(addressId) {
      this.mdFlag = true;
      this.delAddressId = addressId;
    },
    addressDel() {
      if(this.addressList.length === 1){
        this.mdFlag = false;
        this.delMdFlag = true;
        return;
      }
      axios
        .post("/users/addressDel", { delAddressId: this.delAddressId })
        .then(res => {
          let data = res.data;
          if (data.status === "0") {
            this.mdFlag = false;
            this.getAddressList();
          }
        });
    },
    mdInit() {
      this.tipFlag = false;
      this.userName = "";
      this.streetName = "";
      this.tel = "";
      this.addAddressFlag = true;
    },
    addressAdd() {
      if (!this.userName || !this.streetName || !this.tel) {
        this.tipFlag = true;
        return;
      }
      axios
        .post("/users/addressAdd", {
          userName: this.userName.trim(),
          streetName: this.streetName.trim(),
          tel: this.tel.trim()
        })
        .then(res => {
          let data = res.data;
          if (data.status === "0") {
            this.addAddressFlag = false;
            this.getAddressList();
            if (this.limit !== 3) {
              this.limit = this.addressList.length + 1;
            }
          }
        });
    },
    checkAddress(index, addressId) {
      this.checkIndex = index;
      this.addressId = addressId;
    },
    nextNext() {
      if (this.addressId !== "") {
        this.$router.push({
          name: "OrderConfirm",
          params: { addressId: this.addressId }
        });
      }
    }
  }
};
</script>