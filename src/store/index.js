import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//新建store并暴露
export default new Vuex.Store({
    //交互数据
    state: {
        data: [],
    },

    //改变state
    mutations: {
        initData(state, newArr) {
            state.data = newArr
        },
        numAdd(state, thisId) {
            console.log(state.data);

            for (let i of state.data) {
                for (let j of i.foods) {
                    if (j.id == thisId) {
                        // debugger
                        j.num += 1
                        return
                    }
                }
            }
        },
        numDec(state, thisId) {
            for (let i of state.data) {
                for (let j of i.foods) {
                    if (j.id == thisId) {
                        // debugger
                        j.num -= 1
                        return
                    }
                }
            }
        }

    },
    getters: {
        getNum(state) {
            var arr = []
            for (let i of state.data) {
                i.foods.map(obj => {
                    if (obj.num > 0 && obj.num != 0) {
                        arr.push({
                            name: obj.name,
                            allnum: obj.num,
                            price: obj.price
                        })
                    }
                })
            }
            return arr
        },
        money(state) {
            var allMoney = 0
            for (let i of state.data) {
                i.foods.map(obj => {
                    allMoney += obj.num * obj.price
                })
            }
            return allMoney
        }
    }
})