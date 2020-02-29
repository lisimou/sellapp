<template>
  <div id="index">
    <Layout>
      <Header class="head" v-if="data.supports!=undefined" :style="{backgroundImage:'url('+data.avatar+')'}">
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
      </Header>

      <div class="nav">
        <router-link to="./goods" active-class="u-link--Active">商品</router-link>

        <router-link to="./evaluate" active-class="u-link--Active">评价</router-link>

        <router-link to="./business" active-class="u-link--Active">商家</router-link>
      </div>

      <router-view class="pages" />

      <Footer class="shopcar">
        <div class="img">
          <img src="../assets/imgs/shopcar.png" alt />
        </div>
        <ul>
          <li class="li1">
            <span>￥0</span>
          </li>
          <li class="li2">
            <span>另需配送费￥4元</span>
          </li>
          <li class="li3">
            <span>￥20起送</span>
          </li>
        </ul>
      </Footer>
    </Layout>
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
      console.log(res.data.data);
      this.data = res.data.data;
    });
  },
  methods: {
    active() {
      console.log(111);
    }
  }
};
</script>

<style lang='less' scoped>
#index {
  .head {
    height: 170px;
    padding: 20px 30px 0;
    background: #000;
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
    border-bottom: 2px solid #f2f2f2;
    .u-link--Active {
      color: red;
    }
  }
  .pages {
    height: 400px;
    margin-bottom: 60px;
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
      .li3 {
        width: 100px;
        background: #2b343b;
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
</style>