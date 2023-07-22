<template>
  <div class="cart">
    <h2>购物车</h2>
    <p v-show="!products.length">
      <i>购物车空空如也</i>
    </p>
    <ul class="list">
      <li class="item" v-for="product in products" :key="product.id">
        {{ product.title }}
        {{ product.price }} X
        <input
          class="input"
          type="number"
          :min="1"
          :max="product.max"
          :value="product.nums"
        />
        =
        {{ (product.price * product.nums) | float(2) }}
        <button class="btn">删除</button>
      </li>
    </ul>
    <div class="payment">
      <p>总计：{{ total | float(2) }}</p>
      <p>
        <button class="btn-pay" :disabled="!products.length">结算</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "shoppingCart",
  computed: {
    ...mapState("cart", ["products"]),
    ...mapGetters("cart", ["total"])
  },
  filters: {
    float(val, num) {
      return val.toFixed(num);
    }
  }
};
</script>

<style>
.cart ul li {
  display: block;
}
</style>
