document.addEventListener("DOMContentLoaded", (event) => {
    let count = 0;
    const loveButton = document.getElementById("butt-love")
    loveButton.addEventListener("click", function () { 
        count++
        const loveVote = document.getElementById("love-vote")
        loveVote.textContent = count
    })
});
