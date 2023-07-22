<template>
  <div class="demo26">
    <h1>Demo26 - I18n</h1>
    <div>
      <el-select
        v-model="language"
        placeholder
        clearable
        filterable
        @change="setLanguage"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div>{{ $t("hello") }}</div>
    <div>{{ $t("world") }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "",
      options: [
        {
          value: "en",
          label: "English"
        },
        {
          value: "zh",
          label: "中文"
        }
      ]
    };
  },
  created() {
    this.getLanguageConfig();
  },
  methods: {
    getLanguageConfig() {
      this.$http.getLanguageConfig().then(res => {
        this.language = res.data.lang;
        this.$store.commit("setLanguage", this.language);
        this.getLanguagePackJSON();
      });
    },
    getLanguagePackJSON() {
      let params = this.language;
      this.$http.getLanguagePackJSON(params).then(res => {
        // 如果你指定了 locale 参数，则使用 locale 提供的语言环境进行本地化。
        this.$i18n.locale = this.language;
        this.$i18n.setLocaleMessage(this.language, res.data);
      });
    },
    setLanguage() {
      this.getLanguagePackJSON();
    }
  }
};
</script>

<style></style>
