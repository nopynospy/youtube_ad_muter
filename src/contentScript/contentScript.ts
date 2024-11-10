
function toggle_mute(toggle=true) {
    const videos = document.getElementsByTagName("video");
        for (let i = 0; i < videos.length; i++) {
            videos[i].muted = toggle;
        }
}

let observer = new MutationObserver(mutations => {
    for(let mutation of mutations) {
        if (mutation.target.nodeName === "DIV") {
           const element = <HTMLElement>mutation.target
           const classList = Array.from(element.classList)
        //    console.log(classList)
           if (classList.includes('ad-created')) {
                toggle_mute()
           }
        }
        for (const el of mutation.removedNodes) {
            const element = <HTMLElement>mutation.target
            const classList = Array.from(element.classList)
            if (classList.includes('ad-created')) {
                toggle_mute(false)
            }
        }
     }
 });
 observer.observe(document, { childList: true, subtree: true });
