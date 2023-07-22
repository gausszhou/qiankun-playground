<template>
  <div id="demo20">
    <h1>Demo20 —— Vuex案例</h1>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";
export default {
  components: {
    ProductList,
    ShoppingCart
  },
  name: "demo20",
  data() {
    return {};
  },
  methods: {},
  mounted: function() {}
};
</script>
<style></style>
