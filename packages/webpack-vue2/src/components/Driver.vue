<template>
  <div></div>
</template>

<script>
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
export default {
  data() {
    return {
      dirver: {}
    };
  },
  mounted() {
    this.driver = new Driver({
      className: "scoped-class", // className to wrap driver.js popover
      animate: true, // Whether to animate or not
      opacity: 0.3, // Background opacity (0 means only popovers and without overlay)
      padding: 2, // Distance of element from around the edges
      allowClose: false, // Whether the click on overlay should close or not
      overlayClickNext: false, // Whether the click on overlay should move next
      doneBtnText: "Done", // Text on the final button
      closeBtnText: "Close", // Text on the close button for this step
      stageBackground: "#ffffff", // Background color for the staged behind highlighted element
      nextBtnText: "Next", // Next button text for this step
      prevBtnText: "Previous", // Previous button text for this step
      showButtons: true, // Do not show control buttons in footer
      keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
      scrollIntoViewOptions: {}
    });
    this.start();
  },
  methods: {
    start() {
      this.driver.defineSteps([
        {
          element: "#first",
          popover: {
            title: "Title for the Popover",
            description: "Description for it",
            position: "bottom",
            offset: 20
          }
        },
        {
          element: "#second",
          popover: {
            title: "Title for the Popover",
            description: "Description for it",
            position: "bottom",
            offset: 10
          }
        },

        {
          element: "#third",
          popover: {
            title: "Title for the Popover",
            description: "Description for it",
            position: "bottom",

            offset: 20
          }
        },
        {
          element: "#fourth",
          popover: {
            title: "Title for the Popover",
            description: "Description for it",
            position: "left",
            offset: 20
          }
        },
        {
          element: "#fifth",
          popover: {
            title: "Title for the Popover",
            description: "Description for it",
            position: "right",
            offset: 20
          }
        }
      ]);
      this.$driver.start();
    }
  }
};
</script>
<style></style>
