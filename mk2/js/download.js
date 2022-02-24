window.onload = function defaults() {
    let btns = document.getElementById("renew");
    let extra = document.getElementById("extra");
    extra.innerHTML = "&nbsp;";
    btns.style.display = "none";
};

/* Secunde pana incepe download-ul */
let delay = 1;
let multiplicator = setTimeout("download()", delay*1000);

function download() {
    let normalDl = document.getElementById('normaldl');
    let oneDl = document.getElementById('onedl');
    let infodl1 = document.getElementById("infodl");
    let thanks = document.getElementById("thanks");
    let renewBtnID = document.getElementById("new");
    let backBtnID = document.getElementById("back");
    let svg = document.getElementById("svg");
    let btns = document.getElementById("renew");
    let mlsecond = 1000;

    if (normalDl.value.includes("http")) {
        window.location = normalDl.value;
        setTimeout (function changeInfo() {
            infodl1.innerHTML = "DOWNLOAD HAS STARTED ✔️";
        }, mlsecond*3);
        setTimeout (function closeWindow1() {
            infodl1.innerHTML = "THIS WINDOW WILL CLOSE IN";
            thanks.innerHTML = "5";
        }, mlsecond*6);
        setTimeout (function closeWindow2() {
            thanks.innerHTML = "4";
        }, mlsecond*7);
        setTimeout (function closeWindow3() {
            thanks.innerHTML = "3";
        }, mlsecond*8);
        setTimeout (function closeWindow4() {
            thanks.innerHTML = "2";
        }, mlsecond*9);
        setTimeout (function closeWindow5() {
            thanks.innerHTML = "1";
        }, mlsecond*10);
        setTimeout (function closeWindow6() {
            thanks.innerHTML = "0";
            window.open('','_self').close()
        }, mlsecond*11);
        setTimeout (function closeWindowErr() {
            thanks.innerHTML = "If the window didn't close, please do it manually.";
        }, mlsecond*12);
    }
    else if (oneDl.value.includes("1drv")) {
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
        let oneDrvDlString = 'https://api.onedrive.com/v1.0/shares/u!';
        let oneDrvLink = oneDl.value;
        let oneDrvFinalLink = oneDrvLink.substr(0, 48);
        let encodedString = Base64.encode(oneDrvFinalLink);
        let encodedModifiedString = encodedString.substr(0, 67);
        let oneDrvDlAfterString = '/root/content';
        window.location = oneDrvDlString+encodedModifiedString+oneDrvDlAfterString;
        setTimeout (function changeInfo() {
            infodl1.innerHTML = "DOWNLOAD HAS STARTED ✔️";
        }, mlsecond*3);
        setTimeout (function closeWindow1() {
            infodl1.innerHTML = "THIS WINDOW WILL CLOSE IN";
            thanks.innerHTML = "5";
        }, mlsecond*6);
        setTimeout (function closeWindow2() {
            thanks.innerHTML = "4";
        }, mlsecond*7);
        setTimeout (function closeWindow3() {
            thanks.innerHTML = "3";
        }, mlsecond*8);
        setTimeout (function closeWindow4() {
            thanks.innerHTML = "2";
        }, mlsecond*9);
        setTimeout (function closeWindow5() {
            thanks.innerHTML = "1";
        }, mlsecond*10);
        setTimeout (function closeWindow6() {
            thanks.innerHTML = "0";
            window.open('','_self').close()
        }, mlsecond*11);
        setTimeout (function closeWindowErr() {
            thanks.innerHTML = "If the window didn't close, please do it manually.";
        }, mlsecond*12);
    }
    else if (renewBtnID.className == "demo") {
        svg.style.display = "none";
        btns.style.display = "block";
        infodl1.innerHTML = "THIS DOWNLOAD HAS EXPIRED";
        thanks.innerHTML = "❌";
        renewBtnID.onclick = function () {
            infodl1.style.color = "#FF8E36";
            infodl1.innerHTML = "THIS WAS JUST A DEMO.";
            thanks.innerHTML = "You should have a real profile to make this work.";
            renewBtnID.innerHTML = "Get Your Profile Here"
            backBtnID.style.display = "none";
            renewBtnID.onclick = function () {
                window.location = "https://photos.sebastian.ghiveci.com/info/pricing";
            };
        };
    }
    else if (renewBtnID.className == "temp") {
        svg.style.display = "none";
        btns.style.display = "block";
        infodl1.innerHTML = "THIS DOWNLOAD HAS EXPIRED";
        thanks.innerHTML = "❌";
        renewBtnID.style.cursor = "not-allowed";
        renewBtnID.onclick = function () {
            infodl1.innerHTML = "TEMPORARY FILES CAN'T BE RENEWED.";
        };
    }
    else {
        svg.style.display = "none";
        btns.style.display = "block";
        infodl1.innerHTML = "THIS DOWNLOAD HAS EXPIRED";
        thanks.innerHTML = "❌";
    }
};

function renew() {
    let host = window.location.host;
    let path = window.location.pathname;
    let mailProtocol = "mailto:";
    let mailReceiver = "photos@sebastian.ghiveci.com?";
    let mailSubject = "subject=RENEW%20-%20Download%20Link&";
    let mailBody = "body=This%20Email%20was%20automatically%20generated%20by%20SEBASTIAN%20PHOTOS%20-%20Download%20Manager%20platform.%0D%0A%0D%0A";
    let mailLink = "Link%20for%20renewal: "+host+path;
    let mailSpaceEnter = "%0D%0A";
    let mailFooter = "You%20just%20have%20to%20press%20send.%20The%20link%20will%20be%20renewed%20in%201-5%20working%20days.%0D%0AThank%20you%20for%20choosing%20me!";
    let fullMail = mailProtocol+mailReceiver+mailSubject+mailBody+mailLink+mailSpaceEnter+mailSpaceEnter+mailFooter;
    window.open(fullMail, "_blank");
};

function back() {
    open("https://photos.sebastian.ghiveci.com", '_self').close();
};