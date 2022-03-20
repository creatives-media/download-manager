// Link Identifier
let protocol = window.location.protocol;
let host = window.location.host;
let path = window.location.pathname;
let query = window.location.search;
let fullPath = protocol+host+path+query;

window.onload = function downloadProcess() {
    // Main text
    let infoDl = document.getElementById("infoDl");
    let thanks = document.getElementById("thanks");

    // Animation
    let svg = document.getElementById("svg");

    // Buttons
    let btns = document.getElementById("btns");
    let renewBtn = document.getElementById("renew");
    let backBtn = document.getElementById("back");

    // Path Report
    console.log(fullPath);

    // Timinng
    let mlsecond = 1000;
    let dlFeedback = 3;
    let timingInterval = 1;

    btns.style.display = "none";

    // For OneDrive
    if (query.includes('t=1drv')) {
        let oneDrvDlString = 'https://api.onedrive.com/v1.0/shares/u!';
        let dlId = path.split("/").pop();
        console.log(dlId);
        let oneDrvDlAfterString = '/root/content';

        // Download Process
        setTimeout (function finalDownload() {
            location.href = oneDrvDlString+dlId+oneDrvDlAfterString;
            setTimeout (function changeInfo() {
                infoDl.innerHTML = "DOWNLOAD HAS STARTED ✔️";
                console.log('Download successfully started from ' + oneDrvDlString+dlId+oneDrvDlAfterString);
                setTimeout (function closeWindow1() {
                    infoDl.innerHTML = "THIS WINDOW SHOULD CLOSE IN";
                    thanks.innerHTML = "5";
                    setTimeout (function closeWindow2() {
                        thanks.innerHTML = "4";
                        setTimeout (function closeWindow3() {
                            thanks.innerHTML = "3";
                            setTimeout (function closeWindow4() {
                                thanks.innerHTML = "2";
                                setTimeout (function closeWindow5() {
                                    thanks.innerHTML = "1";
                                    setTimeout (function closeWindow6() {
                                        window.open('','_self').close()
                                        thanks.innerHTML = "If the window didn't close, please do it manually.";
                                    }, mlsecond*timingInterval);
                                }, mlsecond*timingInterval);
                            }, mlsecond*timingInterval);
                        }, mlsecond*timingInterval);
                    }, mlsecond*timingInterval);
                }, mlsecond*dlFeedback);
            }, mlsecond*dlFeedback);
        }, mlsecond*timingInterval)
    }
    // For Direct Links
    else if (query.includes('t=direct')) {
        let dlId = path.split("/").pop();
        console.log(dlId);
        let decodedId = atob(dlId);
        console.log(decodedId);

        // Download Process
        setTimeout (function finalDownload() {
            location.href = 'https://'+decodedId;
            setTimeout (function changeInfo() {
                infoDl.innerHTML = "DOWNLOAD HAS STARTED ✔️";
                console.log('Download successfully started from https://'+decodedId);
                setTimeout (function closeWindow1() {
                    infoDl.innerHTML = "THIS WINDOW SHOULD CLOSE IN";
                    thanks.innerHTML = "5";
                    setTimeout (function closeWindow2() {
                        thanks.innerHTML = "4";
                        setTimeout (function closeWindow3() {
                            thanks.innerHTML = "3";
                            setTimeout (function closeWindow4() {
                                thanks.innerHTML = "2";
                                setTimeout (function closeWindow5() {
                                    thanks.innerHTML = "1";
                                    setTimeout (function closeWindow6() {
                                        window.open('','_self').close()
                                        thanks.innerHTML = "If the window didn't close, please do it manually.";
                                    }, mlsecond*timingInterval);
                                }, mlsecond*timingInterval);
                            }, mlsecond*timingInterval);
                        }, mlsecond*timingInterval);
                    }, mlsecond*timingInterval);
                }, mlsecond*dlFeedback);
            }, mlsecond*dlFeedback);
        }, mlsecond*timingInterval)
    }
    // For Expired Links
    else if (query.includes('t=expired')) {
        svg.style.display = "none";
        btns.style.display = "block";
        infoDl.innerHTML = "THIS DOWNLOAD HAS EXPIRED";
        thanks.innerHTML = "❌";
    }
    // For the Demo
    else if (query.includes('t=demo')) {
        svg.style.display = "none";
        btns.style.display = "block";
        infoDl.innerHTML = "THIS DOWNLOAD HAS EXPIRED";
        thanks.innerHTML = "❌";
        renewBtn.onclick = function () {
            infoDl.style.color = "#FF8E36";
            infoDl.innerHTML = "THIS WAS JUST A DEMO.";
            thanks.innerHTML = "You should have a real profile to make this work.";
            renewBtn.innerHTML = "Get Your Profile Here"
            backBtn.style.display = "none";
            renewBtn.onclick = function () {
                location.href = "https://p.ghiveci.com/pricing";
            };
        };
    }
    // For Temporary Files
    else if (query.includes('t=temp')) {
        svg.style.display = "none";
        btns.style.display = "block";
        infoDl.innerHTML = "THIS DOWNLOAD IS UNAVAILABLE";
        thanks.innerHTML = "This was just a temporary file.";
        renewBtn.style.cursor = "not-allowed";
        renewBtn.onclick = function () {
            infoDl.style.color = "#FF8E36";
            infoDl.innerHTML = "TEMPORARY FILES CAN'T BE RENEWED.";
        };
    }
    // For link alterations
    else {
        location.href = 'https://cm.ghiveci.com/src/N8fh'
    }
};

