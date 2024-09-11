//TODO: Write some funny scripts.

document.body.addEventListener("click", animateProgress)

function animateProgress() {
    let progressBar = document.getElementById("cool-progress-bar")
    if (document.getElementById("cool-progress-bar").value === 100) {
        document.getElementById("cool-progress-bar").value = 0
    }
    else {
        document.getElementById("cool-progress-bar").value = document.getElementById("cool-progress-bar").value + 1
    }
}