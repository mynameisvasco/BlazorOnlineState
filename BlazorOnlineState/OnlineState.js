window.addEventListener("online", () => {
    DotNet.invokeMethodAsync('BlazorOnlineState', 'OnOnline');
});

window.addEventListener("offline", () => {
    DotNet.invokeMethodAsync('BlazorOnlineState', 'OnOffline');
});

window.IsOnline = () => window.navigator.onLine;