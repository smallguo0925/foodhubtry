import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state() {
    return {
      // 初始化及紀錄localstorage的資料
      cartData: [],
    }
  },
  getters: { //計算方法，對應computed
    totalNumofCart: function () {
      return this.cartData.length
      // 購物車中商品的總數量
    },
    getQuantityById: function () {
      // 返回相同 id 商品的數量
      return (id) => {
        return this.cartData.filter(item => item.id === id).length;
      };
    }

  },

  actions: {//函式，對應methods
    getLocalCartData() {
      //拿localstorage的資料
      let localCartData = localStorage["cartData"];
      if (localCartData) {
        this.cartData = JSON.parse(localCartData);
      }
      console.log(this.cartData);
    },

    addCart(item) {
      // 獲得被加入購物車的資料

      // this.cartData.push(item);
      // localStorage.setItem('addCart',JSON.stringify(this.cartData))
      console.log(item);
      
      const resultIndex = this.cartData.findIndex((prod) => {
        // 如果報錯需要確認資料來源的key是什麼
        return prod.id == item.id;
      });
      console.log(resultIndex);
      //把加入購物車的資料放進pinia
      if (resultIndex < 0) {

        this.cartData.push(
          {
            id: item.id,
            typeId1: item.typeId1,
            typeId2: item.typeId2,
            name: item.prodNam,
            price: item.price,
            prodImg: item.prodImg,
            count: 1,
          }
        )
      } else {
        // 購物車裡面有這筆資料，要把count+addcount
        const oldCount = this.cartData[resultIndex]["count"];
        this.cartData[resultIndex] = {
          ...this.cartData[resultIndex],
          count: oldCount + 1,
        };

      }

      console.log(this.cartData);




    },
    reduceFromCart(item) {
      //減少購物車
      const productIndex = this.cartData.findIndex(
        (prod) => prod.id == item.id
      );
      console.log(productIndex);
      if (this.cartData[productIndex]) {
        if (this.cartData[productIndex]["count"] > 1) {
          this.cartData[productIndex] = {
            ...this.cartData[productIndex],
            count: this.cartData[productIndex]["count"] - 1,
          };
        }
      }
      localStorage["cartData"] = JSON.stringify(this.cartData);
    },
    increaseFromCart(item) {
      // 增加購物車
      const productIndex = this.cartData.findIndex(
        (prod) => prod.id == item.id
      );
      if (this.cartData[productIndex]) {
        this.cartData[productIndex] = {
          ...this.cartData[productIndex],
          count: this.cartData[productIndex]["count"] + 1,
        };
      }
      localStorage["cartData"] = JSON.stringify(this.cartData);
    },
    itemDelFormCart(item) {
      //刪除購物車
      const productIndex = this.cartData.findIndex(
        (prod) => prod.id == item.id
      );
      if (this.cartData[productIndex]) {
        this.cartData.splice(productIndex, 1);
      }
      localStorage["cartData"] = JSON.stringify(this.cartData);
    },



  },

})
