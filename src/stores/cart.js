import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state(){
    return{
      // 初始化及紀錄localstorage的資料
      cartData: [],
    }
  },
  getters:{ //計算方法，對應computed
    totalNumofCart: function() {
      return this.cartData.length
      // 購物車中商品的總數量
    },
    getQuantityById: function() {
      // 返回相同 id 商品的數量
      return (id) => {
        return this.cartData.filter(item => item.id === id).length;
      };
    }

  },
  
  actions:{//函式，對應methods
    getLocalCartData() {
      //拿localstorage的資料
      let localCartData = localStorage["cartData"];
      if (localCartData) {
        this.cartData = JSON.parse(localCartData);
      }
      console.log(this.cartData);
    },

    addCart(item){
      // 獲得被加入購物車的資料
      
      this.cartData.push(item);

      localStorage.setItem('addCart',JSON.stringify(this.cartData))

    },


  },

})
