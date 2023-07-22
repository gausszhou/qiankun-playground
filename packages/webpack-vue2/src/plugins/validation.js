/*表单验证插件 Element UI*/
let Validation = {};
Validation.install = Vue => {
  /**
   * 参数 item
   * required true  必填项
   * maxLength  字符串的最大长度
   * min 和 max 必须同时给 min < max  type=number
   * password和confirmPassword 两个密码是否一致验证
   * */
  Vue.prototype.$filter_rules = item => {
    let rules = [];
    if (item.required) {
      rules.push({
        required: true,
        message: this.$t("formValidte.isRequired"),
        trigger: "blur",
        pattern: "[^ \x22]+"
      });
    }
    /*最大值*/
    if (item.maxLength) {
      rules.push({
        min: 1,
        max: item.maxLength,
        message:
          this.$t("formValidte.upTo") +
          item.maxLength +
          this.$t("formValidte.characters"),
        trigger: "blur"
      });
    }
    /*长度区间*/
    if (item.min && item.max) {
      rules.push({
        min: item.min,
        max: item.max,
        message:
          this.$t("formValidte.characterLength") + item.min + "~" + item.max,
        trigger: "blur"
      });
    }
    //判断密码是否一致
    if (item.password && item.confirmPassword) {
      const confirmPasswordValid = (rule, value, callback) => {
        if (item.confirmPassword !== item.password) {
          return callback(new Error(this.$t("formValidte.twoPwdReq")));
        } else {
          return callback();
        }
      };
      rules.push({
        validator: confirmPasswordValid,
        trigger: "blur"
      });
    }
    //AES秘钥
    if (item.encryption) {
      const passphraseValid = (rule, value, callback) => {
        if (item.encryption === "none") {
          return callback();
        }
        if (!value) {
          callback(new Error(this.$t("srt.passphraseReq")));
        } else if (!/^[0-9a-zA-Z_]{1,}$/g.test(value)) {
          callback(new Error(this.$t("srt.passphraseFmt")));
        } else if (value.length > item.encryption.split("-")[1] / 8) {
          callback(new Error(this.$t("srt.tooMany")));
        } else if (value.length < 10) {
          callback(new Error(this.$t("srt.tooShort")));
        } else {
          callback();
        }
      };
      rules.push({
        validator: passphraseValid,
        trigger: "blur"
      });
    }
    if (item.type) {
      let type = item.type;
      switch (type) {
        case "mac":
          rules.push({
            pattern: /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/,
            message: this.$t("formValidte.macReqError"),
            trigger: "blur"
          });
          break;
        case "ip":
          rules.push({
            pattern: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
            message: this.$t("formValidte.ipReqError"),
            trigger: "blur"
          });
          break;
        default:
          rules.push({});
          break;
      }
    }
    return rules;
  };
};

export default Validation;
