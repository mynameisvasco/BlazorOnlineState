window.addEventListener("online", () => {
    DotNet.invokeMethodAsync('BlazorOnlineState', 'onOnline');
});

window.addEventListener("offline", () => {
    DotNet.invokeMethodAsync('BlazorOnlineState', 'onOnline');
});

window.IsOnline = () => window.navigator.onLine;