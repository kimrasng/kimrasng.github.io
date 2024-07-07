const mainTextElement = document.querySelector('.main-text');
const textSequence = [
    "kimrasng",
    "larang",
    "kimdohyun",
    "me@kimrasng.me",
    "2008-12-23",
    "student developer"
];
const delay = 100;
const waitTime = 2000;

function typeText(text, delay) {
    return new Promise(resolve => {
        let index = 0;
        const interval = setInterval(() => {
            mainTextElement.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

function deleteText(delay) {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            mainTextElement.textContent = mainTextElement.textContent.slice(0, -1);
            if (mainTextElement.textContent === '') {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

async function runTypewriter() {
    while (true) {
        for (let i = 0; i < textSequence.length; i++) {
            await typeText(textSequence[i], delay);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            await deleteText(delay);
        }
    }
}

runTypewriter();
