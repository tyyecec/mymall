<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a @click="sortGoods()" href="javascript:void(0)" class="price">Price
            <span v-show="arrowFlag">↑</span>
            <span v-show="!arrowFlag">↓</span>
          </a>
          <a @click="showFilterPop()" href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <div v-bind:class="{'filterby-show':isFilterby}" class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a @click="setPriceFilter('all')" v-bind:class="{'cur':priceLevel==='all'}" href="javascript:void(0)">All</a>
              </dd>
              <dd v-for="item in priceFilter" :key="item.priceId">
                <a @click="setPriceFilter(item.priceId)" v-bind:class="{'cur':priceLevel===item.priceId}" href="javascript:void(0)">{{item.priceStart}} - {{item.priceEnd}}</a>
              </dd>
            </dl>
          </div>
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodsList" :key="item.productId">
                  <div class="pic">
                    <a href="#"><img v-lazy="'static/'+item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a @click="addCart(item.productId)" href="javascript:void(0)" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="loading" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="25">
                <img v-show="loading" src=".././../static/loading-spinning-bubbles.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="overLayFlag" @click.stop="closeFilterPop()" class="md-overlay"></div>
    <modal v-bind:mdFlag="mdFlag" v-on:close="closeModal()">
      <p slot="msg">
        购物车添加失败，请登录！
      </p>
      <div class="btn--center" slot="btnGroup">
        <a @click="mdFlag = false" href="javascript:void(0)" class="btn btn--m">关闭</a>
      </div>
    </modal>
    <modal v-bind:mdFlag="mdCartFlag" v-on:close="closeModal()">
      <p slot="msg">
        <span>购物车添加成功 ^^</span>
      </p>
      <div class="btn--center" slot="btnGroup">
        <a @click="mdCartFlag = false" href="javascript:void(0)" class="btn btn--m">继续购物</a>
        <router-link @click="mdCartFlag = false" to="/cart" class="btn btn--m">查看购物车</router-link>
      </div>
    </modal>
    <nav-footer></nav-footer>
  </div>
</template>

<style>
.loading {
  text-align: center;
}
</style>

<script>
import "./../../static/css/base.css";
import "./../../static/css/product.css";
import NavHeader from "./../components/NavHeader.vue";
import NavFooter from "./../components/NavFooter.vue";
import NavBread from "./../components/NavBread.vue";
import Modal from "./../components/Modal.vue";
import axios from "axios";

export default {
  data() {
    return {
      goodsList: [],
      sortFlag: true,
      page: 1,
      pageSize: 8,
      // 初始开启瀑布流加载
      busy: false,
      loading: false,
      priceFilter: [
        {
          priceId: 0,
          priceStart: 0,
          priceEnd: 1000
        },
        {
          priceId: 1,
          priceStart: 1000,
          priceEnd: 2000
        },
        {
          priceId: 2,
          priceStart: 2000,
          priceEnd: 3000
        },
        {
          priceId: 3,
          priceStart: 3000,
          priceEnd: 10000
        }
      ],
      priceLevel: "all",
      isFilterby: false,
      overLayFlag: false,
      arrowFlag: true,
      mdFlag: false,
      mdCartFlag: false
    };
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  // 初始化，获取服务端商品数据
  mounted: function() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList(flag) {
      let param = {
        page: this.page,
        pageSize: this.pageSize,
        // true -> 1 -> 升序，false -> -1 -> 降序
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceLevel
      };
      this.loading = true;
      axios
        .get("/goods/get", {
          params: param
        })
        .then(res => {
          this.loading = false;
          let data = res.data;
          if (data.status === "0") {
            // 判断是否需要数据拼接
            if (flag) {
              this.goodsList = this.goodsList.concat(data.result.list);
            } else {
              this.goodsList = data.result.list;
            }
            // 判断是否需要开启瀑布流加载，避免不必要的请求
            if (data.result.count === this.pageSize) {
              this.busy = false;
            }
          } else {
            this.goodsList = [];
          }
        });
    },
    sortGoods() {
      this.arrowFlag = !this.arrowFlag;
      this.sortFlag = !this.sortFlag;
      this.page = 1;
      this.getGoodsList();
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getGoodsList(true);
      }, 500);
    },
    showFilterPop() {
      this.isFilterby = true;
      this.overLayFlag = true;
    },
    closeFilterPop() {
      this.isFilterby = false;
      this.overLayFlag = false;
    },
    setPriceFilter(priceId) {
      this.priceLevel = priceId;
      this.page = 1;
      this.getGoodsList();
      this.closeFilterPop();
    },
    addCart(productId) {
      axios
        .post("/users/addCart", {
          productId: productId
        })
        .then(res => {
          let data = res.data;
          if (data.status === "0") {
            this.mdCartFlag = true;
            axios.get("/users/getCartCount").then(res => {
              let data = res.data;
              if (data.status === "0") {
                this.$store.commit("updateCartCount", data.result.getCartCount);
              }
            });
          } else {
            this.mdFlag = true;
          }
        });
    },
    closeModal() {
      this.mdFlag = false;
      this.mdCartFlag = false;
    }
  }
};
</script>