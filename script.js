document.addEventListener('DOMContentLoaded', () => {
    const num1Elem = document.getElementById('num1');
    const num2Elem = document.getElementById('num2');
    const answerElem = document.getElementById('answer');
    const submitBtn = document.getElementById('submit');
    const newQuestionBtn = document.getElementById('new-question');
    const notificationElem = document.getElementById('notification');

    let currentAnswer = 2;  // Inisial dengan soal awal (1 + 1)

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        num1Elem.textContent = num1;
        num2Elem.textContent = num2;
        currentAnswer = num1 + num2;
        answerElem.value = '';
        notificationElem.textContent = '';
    }

    submitBtn.addEventListener('click', () => {
        const userAnswer = parseInt(answerElem.value);
        if (userAnswer === currentAnswer) {
            notificationElem.textContent = 'Benar! 🎉';
            notificationElem.style.color = 'green';
            newQuestionBtn.disabled = false;
        } else {
            notificationElem.textContent = 'Salah, coba lagi!';
            notificationElem.style.color = 'red';
        }
    });

    newQuestionBtn.addEventListener('click', () => {
        generateQuestion();
        newQuestionBtn.disabled = true;
    });

    generateQuestion();
});
