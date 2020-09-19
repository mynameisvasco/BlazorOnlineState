using System;
using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace BlazorOnlineState
{
    public class OnlineStateService
    {
        private IJSRuntime JSRuntime { get; set; }
        public static event StatusHandler Online;
        public static event StatusHandler Offline;
        public delegate void StatusHandler();

        public OnlineStateService(IJSRuntime jSRuntime)
        {
            this.JSRuntime = jSRuntime;
        }

        public async Task<bool> IsOnline()
        {
            return (await JSRuntime.InvokeAsync<bool>("IsOnline", null));
        }

        [JSInvokable]
        public static void OnOnline()
        {
            Online.Invoke();
        }

        [JSInvokable]
        public static void OnOffline()
        {
            Offline.Invoke();
        }
    }
}
