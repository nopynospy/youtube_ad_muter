
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            console.log("mutation")
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));

                // observer.disconnect();
            }
            
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
    });
}

let observer = new MutationObserver(mutations => {
    for(let mutation of mutations) {
        // console.log(mutation.target.nodeName)
        // console.log(mutation)
        if (mutation.target.nodeName === "DIV") {
            // console.log("DIV")
           const element = <HTMLElement>mutation.target
           const classList = Array.from(element.classList)
           console.log(classList)
           if (classList.includes('ytp-ad-text')) {
                console.log("AD playing!!!!!!")
           }
            // if (mutation.target === 'div#ad-text:d.ytp-ad-text') {

            // }
        }
        //  for(let addedNode of mutation.addedNodes) {
        //      if (addedNode.nodeName === "ytd-action-companion-ad-renderer") {
        //         console.log("AD")
        //         console.log(mutation)
        //         //  try{
        //         //     let chats_dom = document.querySelector("div[aria-label='Search results.']"); 
        //         //     chats_dom.setAttribute("style", "display: none;"); 
        //         //     chats_dom.setAttribute("style", "pointer-events: none;");  
                
        //         //  } catch(err) {
        //         //     console.log(err.message)
        //         //  }
        //       }
        //   }
     }
 });
 observer.observe(document, { childList: true, subtree: true });
