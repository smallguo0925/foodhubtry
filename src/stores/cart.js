import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state(){
    return{
      // 初始化及紀錄localstorage的資料
      cartData: JSON.parse(localStorage.getItem('addCart')) || [],
    }
  },
  getters:{ //計算方法，對應computed
    numOfCart: function() {
      
    }
  },
  
  actions:{//函式，對應methods
    addCart(item){
      // 獲得被加入購物車的資料
      
      this.cartData.push(item);
      localStorage.setItem('addCart',JSON.stringify(this.mergedCartLength))

      localStorage.setItem('addCart',JSON.stringify(this.cartData))

    },

  },

})
