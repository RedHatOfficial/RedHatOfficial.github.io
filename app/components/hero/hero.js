import angular from "angular";

// Styles
import styles from "./hero.scss";

export default angular.module("rhGitHub.hero", ["ngSanitize"])
    .component("hero", {
        template: require("./hero.html"),
        bindings: {
          hero: "="
        }
    });
