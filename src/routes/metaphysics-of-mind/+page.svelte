<script>
    import Question from '$lib/components/Question.svelte';
    import Progress from '$lib/components/Progress.svelte';

    let questions = [
        ["Outline what is meant by 'qualia'. (3 marks)", "3"],
        ["What are intentional properties? (3 marks)", "3"],
        ["Explain the distinction between substance dualism and property dualism. (5 marks)", "5"],
        ["Explain the concievability argument for substance dualism. (5 marks)", "5"],
        ["Explain the indivisibility argument for substance dualism and the objection that not everything thought of as physical is divisible. (12 marks)", "12"],
        ["Explain what is meant by philosophical zombies (3 marks)", "3"],
        ["Explain the 'knowledge/Mary' argument for property dualism and the objection that Mary gains new propositional knowledge, but this is knowledge of physical facts that she already knew in a different way(the ‘New Knowledge / Old Fact’ response). (12 marks)", "12"],
        ["Explain the problem of other minds and the response that the existence of other minds is the best hypothesis. (12 marks)", "12"],
        ["What is the conceptual problem of interaction? (5 marks)", "5"],
        ["Explain the objection that dualism makes a 'category mistake'. (5 marks)", "5"],
        ["Explain epiphenomenal dualism and the challenge posed by the phenomenolgy of our mental life. (12 marks)", "12"]
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
    <h1 class="text-3xl font-bold mb-6">Metaphysics of Mind</h1>

    <Question question={questions[currentQuestionIndex][0]} question_type={questions[currentQuestionIndex][1]} on:nextQuestion={handleNextQuestion}/>
</div>