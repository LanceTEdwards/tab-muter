function saveCheckBoxState(checkbox) {
    chrome.storage.local.set({'checkbox': checkbox}, function() {
        console.log("State saved");
    });
}

function saveMutedState(mutedState) {
    chrome.storage.local.set({'muted': mutedState}, function() {
        console.log("State saved");
    });
}

function loadCheckBoxState(checkbox) {
    chrome.storage.local.get({'checkbox': checkbox}, function() {
        console.log("State loaded");
    });
}

function loadMutedState(mutedState) {
    chrome.storage.local.get({'muted': mutedState}, function() {
        console.log("State loaded");
    });
}