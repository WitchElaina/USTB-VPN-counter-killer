// ==UserScript==
// @name         USTB-VPN-Psd-dialog-remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  移除USTB外网访问网站的10s弱密码提示
// @author       WitchElaina
// @match        https://n.ustb.edu.cn/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=segmentfault.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onkeydown=function(){
        document.getElementsByClassName('el-dialog__wrapper psd-dialog')[0].remove();
        document.getElementsByClassName('v-modal')[0].remove();
    }
    // Your code here...
})();