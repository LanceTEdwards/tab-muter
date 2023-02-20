let checkbox = document.querySelector('#checkbox');

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('enabled', function (result) {
        if (result.enabled != null) {
            checkbox.checked = result.enabled;
        }
        else if(result.enabled == null) {
            checkbox.checked = !result.enabled;
        }
    });
    checkbox.addEventListener('change', function () {
        chrome.storage.local.set({ 'enabled': checkbox.checked}, function () {
        });

        chrome.tabs.query({url: []}, function (tabs) {
            for (let i = 0; i < tabs.length; i++) {
                let mutedInfo = tabs[i].mutedInfo.muted;
                if (!mutedInfo && checkbox.checked == true) {
                    chrome.tabs.update(tabs[i].id, {"muted": true});
                }
                else if(mutedInfo && checkbox.checked == false) {
                    chrome.tabs.update(tabs[i].id, {"muted": false});
                }
            }
        });
    });
});