
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
        if (mutation.target.nodeName === "BUTTON") {
            const element = <HTMLElement>mutation.target
            const classList = Array.from(element.classList)
            if (classList.includes('ytp-skip-ad-button')) {
                console.log("Skip ad button found")
                let divElement = document.getElementsByClassName("ytp-skip-ad-button")[0];
                console.log(divElement)
                divElement.addEventListener("click", function() {
                    toggle_mute(false)
                  });
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
