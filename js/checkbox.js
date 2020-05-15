// Get checkbox-container
const checkboxContainer = document.getElementById("checkbox-container");
const checkbox = document.querySelector("input[name=allowShake]");
const checkboxSwitchSpan = document.getElementById("switch-span");
console.log(checkboxSwitchSpan.textContent);

// See first browser supports DeviceMotionEvent
if (window.DeviceMotionEvent) {
  // console.log("DeviceMotionEvent is supported");
  // ...if DeviceMotionEvent is supported, load the script and handler
  // TODO Enable checkboxContainer only if DeviceMotionEvent supported
  loadScript("js/shake.js", setUpShakeHandler);
}
// Functions:
// Function for handling the response to a shake
function setUpShakeHandler() {
  // Set up shakeEvent
  const shakeEvent = new Shake({ threshold: 2 });
  // Enable checkbox for switch permission
  checkboxContainer.style.display = "inline";
  // Listen to checkbox events
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      // Checkbox is checked..
      checkboxSwitchSpan.textContent = "on";
      console.log("Checkbox checked ON: begin looking for permission and starting shake");
      // Only fire permission request if it exists in browser
      if (DeviceMotionEvent.requestPermission !== undefined) {
        DeviceMotionEvent.requestPermission()
          .then((response) => {
            if (response == "granted") {
              console.log("response granted, keeping checkbox ON and enabling shake");
              // Start listening to device motion
              shakeEvent.start();
              // Register a shake event listener with function
              window.addEventListener("shake", handleRefresh, false);
            } else {
              // TODO Turn checkbox off
              checkbox.checked = false;
              checkboxSwitchSpan.textContent = "off";
            }
          })
          .catch(console.error);
      }
    } else {
      // Checkbox is checked OFF
      checkbox.checked = false;
      checkboxSwitchSpan.textContent = "off";
      console.log("Checkbox checked OFF: turn off shake");
      // TODO stop shake
      shakeEvent.stop();
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

function handleRefresh() {
  console.log("shaking!!!");
}
