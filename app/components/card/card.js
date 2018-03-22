import angular from "angular";

// Styles
import styles from "./card.scss";

export default angular.module("rhGitHub.card", [])
  .component("card", {
    template: require("./card.html"),
    bindings: {
        feature: "=",
        logos: "="
    }
  });
