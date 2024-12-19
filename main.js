const resultContent = document.getElementById('result');

const States = new Set([ // Use a Set for efficient lookups
    "al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga",
    "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", "md",
    "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj",
    "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc",
    "sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy",
    "on", "nu", "yt", "qc", "ns", "nl", "nt", "ab", "nb", "sk", 
    "mb", "bc", "pe"
]);

const threeLetters = new Set([ // Use a Set for efficient lookups
    "usa", "llc"
]);

function clear1(){
    const test = "";
    const result = "";
    resultContent.innerHTML = test;
    document.getElementById("words").value = test;
}

function titleCase(){
    const str = document.getElementById("words").value;
    const words = str.toLowerCase().split(" ");
   
    const titleCasedWords = words.map(word => {
        if (States.has(word) && word.length === 2) { //Check for length to avoid accidental upper case
            //console.log(word)
            return word.toUpperCase();
        } else if (threeLetters.has(word) && word.length === 3) {
            //console.log(word)
            return word.toUpperCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    
    result = titleCasedWords.join(" ").replace(/\s+(?=[,])/g, "");

    resultContent.innerHTML = result;
};

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
        
    } else {
        // Fallback for older browsers (see method 2 below)
        return fallbackCopyToClipboard(text);
    }
}

document.getElementById("copy_result").addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        alert(`Result Copied: ${text}`);
    } catch (err) {
        console.error('Failed to read clipboard: ', err);
        alert("Failed to read clipboard");
    }    
});