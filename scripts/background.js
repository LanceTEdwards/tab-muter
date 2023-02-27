chrome.storage.local.get("enabled", function (result) {
  if (result.enabled) {
  }
});

//this accesses the chrome's local storage and gets wherever the 'enabled' function is set
