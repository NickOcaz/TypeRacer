const sentences = {
    'level-easy': [
        "The quick brown fox jumps over the lazy dog.",
        "Pack my box with five dozen liquor jugs.",
        "How razorback-jumping frogs can level six piqued gymnasts!"
    ],
    'level-medium': [
        "The five boxing wizards jump quickly.",
        "Bright vixens jump; dozy fowl quack.",
        "Jinxed wizards pluck ivy from the big quilt."
    ],
    'level-hard': [
        "Crazy Fredrick bought many very exquisite opal jewels.",
        "We promptly judged antique ivory buckles for the next prize.",
        "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent."
    ]
};

function getRandomSentence(levelId) {
    const levelSentences = sentences[levelId];
    const randomIndex = Math.floor(Math.random() * levelSentences.length);
    return levelSentences[randomIndex];
}

document.getElementById('level').addEventListener('change', function() {
    const levelId = this.value;
    if (levelId) {
        const randomSentence = getRandomSentence(levelId);
        document.getElementById('text-to-copy').value = randomSentence;
    }
});
