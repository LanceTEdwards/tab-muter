let checkbox = document.querySelector('#checkbox');

    checkbox.addEventListener('change', () => {
        chrome.tabs.query({url: []}, function (tabs) {
            for (let i = 0; i < tabs.length; i++) {
                let mutedInfo = tabs[i].mutedInfo.muted;
                if (!mutedInfo && checkbox.checked === true) {
                    chrome.tabs.update(tabs[i].id, {"muted": true});
                }
                else if(mutedInfo && checkbox.checked === false){
                    chrome.tabs.update(tabs[i].id, {"muted": false});
                }
            }
        });
    });
