<template>
  <div id="business">
    <div class="head">
      <div class="top">
        <div class="top-left">
          <p>{{data.name}}</p>
          <p>
            <img src="../assets/imgs/star24_on@2x.png" alt />
            <img src="../assets/imgs/star24_on@2x.png" alt />
            <img src="../assets/imgs/star24_on@2x.png" alt />
            <img src="../assets/imgs/star24_on@2x.png" alt />
            <img src="../assets/imgs/star24_off@2x.png" alt />
            <span>月售{{data.sellCount}}单</span>
          </p>
        </div>
        <div class="top-right">
          <span @click="addColor" class="addcolor">❤</span>
        </div>
      </div>
      <div class="bottom">
        <div>
          <span>起送价</span>
          <p>
            <span class="font">{{data.minPrice}}</span>
            <span>元</span>
          </p>
        </div>
        <div>
          <span>商家配送</span>
          <p>
            <span class="font">{{data.deliveryPrice}}</span>
            <span>元</span>
          </p>
        </div>
        <div>
          <span>平均配送时间</span>
          <p>
            <span class="font">{{data.deliveryTime}}</span>
            <span>分钟</span>
          </p>
        </div>
      </div>
    </div>
    <div class="main">
      <h2>公告与活动</h2>
      <p>{{data.bulletin }}</p>
      <div v-for="(v,i) in data.supports" :key="i">
        <img style="width: 14px" v-show="v.type == 0" src="../assets/imgs/decrease_3@2x.png" />
        <img style="width: 14px" v-show="v.type == 1" src="../assets/imgs/discount_3@2x.png" />
        <img style="width: 14px" v-show="v.type == 2" src="../assets/imgs/special_3@2x.png" />
        {{v.description}}
      </div>
    </div>
    <div class="shopImg">
      <h2>店铺实景</h2>
      <div class="imgs">
        <img :src="v" alt v-for="(v,i) in data.pics" :key="i" />
      </div>
    </div>
    <div class="foot">
      <h2>商家信息</h2>
      <div v-for="(v,i) in data.infos" :key="i">{{v}}</div>
    </div>
  </div>
</template>

<script>
import { getIndex } from "../api/apis";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getIndex().then(res => {
      // console.log(res.data.data);
      this.data = res.data.data;
    });
  },
  methods: {
    addColor() {
      console.log(111);
    }
  }
};
</script>

<style lang="less" scoped>
#business {
  background: #f4f5f7;

  .head {
    padding: 20px;
    border-bottom: 2px #f2f2f2 solid;
    background: #fff;
    height: 160px;
    margin-bottom: 20px;
    .top {
      height: 60px;
      border-bottom: 2px #f2f2f2 solid;
      display: flex;
      justify-content: space-between;
      .top-left {
        p:first-of-type {
          color: #000;
          font-weight: bold;
          font-size: 20px;
        }
      }
      .addcolor {
        font-size: 30px;
        color: red;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      padding: 10px 0 0 0;
      div {
        width: 100px;
        text-align: center;
        .font {
          font-size: 24px;
        }
      }
      div:not(:last-of-type) {
        border-right: 2px #f2f2f2 solid;
      }
    }
  }
  .main {
    padding: 20px;
    background: #fff;
    margin-bottom: 20px;
    p {
      border-bottom: 2px #f2f2f2 solid;
      color: red;
      padding: 10px 0;
    }
    div {
      border-bottom: 2px #f2f2f2 solid;
      padding: 10px 0;
      img {
        margin-right: 10px;
      }
    }
  }
  .shopImg {
    padding: 20px;
    background: #fff;
    margin-top: 20px;
    h2 {
      margin-bottom: 10px;
    }
    .imgs {
      img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
      }
    }
  }
  .foot {
    padding: 20px;
    background: #fff;
    margin-top: 20px;
    h2 {
      border-bottom: 2px #f2f2f2 solid;
    }
    div {
      border-bottom: 2px #f2f2f2 solid;
      padding: 15px 0;
    }
  }
}
</style>