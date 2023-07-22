// 国际化
import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: Cookies.get("language") || "en", // 当前环境语言标记
  messages: {}, // 语言包存储变量
  silentTranslationWarn: true //禁止本地化失败警告
});

export default i18n;
