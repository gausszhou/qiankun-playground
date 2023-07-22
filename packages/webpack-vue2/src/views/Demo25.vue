<template>
  <div id="demo25">
    <h1>Demo25 —— Time Zone</h1>
    <p>
      getTimezoneOffset () => {{ date.getTimezoneOffset() }} 单位分钟
      负号表示早于格林尼治时间
    </p>
    <p>
      getTimezoneOffset ()/60 => {{ date.getTimezoneOffset() / 60 }} 除以60处理
      -8表示东八区
    </p>
    <hr />

    <p>toDateString() => {{ date.toDateString() }}</p>

    <p>toISOString() => {{ date.toISOString() }}</p>

    <p>toJSON() => {{ date.toJSON() }}</p>
    <b>toJSON().slice(0,10) => {{ date.toJSON().slice(0, 10) }}</b>
    <hr />
    <p>toGMTString() => {{ date.toGMTString() }}</p>
    <p>toString() => {{ date.toString() }}</p>

    <p>toLocaleString() => {{ date.toLocaleString() }}</p>

    <p>toLocaleDateString() => {{ date.toLocaleDateString() }}</p>
    <p>toLocaleTimeString() => {{ date.toLocaleTimeString() }}</p>

    <p>toTimeString() => {{ date.toTimeString() }}</p>
    <p>toUTCString() => {{ date.toUTCString() }}</p>
  </div>
</template>

<script>
export default {
  name: "demo25",
  components: {},
  data() {
    return {
      date: new Date()
    };
  },
  computed: {},
  watch: {},
  created() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  mounted() {},
  methods: {}
};
</script>

<style></style>
