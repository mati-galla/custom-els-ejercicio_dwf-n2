import { init as initHeader } from "./components/header/index";
import { init as initTitle } from "./components/title";
import { init as initSubtitle } from "./components/subtitle";
import { init as initLargeText } from "./components/large-text";
import { init as initBody } from "./components/body";
import { init as initInput } from "./components/text-input";
import { init as initOutlinedButton } from "./components/outlined-button";
import { init as initButton } from "./components/button";
import { init as initFooter } from "./components/footer";

(function main() {
  initHeader();
  initTitle();
  initSubtitle();
  initLargeText();
  initBody();
  initInput();
  initOutlinedButton();
  initButton();
  initFooter();
})();
