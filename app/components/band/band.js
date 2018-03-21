import angular from "angular";

// Styles
import styles from "./band.scss";

export default angular.module("rhGitHub.band", [])
    .component("band", {
        template: require("./band.html"),
        bindings: {
          anchor: "=",
          background: "=",
          layout: "="
        }
    });
