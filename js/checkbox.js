// Get checkbox-container
const checkboxContainer = document.getElementById("checkbox-container");
const checkbox = document.querySelector("input[name=allowShake]");

// See first browser supports DeviceMotionEvent
if (window.DeviceMotionEvent) {
  console.log("DeviceMotionEvent is supported");
  // ...if DeviceMotionEvent is supported, load the script and handler
  // TODO Enable checkboxContainer only if DeviceMotionEvent supported
  loadScript("js/shake.js", setUpShakeHandler);
} else {
  console.log("DeviceMotionEvent not supported");
}
// Functions:
// Function for handling the response to a shake
function setUpShakeHandler() {
  console.log("Setting up Shake Handler...");
  // Enable checkbox for switch permission
  checkboxContainer.style.display = "inline";
  // Listen to checkbox events
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      // Checkbox is checked..
      console.log("Checkbox checked");
      console.log(DeviceMotionEvent.requestPermission);
      if (DeviceMotionEvent.requestPermission !== undefined) {
        requestMotionPermission();
      } else {
        console.log("no permission needed, carry on");
      }
    } else {
      // Checkbox is not checked..
      console.log("Checkbox not checked");
    }
  });

  //   Do Shake.js stuff

  // var shakeEvent = new Shake({ threshold: 2 });
  // //   Start listening to device motion
  // shakeEvent.start();
  // //   Register a shake event listener with function
  // window.addEventListener("shake", handleRefresh, false);
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

// Function for getting permission to access DeviceMotion
function requestMotionPermission() {
  DeviceMotionEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        console.log("response granted, turning on checkbox and enabled shake");
      }
    })
    .catch(console.error);
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    // Checkbox is checked..
    console.log("Checkbox checked");
    requestMotionPermission();
  } else {
    // Checkbox is not checked..
    console.log("Checkbox not checked");
  }
});
