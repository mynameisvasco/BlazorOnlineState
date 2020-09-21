# 🌎 Blazor Online State

This package provides Blazor applications with access to an improved version of the browser's <a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine">Online State API</a>

## 📝 Usage

1. In your Blazor app, add the `BlazorOnlineState` [NuGet package](https://www.nuget.org/packages/BlazorOnlineState/)

   ```bash
   dotnet add package BlazorOnlineState
   ```

2. In your Blazor app's `Startup.cs` (Server) or `Program.cs` (Client), register the 'OnlineStateService'.

   - #### Server

     ```c#
     ...
     using BlazorOnlineState;
     ...

     public void ConfigureServices(IServiceCollection services)
     {
         ...
         services.AddSingleton<OnlineStateServer>();
         ...
     }
     ```

   - #### Client

     ```c#
     ...
     using BlazorOnlineState;
     ...

     public static async Task Main(string[] args)
     {
         ...
         builder.Services.AddSingleton<OnlineStateService>();
         ...
     }
     ```

3. Include the following javascript code into index.html inside www-root folder

   ```javascript
   window.addEventListener("online", async () => {
     const req = await fetch("https://icanhazip.com/");
     if (req.ok) {
       DotNet.invokeMethodAsync("BlazorOnlineState", "OnOnline");
     }
   });

   window.addEventListener("offline", () => {
     DotNet.invokeMethodAsync("BlazorOnlineState", "OnOffline");
   });

   window.IsOnline = async () => {
     if (window.navigator.onLine) {
       const req = await fetch("https://icanhazip.com/");
       return req.ok;
     }
     return window.navigator.onLine;
   };
   ```

4. Now you can inject the OnlineService into any Blazor page!

## 💁🏼‍♂️ Author

Vasco Sousa

🌐 <a href="https://vasco.pw">Visit Website</a>

💰<a href="https://paypal.me/mynameisvascosousa">Donate</a>

📧 <a href="mailto:myemailvasco@gmail.com">Send Email</a>
