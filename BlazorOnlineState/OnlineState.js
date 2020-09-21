window.addEventListener("online", async () => {
    const req = await fetch('https://icanhazip.com/');
    if (req.ok) {
        DotNet.invokeMethodAsync('BlazorOnlineState', 'OnOnline');
    }
});

window.addEventListener("offline", () => {
    DotNet.invokeMethodAsync('BlazorOnlineState', 'OnOffline');
});

window.IsOnline = async () => {
    if (window.navigator.onLine) {
        const req = await fetch('https://icanhazip.com/');
        return req.ok
    };
    return window.navigator.onLine
}