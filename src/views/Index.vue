<template>
  <div id="index">
    <div
      class="head"
      v-if="data.supports!=undefined"
      :style="{backgroundImage:'url('+data.avatar+')'}"
    >
      <Row :gutter="16">
        <i-col span="9" class="head-left">
          <div class="head-img">
            <img :src="data.avatar" alt />
          </div>
        </i-col>
        <i-col span="15" class="head-right">
          <div class="p-img">
            <p>
              <img src="../assets/imgs/brand@2x.png" alt class="p-img1" />
              <span class="font1">{{data.name}}</span>
            </p>
            <p>
              <span class="font2">{{data.description}}/{{data.deliveryTime}}分钟送达</span>
            </p>
            <p>
              <img src="../assets/imgs/decrease_1@2x.png" alt class="p-img2" />
              <span class="font3">{{data.supports.length&&data.supports[0].description}}</span>
            </p>
          </div>
        </i-col>
      </Row>
      <p class="foot">
        <img src="../assets/imgs/bulletin@2x.png" alt />
        {{data.bulletin}}
      </p>
    </div>

    <div class="nav">
      <router-link to="./goods" active-class="u-link--Active">商品</router-link>

      <router-link to="./evaluate" active-class="u-link--Active">评价</router-link>

      <router-link to="./business" active-class="u-link--Active">商家</router-link>
    </div>

    <router-view class="pages" />

    <transition name="slide-fade">
      <div v-show="shopcarShow" class="shopcar-board">
        <div class="goodsHead">购物车</div>
        <ul class="content">
          <div class="scroll">
            <div v-for="(v,i) in arr" :key="i" class="goodsList">
              <span>{{v.name}}</span>
              <span>数量:{{v.allnum}}</span>
              <span>价格:{{v.price*v.allnum}}</span>
            </div>
          </div>
        </ul>
      </div>
    </transition>

    <div class="shopcar" @click="shopcarShow = !shopcarShow">
      <div class="img">
        <img src="../assets/imgs/shopcar.png" alt />
      </div>
      <ul>
        <li class="li1">
          <span>￥{{allMoney}}</span>
        </li>
        <li class="li2">
          <span>另需配送费￥4元</span>
        </li>
        <li class="li3" :class="allMoney<20?'active1':'active2'">
          <span v-show="allMoney<20">￥20起送</span>
          <span v-show="allMoney>=20" class="mathMoney">去结算</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getIndex } from "../api/apis";
import { getGoods } from "../api/apis";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      shopcarShow: false,
      data: {}
    };
  },
  created() {
    getIndex().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
    getGoods().then(res => {
      console.log(res.data.data);
      console.log(this.$store.state.data);
      this.$store.commit("initData", res.data.data);
    });
    console.log(this.$store.getters.getNum);
  },
  mounted() {
    new BScroll(document.querySelector(".scroll"));
  },
  methods: {
    active() {
      console.log(111);
    }
  },
  computed: {
    list() {
      return this.$store.state.data;
    },
    arr() {
      return this.$store.getters.getNum;
    },
    allMoney() {
      return this.$store.getters.money;
    }
  }
};
</script>

<style lang='less' scoped>
#index {
  .head {
    height: 170px;
    padding: 20px 30px 0;
    background-color: #000;

    .head-left {
      margin-bottom: 20px;
      .head-img {
        img {
          vertical-align: middle;
          width: 100px;
        }
      }
    }
    .head-right {
      .p-img {
        height: 100px;
        p {
          height: 33px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 33px;
          span {
            color: #fff;
          }
          .font1 {
            font-size: 18px;
            font-weight: bold;
          }
          .p-img1 {
            width: 40px;
            vertical-align: middle;
          }
          .p-img2 {
            width: 16px;
            vertical-align: middle;
          }
        }
      }
    }
    .foot {
      width: 100%;
      height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 30px;
      color: #fff;
      img {
        vertical-align: middle;
        width: 36px;
      }
    }
  }

  .nav {
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    color: #4d5256;
    background: #fff;
    border-bottom: 2px solid #f2f2f25e;
    .u-link--Active {
      color: red;
    }
  }
  .pages {
    height: 100%;
    margin-bottom: 60px;
  }
  .shopcar-board {
    position: fixed;
    height: 200px;
    width: 100%;
    bottom: 60px;
    background: #fff;
    .goodsHead {
      height: 36px;
      background: orange;
      font-weight: bold;
      font-size: 20px;
      padding: 0 0 0 10px;
      color: #000;
      line-height: 36px;
    }
    .scroll{
      overflow: scroll;
      height: 164px;
      .goodsList {
      display: flex;
      justify-content: space-around;
      height: 40px;
      line-height: 40px;
      vertical-align: middle;
      padding: 5px;
      font-weight: bold;
      border-bottom: 1px solid orange;
    }
    }
    // overflow: scroll
  }
  .shopcar {
    display: flex;
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0;
    padding: 0;
    background: #141c27;
    padding-left: 60px;
    z-index: 999;
    .img {
      position: absolute;
      top: -10px;
      left: 10px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 60px;
      background: #141c27;
      text-align: center;
      img {
        width: 50px;
        vertical-align: middle;
        line-height: 60px;
      }
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      li {
        float: right;
        font-size: 16px;
        font-weight: bold;
        line-height: 60px;
        list-style: none;
        color: #98999d;
      }
      .active1{
        background: #2b343b;
      }
      .active2{
        background: orange;
        color: #fff;
      }
      .li3 {
        width: 100px;
        text-align: center;
      }
      .li1 {
        border-right: 1px solid #98999d;
        padding: 0 20px;
        height: 30px;
        line-height: 30px;
        margin: 15px 0;
      }
    }
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}
</style>