/* About overlay open and close ============== */

function openAbout() {
    document.getElementById("about").style.display = "inline";
}
function closeAbout() {
    document.getElementById("about").style.display = "none";
}

/* Video overlay choice open and close ============== */

function openChoice() {
    document.getElementById("choice").style.display = "inline";
}
function closeChoice() {
    document.getElementById("choice").style.display = "none";
    document.getElementById("btn-change").style.display = "inline";
}


/* Video background change on selection ============== */

function changevid(buttonlink) {
    document.getElementById('videoChoice').src = buttonlink;
}
