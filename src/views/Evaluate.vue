<template>
  <div id="evaluate">
    <div class="head">
      <div class="head-left">
        <p class="p1">3.9</p>
        <p class="p2">综合评分</p>
        <p class="p3">高于周边商家69.2%</p>
      </div>
      <div class="head-right">
        <p>
          服务态度
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_off@2x.png" alt />
        </p>
        <p>
          服务态度
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_on@2x.png" alt />
          <img src="../assets/imgs/star24_off@2x.png" alt />
        </p>
        <p>送达时间 44分钟</p>
      </div>
    </div>
    <div class="main">
      <div>
        <Button type="primary">全部57</Button>
        <Button style="background:#ccecf7">满意47</Button>
        <Button style="background:#eaebed">不满意10</Button>
      </div>
      <div>
        <img src="../assets/imgs/check_circle.svg" alt />
        <span>只看有内容的评价</span>
      </div>
    </div>
    <div class="foot">
      <ul>
        <li v-for="(v,i) in data" :key="i">
          <div class="li-img">
            <img :src="v.avatar" alt />
          </div>
          <div class="li-p">
            <div>
              <div>{{v.username}}</div>
              <div>{{v.rateTime}}</div>
            </div>
            <p>
              <img src="../assets/imgs/star24_on@2x.png" alt />
              <img src="../assets/imgs/star24_on@2x.png" alt />
              <img src="../assets/imgs/star24_on@2x.png" alt />
              <img src="../assets/imgs/star24_on@2x.png" alt />
              <img src="../assets/imgs/star24_off@2x.png" alt />
              {{v.deliveryTime}}分钟送达
            </p>
            <p>{{v.text}}</p>
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getEva } from "../api/apis";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getEva().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
#evaluate {
  background: #f4f5f7;
  .head {
    height: 140px;
    background: #fff;
    border-bottom: 1px #f2f2f2 solid;
    margin-bottom: 30px;
    display: flex;
    .head-left {
      width: 150px;
      margin: 20px;
      border-right: #f4f5f7 2px solid;
      text-align: center;
      .p1 {
        color: #fe9900;
        font-size: 32px;
      }
      .p2 {
        color: #000;
      }
      .p3 {
        color: #d5d6da;
      }
    }
    .head-right {
      flex: 1;
      margin: 20px 10px 10px;
      p {
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .main {
    padding: 20px;
    border-bottom: 2px #f2f2f2 solid;
    background: #fff;
    height: 160px;
    div:first-of-type {
      height: 60px;
      border-bottom: 2px #f2f2f2 solid;
      button {
        margin-right: 10px;
      }
    }
    div:last-of-type {
      line-height: 60px;
      font-size: 20px;
      img {
        width: 40px;
        vertical-align: middle;
      }
    }
  }
  .foot {
    padding: 20px;
    background: #fff;
    margin-bottom: 60px;
    li {
      padding: 10px;
      border-bottom: 2px #f2f2f2 solid;
      list-style: none;
      display: flex;
      .li-img {
        width: 40px;
        height: 40px;
        border-radius: 90%;
        overflow: hidden;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .li-p {
        width: 100%;
        div {
          width: 100%;
          display: flex;
          div:first-of-type {
            align-self: flex-end;
          }
          div:last-of-type {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>