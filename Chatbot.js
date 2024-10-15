function simpleChatbot(questions, userInput) {
    const processedInput = userInput.toLowerCase().replace(/[^a-zA-Z\s]/g, "");

    let closestMatch = "";
    let bestScore = 0;

    questions.forEach(({ question, answer}) => {
        const processedQuestion = question.toLowerCase().replace(/[^a-zA-Z\s]/g, "");
        let score = 0;

        processedQuestion.split(" ").forEach(word => {
            if(processedInput.includes(word)) {
                score++;
            }
        });

        if(score > bestScore) {
            bestScore = score;
            closestMatch = answer;
        }

    });

    return closestMatch || "Sorry, I don't understand.";
}

const qnaPairs = [
    { question: "What is your name?", answer: "My name is Chatbot."},
    { question: "How can i help you?", answer: "I can assist you with your queries."},
    { question: "What is the weather today?", answer: "The weather is sunny."}

];

console.log(simpleChatbot(qnaPairs, "What's the weather like today?"))