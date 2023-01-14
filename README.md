# xk6-UI_performance-test
## xk6-Browser
#
![LOGO XK6](https://user-images.githubusercontent.com/93552647/212485896-25073342-4410-4551-8379-a69f7fbc1c14.png)
#
>Base documentation: https://k6.io/docs/javascript-api/xk6-browser/

## Installation 
 Ensure you have GO installed in your machine. 

>Check this link for GO download: https://go.dev/doc/install

#### 1. Install xk6: 
<pre><code>go install go.k6.io/xk6/cmd/xk6@latest</code></pre>

#### 2. Build new xk6 binary: 
<pre><code>xk6 build --output xk6-browser.exe --with github.com/grafana/xk6-browser</code></pre>

After  execution we will create the xk6-browser binary in the current working directory. Check if .exe was created. 

![exe loog](https://user-images.githubusercontent.com/93552647/212487313-4780c418-3187-4ff6-8df3-2adb88a0b415.png)


This repo we have some examples executing  differents applications like login page and some other functionalities click, check and fill. 

>setUp browser: https://k6.io/docs/javascript-api/xk6-browser/api/browser/

>handle element: https://k6.io/docs/javascript-api/xk6-browser/api/elementhandle/

>Link for Locators: https://k6.io/docs/javascript-api/xk6-browser/api/locator/