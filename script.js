function tweetMessage() {
    const message = "POPPER 365 Concept Photo \n#PopperBNK48 #2024_365NichinoKamihikoukiTH ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}  
