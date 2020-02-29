<template>
  <div id="goods">
    <div class="left">
      <ul class="content">
        <div
          @click="addclass(i)"
          v-for="(v,i) in data"
          :key="i"
          class="list"
          :style="i==newindex?'color:red':''"
        >
          <span>{{v.name}}</span>
        </div>
      </ul>
    </div>

    <div class="right">
      <ul class="content">
        <ul class="ul1">
          <li :id="i" v-for="(v,i) in data" :key="i" @click="findIndex(i)">
            <p class="p-name">{{v.name}}</p>
            <ul class="ul2">
              <li v-for="(food,index) in v.foods" :key="index">
                <div class="li-img">
                  <img :src="food.image" alt />
                </div>
                <div class="li-p">
                  <p>
                    <span>{{food.name}}</span>
                  </p>
                  <p>
                    <span>月销售{{food.sellCount}}</span>
                    <span>好评率{{food.rating}}%</span>
                  </p>
                  <p>
                    <span>￥{{food.price}}</span>
                    <span class="old">￥{{food.oldPrice}}</span>
                  </p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      data: {},
      newindex: 0
    };
  },
  mounted() {
    new BScroll(document.querySelector(".left"), {
      click: true
    });
    this.rightDiv = new BScroll(document.querySelector(".right"), {
      click: true
    });
  },
  created() {
    getGoods().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  },
  methods: {
    addclass(index) {
      this.newindex = index;
      console.log(this.newindex);
      this.rightDiv.scrollToElement(document.getElementById(index), 600);
    },
    findIndex(i) {
      console.log(i);
    }
  }
};
</script>

<style lang="less" scoped>
#goods {
  display: flex;
  height: 100%;

  .left {
    width: 100px;
    height: 100%;
    overflow: scroll;
    .list {
      border-bottom: 1px solid #f2f2f2;
      border-right: 1px solid #f2f2f2;
      width: 100px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      padding: 10px;
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .right {
    flex: 1;
    overflow: scroll;
    height: 100%;
    li {
      list-style: none;
    }
    .ul1 {
      li {
        background: #fff;
        .p-name {
          background: #f4f5f7;
        }
        .ul2 {
          li {
            background: #fff;
            height: 100px;
            border-bottom: 2px solid #f2f2f2;
            margin: 20px 20px 0;
            display: flex;
            .li-img {
              margin-right: 10px;
              img {
                width: 80px;
              }
            }
            .li-p {
              .old {
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
}
</style>