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
          <li :id="i" v-for="(v,i) in data" :key="i">
            <p class="p-name">{{v.name}}</p>
            <ul class="ul2">
              <li v-for="(food,index) in v.foods" :key="index">
                <div class="li-img">
                  <img :src="food.image" alt />
                </div>
                <div class="li-p">
                  <p>
                    <span class="foodName">{{food.name}}</span>
                  </p>
                  <p>
                    <span>月销售{{food.sellCount}}</span>
                    <span>好评率{{food.rating}}%</span>
                  </p>
                  <div class="num">
                    <div>
                      <span class="new">￥{{food.price}}</span>
                      <span class="old" v-show="food.oldPrice!=''">￥{{food.oldPrice}}</span>
                    </div>
                    <div>
                      <Icon
                        type="ios-remove-circle"
                        v-show="food.num > 0"
                        @click="decNum(i+'-'+index)"
                      />
                      <span v-show="food.num > 0">{{food.num}}</span>
                      <Icon type="ios-add-circle" @click="addNum(i+'-'+index)" />
                    </div>
                  </div>
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
      newindex: 0
    };
  },
  mounted() {
    new BScroll(document.querySelector(".left"), {
      click: true
    });
    this.rightDiv = new BScroll(document.querySelector(".right"), {
      click: true,
      probeType: 3
    });
    this.rightDiv.on("scroll", ({ y }) => {
      let newy = Math.abs(y);
      for (let newobj of this.divMath) {
        if (newy >= newobj.min && newy < newobj.max) {
          this.newindex = newobj.index;
          return;
        }
      }
    });
  },
  computed: {
    divMath() {
      // 算法
      let arr = [];
      let total = 0;

      for (let i = 0; i < this.data.length; i++) {
        //当前div的高度
        let allHeight = document.getElementById(i).offsetHeight;
        arr.push({ min: total, max: total + allHeight, index: i });
        total += allHeight;
      }
      console.log(arr);
      return arr;
    },
    data() {
      return this.$store.state.data;
    }
  },
  created() {
    getGoods().then(res => {
      // console.log(res.data.data);
      // this.data = res.data.data;
      for (let i = 0; i < res.data.data.length; i++) {
        var food = res.data.data[i].foods;
        // console.log(food);
        // debugger
        for (let j = 0; j < food.length; j++) {
          var food2 = food[j];
          food2.id = i + "-" + j;
          console.log(food2.id);
        }
      }
      this.$store.commit("initData", res.data.data);
    });
  },
  methods: {
    addclass(index) {
      this.newindex = index;
      console.log(this.newindex);
      this.rightDiv.scrollToElement(document.getElementById(index), 600);
    },
    addNum(id) {
      this.$store.commit("numAdd", id);
    },
    decNum(id) {
      this.$store.commit("numDec", id);
    }
  }
};
</script>

<style lang="less" scoped>
#goods {
  display: flex;
  .left {
    width: 100px;
    height: 400px;
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
    height: 400px;
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
              width: 160px;
              .foodName {
                font-weight: bold;
                color: #000;
                font-size: 16px;
              }
              .num {
                display: flex;
                justify-content: space-between;
                align-items: center;
                div:last-of-type {
                  font-size: 24px;
                  color: #039ede;
                  span {
                    color: #93989e;
                    font-size: 20px;
                  }
                }
                .new {
                  font-weight: bold;
                  color: red;
                }
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
}
</style>