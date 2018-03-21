import angular from "angular";

// Styles
import styles from "./group.scss";

export default angular.module("rhGitHub.group", ["ngSanitize"])
  .component("group", {
      template: require("./group.html"),
      bindings: {
          item: "="
      }
  });
