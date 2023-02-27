let checkbox = document.querySelector("#checkbox");

//created a variable to access the checkbox to execute actions when it has been checked/unchecked

document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("enabled", function (result) {
    if (result.enabled != null) {
      checkbox.checked = result.enabled;
    }
    //when the window loads, check the storage to check whether there was stored input
    //Afterword: tried to store the muted state but was unsure on how to do it
  });
  checkbox.addEventListener("change", function () {
    chrome.storage.local.set({ enabled: checkbox.checked }, function () {});

    chrome.tabs.query({ url: [] }, function (tabs) {
      for (let i = 0; i < tabs.length; i++) {
        let mutedInfo = tabs[i].mutedInfo.muted;
        if (!mutedInfo && checkbox.checked == true) {
          chrome.tabs.update(tabs[i].id, { muted: true });
        } else if (mutedInfo && checkbox.checked == false) {
          chrome.tabs.update(tabs[i].id, { muted: false });
        }
      }
    });
  });
});
