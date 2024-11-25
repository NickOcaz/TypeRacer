// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the textarea, dropdown, buttons, and results elements
    const textToCopy = document.getElementById('text-to-copy');
    const userInput = document.getElementById('user-input');
    const levelSelect = document.getElementById('level');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const retryButton = document.getElementById('retryButton');
    const levelResult = document.getElementById('level-result');
    const timeResult = document.getElementById('time-result');
    const wpmResult = document.getElementById('wpm-result');

    // Define texts for each difficulty level
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

    let startTime;
    let timerInterval;

    // Function to start the test
    function startTest() {
        // Clear previous results
        levelResult.textContent = 'Level: ';
        timeResult.textContent = 'Time: ';
        wpmResult.textContent = 'WPM: ';

        const selectedLevel = levelSelect.value.replace('level-', '');
        const randomText = texts[selectedLevel][Math.floor(Math.random() * texts[selectedLevel].length)];
        textToCopy.value = randomText;
        userInput.disabled = false;
        userInput.focus();
        startButton.disabled = true;
        stopButton.disabled = false;
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 1000);
    }

    // Function to update the timer display
    function updateTimer() {
        const currentTime = new Date().getTime();
        const timeElapsed = ((currentTime - startTime) / 1000).toFixed(2);
        timeResult.textContent = `Time: ${timeElapsed} seconds`;
    }

    // Function to stop the test
    function stopTest() {
        clearInterval(timerInterval);
        const endTime = new Date().getTime();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Convert milliseconds to seconds

        const sampleTextWords = textToCopy.value.split(' ');
        const userInputWords = userInput.value.split(' ');

        let correctWords = 0;
        for (let i = 0; i < userInputWords.length; i++) {
            if (userInputWords[i] === sampleTextWords[i]) {
                correctWords++;
            }
        }

        const wpm = Math.round((correctWords / (timeTaken / 60))); // Calculate WPM
        levelResult.textContent = `Level: ${levelSelect.options[levelSelect.selectedIndex].text}`;
        timeResult.textContent = `Time: ${timeTaken} seconds`;
        wpmResult.textContent = `WPM: ${wpm}`;
        userInput.disabled = true;
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    // Function to reset the test
    function resetTest() {
        clearInterval(timerInterval);
        textToCopy.value = '';
        userInput.value = '';
        userInput.disabled = true;
        levelResult.textContent = 'Level: ';
        timeResult.textContent = 'Time: ';
        wpmResult.textContent = 'WPM: ';
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    // Add event listener for difficulty selection
    levelSelect.addEventListener('change', () => {
        startButton.disabled = false;
        textToCopy.value = '';
        userInput.value = '';
        userInput.disabled = true;
        levelResult.textContent = 'Level: ';
        timeResult.textContent = 'Time: ';
        wpmResult.textContent = 'WPM: ';
    });

    // Add event listeners for start, stop, and retry buttons
    startButton.addEventListener('click', startTest);
    stopButton.addEventListener('click', stopTest);
    retryButton.addEventListener('click', resetTest);
});