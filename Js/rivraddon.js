window.rivraddon = window.rivraddon || {}; 
window.rivraddon.analytics =  window.rivraddon.analytics || {};
window.rivraddon.analytics.enableAnalytics = function () {
    console.log('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics');
}

window.rivraddon.analytics.trackPbjsEvent = function (event) {
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "https://tracker.simplaex-code-challenge.com";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({ "eventType": event.eventType }));
}