<script>
    import Question from '$lib/components/Question.svelte';
    import Progress from '$lib/components/Progress.svelte';

    let questions = [
        ["What does it mean for God to be omniscient? (3 marks)", "3"],
        ["Explain the distinction between the views of God as timeless and of God as everlasting. (5 marks)", "5"],
        ["Explain the paradox of the stone (5 marks)", "5"],
        ["What is the Euthryphro dilemma? (5 marks)", "5"],
        ["Explain what is meant by God's omniscience and the objection that an omniscient God is incompatible with human free will. (12 marks)", "12"],
        ["Explain St Anselm's ontological argument and Gaunilo's perfect island objection (12 marks)", "12"],
        ["Explain Descartes' ontological argument and the objection that existence is not a predicate (12 marks)", "12"],
        ["Explain Normal Malcolm's ontological argument. (5 marks)", "5"],
        ["Explain Hume's design agument", "5"],
        ["Explain William Paley's design argument and Hume's objection to arguments from analogy (12 marks)", "12"]
    ]

    let currentQuestionIndex = 0;
    let totalQuestions = questions.length;
    let completedPercentage = Math.round((currentQuestionIndex / totalQuestions) * 100);
    let etr = estimatedTimeRemaining();

    function estimatedTimeRemaining() {
        let remainingQuestions = questions.slice(currentQuestionIndex);
        let timeLeft = remainingQuestions.reduce((acc, question) => acc + (parseInt(question[1]) * 1.5), 0);
        return `${Math.round(timeLeft / 60)} hours ${Math.round(timeLeft % 60)} minutes`;
    }

    function handleNextQuestion() {
        if (currentQuestionIndex < totalQuestions - 1) {
            currentQuestionIndex++;
            completedPercentage = (currentQuestionIndex / totalQuestions) * 100;
            etr = estimatedTimeRemaining();
        }
    }




</script>

<div class="container p-6">
    <Progress progress={completedPercentage} estimatedTimeRemaining={etr} />
    <h1 class="text-3xl font-bold mb-6">Metaphysics of God</h1>

    <Question question={questions[currentQuestionIndex][0]} question_type={questions[currentQuestionIndex][1]} on:nextQuestion={handleNextQuestion}/>
</div>