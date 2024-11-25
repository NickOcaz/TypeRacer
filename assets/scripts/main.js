document.addEventListener('DOMContentLoaded', () => {
    const textToCopy = document.getElementById('text-to-copy');
    const levelSelect = document.getElementById('level');

    const texts = {
        easy: [
            "The quick brown fox jumps over the lazy dog.",
            "A journey of a thousand miles begins with a single step.",
            "To be or not to be, that is the question."
        ],
        medium: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "The only limit to our realization of tomorrow is our doubts of today.",
            "In the end, we will remember not the words of our enemies, but the silence of our friends."
        ],
        hard: [
            "Sphinx of black quartz, judge my vow.",
            "The five boxing wizards jump quickly.",
            "How razorback-jumping frogs can level six piqued gymnasts!"
        ]
    };

    levelSelect.addEventListener('change', () => {
        const selectedLevel = levelSelect.value.replace('level-', '');
        const randomText = texts[selectedLevel][Math.floor(Math.random() * texts[selectedLevel].length)];
        textToCopy.value = randomText;
    });
});