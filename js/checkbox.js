// Import advice function for triggering upon shake
import { showRandomAdvice, buttons } from "./app.js";
// Get relevant checkbox elements from DOM
const checkboxContainer = document.getElementById("checkbox-container");
const checkbox = checkboxContainer.getElementsByTagName("input")[0];
const checkboxOnOff = checkboxContainer.getElementsByTagName("span")[0];
const checkboxExplainer = checkboxContainer.getElementsByTagName("p")[1];

// See first browser supports DeviceMotionEvent
if (window.DeviceMotionEvent) {
  // ...if DeviceMotionEvent is supported, load the script and handler
  loadScript("js/shake.js", setUpShakeHandler);
}
// Functions:
// Function for handling the response to a shake
function setUpShakeHandler() {
  // Set up shakeEvent
  const shakeEvent = new Shake({ threshold: 6 });
  // Enable checkbox for switch permission
  checkboxContainer.style.display = "inline";

  // Listen to checkbox events
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      // Checkbox is checked..
      checkboxOnOff.textContent = "on";
      // Only fire permission request if it exists in browser
      if (DeviceMotionEvent.requestPermission !== undefined) {
        // Fire permission request
        DeviceMotionEvent.requestPermission()
          .then((response) => {
            if (response == "granted") {
              // Response granted
              // Start listening to device motion
              shakeEvent.start();
              // Show instructions
              checkboxExplainer.style.opacity = "1";
              // Listen for shake and then trigger two functions
              window.addEventListener("shake", showRandomAdvice, false);
              window.addEventListener("shake", handleButtonAnimation, false);
            } else {
              // No permission granted: turn checkbox back off
              checkbox.checked = false;
              checkboxOnOff.textContent = "off";
              // Hide instructions
              checkboxExplainer.style.opacity = "0";
            }
          })
          .catch(console.error);
      }
    } else {
      // Turn checkbox off
      checkbox.checked = false;
      checkboxOnOff.textContent = "off";
      // Stop shakeEvent
      shakeEvent.stop();
      // Hide instructions
      checkboxExplainer.style.opacity = "0";
    }
  });
}

// Function for handling the load of shake.js when applicable
function loadScript(src, callbackfn) {
  const newScript = document.createElement("script");
  newScript.type = "text/javascript";
  newScript.setAttribute("async", "true");
  newScript.setAttribute("src", src);

  if (newScript.readyState) {
    newScript.onreadystatechange = function () {
      if (/loaded|complete/.test(newScript.readyState)) callbackfn();
    };
  } else {
    newScript.addEventListener("load", callbackfn, false);
  }

  document.documentElement.firstChild.appendChild(newScript);
}

function handleButtonAnimation() {
  buttons.forEach((button) => animateButton(button));
}

function animateButton(button) {
  button.classList.add("shook");
  button.onanimationend = () => {
    button.classList.remove("shook");
  };
}
