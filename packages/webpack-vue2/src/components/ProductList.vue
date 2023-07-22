<template>
  <div>
    <h2>商品列表</h2>
    <ul class="list">
      <li class="item" v-for="product in products" :key="product.id">
        <div>{{ product.title }}</div>
        <div>{{ product.price }}</div>
        <button class="btn" :disabled="!product.sku">
          {{ product.sku > 0 ? "添加到购物车" : "库存不足" }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "productList",
  computed: {
    ...mapState("products", ["products"])
  },
  created() {
    this.$store.dispatch("products/getProducts");
  },
  methods: {
    ...mapActions("products", ["getProducts"])
  }
};
</script>

<style></style>
