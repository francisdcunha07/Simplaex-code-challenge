window = window || {};
window.rivraddon = window.rivraddon || {};
window.rivraddon.analytics = window.rivraddon.analytics || {};
window.rivraddon.analytics.enableAnalytics = function () {
    console.log('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics');
}

window.rivraddon.analytics.trackPbjsEvent = function (event) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Some Error Occurred");
                }
            }
        };
        xhr.open('POST', "https://tracker.simplaex-code-challenge.com")
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({ "eventType": event.eventType }));
    });
}



