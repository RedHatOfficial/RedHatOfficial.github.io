import angular from "angular";

// Styles
import styles from "./bandheader.scss";

export default angular.module("rhGitHub.bandheader", [])
  .component("bandheader", {
    template: require("./bandheader.html"),
    bindings: {
      title: "=",
      heading: "=",
      summary: "="
    }
  });
