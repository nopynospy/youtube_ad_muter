
function toggle_mute() {
    const videos = document.getElementsByTagName("video");
        for (let i = 0; i < videos.length; i++) {
            videos[i].muted = true;
        }
}

let observer = new MutationObserver(mutations => {
    for(let mutation of mutations) {
        if (mutation.target.nodeName === "DIV") {
           const element = <HTMLElement>mutation.target
           const classList = Array.from(element.classList)
           if (classList.includes('ytp-ad-text')) {
                // console.log("AD playing!!!!!!")
                toggle_mute()
           }
        }
     }
 });
 observer.observe(document, { childList: true, subtree: true });