function renew() {
    // Path Report
    console.log(fullPath);
    // Extracting the path without the origin
    let sourceExtractor = fullPath.split('&');
    console.log(sourceExtractor);
    let basePath = sourceExtractor[0].split(':');
    console.log(basePath);
    let contentID = basePath[1].split('/').pop().split('?')[0];
    console.log(contentID);
    // Email Creation
    let mailProtocol = "mailto:";
    let mailReceiver = "photos@sebastian.ghiveci.com";
    let mailSubject = "?subject=RENEW%20-%20Download%20Link&";
    let mailBody = "body=This%20Email%20was%20automatically%20generated%20by%20SG CREATIVES%20MEDIA%20-%20Download%20Manager.%0D%0A%0D%0A";
    let mailLink = "Content ID: "+contentID;
    let mailSpaceEnter = "%0D%0A";
    let mailFooter = "You%20just%20have%20to%20press%20send.%20The%20content%20should%20be%20renewed%20in%201-5%20working%20days.%0D%0AThank%20you%20for%20choosing%20me!";
    let fullMail = mailProtocol+mailReceiver+mailSubject+mailBody+mailLink+mailSpaceEnter+mailSpaceEnter+mailFooter;
    window.open(fullMail, "_blank");
    console.log(fullMail);
};

function back() {
    // Path Report
    console.log(fullPath);
    // Extracting the origin of the download request
    let sourceExtractor = fullPath.split('&').pop();
    console.log(sourceExtractor);
    let source = sourceExtractor.split('=').pop();
    console.log(source);

    if (source === 'public.creatives-media.ghiveci.com') {
        window.open('https://'+source,'_self').close();
        console.log('Returned to SG CREATIVES MEDIA Public');
    }
    else if (source === 'photos.sebastian.ghiveci.com') {
        window.open('https://'+source,'_self').close();
        console.log('Returned to SEBASTIAN PHOTOS');
    }
    else if (source === 'my-space.creatives-media.ghiveci.com') {
        window.open('https://'+source,'_self').close();
        console.log('Returned to MY SPACE');
    }
    else if (source === 'rush.sebastian.ghiveci.com') {
        window.open('https://'+source,'_self').close();
        console.log('Returned to SEBASTIAN RUSH');
    }
    else {
        window.open('https://'+'cm.ghiveci.com/src/N8fh','_self').close();
        console.log('The source is invalid and so the button has redireccted to the fallback option.');
    }
};