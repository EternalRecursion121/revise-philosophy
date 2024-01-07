<script lang="ts">
    let selectedQuestionType = "";
    let selectedTopic = "";
    let selectedQuestion = "";
    let customQuestion = "";
    let isCustomQuestion = false;

    const topics = {
        "epistemology": {
            label: "Epistemology",
            questions: {
                "3-mark": [
                    "What is acquaintance knowledge?",
                    "What is philosophical scepticism?",
                    "What does Descartes mean by 'clear and distinct ideas'?",
                ],
                "5-mark": [
                    "Explain one way a direct realist could respond to the argument from hallucination.",
                    "Explain Locke's distinction between primary and secondary qualities.",
                    "Explain how reliablism responds to the Gettier problems."
                ],
                "12-mark": [
                    "Explain how Descartes argues that we can gain a priori knowledge through intuition and deduction.",
                    "Explain the tripartite view of knowledge and the objection that the conditions are not individually necessary.",
                    "Explain Berkeley's idealism and the objection that idealism leads to solipsism."
                ],
                "25-mark": [
                    "Question 10",
                    "Question 11",
                    "Question 12"
                ]
            }
        },
        "moral-philosophy": {
            label: "Moral Philosophy",
            questions: {
                "3-mark": [
                    "Question 13",
                    "Question 14",
                    "Question 15"
                ],
                "5-mark": [
                    "Question 16",
                    "Question 17",
                    "Question 18"
                ],
                "12-mark": [
                    "Question 19",
                    "Question 20",
                    "Question 21"
                ],
                "25-mark": [
                    "Question 22",
                    "Question 23",
                    "Question 24"
                ]
            }
        },
        "metaphysics-of-mind": {
            label: "Metaphysics of Mind",
            questions: {
                "3-mark": [
                    "Question 25",
                    "Question 26",
                    "Question 27"
                ],
                "5-mark": [
                    "Question 28",
                    "Question 29",
                    "Question 30"
                ],
                "12-mark": [
                    "Question 31",
                    "Question 32",
                    "Question 33"
                ],
                "25-mark": [
                    "Question 34",
                    "Question 35",
                    "Question 36"
                ]
            }
        },
        "metaphysics-of-god": {
            label: "Metaphysics of God",
            questions: {
                "3-mark": [
                    "Question 37",
                    "Question 38",
                    "Question 39"
                ],
                "5-mark": [
                    "Question 40",
                    "Question 41",
                    "Question 42"
                ],
                "12-mark": [
                    "Question 43",
                    "Question 44",
                    "Question 45"
                ],
                "25-mark": [
                    "Question 46",
                    "Question 47",
                    "Question 48"
                ]
            }
        }
    };

    $: isCustomQuestion = selectedQuestion === "custom";
</script>

<div class="m-5">
    <h1 class="text-3xl font-semibold text-slate-800">Experiment #1: Automated Exam Feedback</h1>
    <fieldset class="relative">
        <label for="questionType" class="font-semibold">Question Type:</label>
        <div class="relative block w-1/3">
            <select id="questionType" class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" bind:value={selectedQuestionType}>
                <option value="" disabled selected>Select question type</option>
                <option value="3-mark">3 mark</option>
                <option value="5-mark">5 mark</option>
                <option value="12-mark">12 mark</option>
                <option value="25-mark" disabled>25 mark (coming soon)</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        <label for="topic" class="font-semibold mt-4 block">Topic:</label>
        <div class="relative block w-1/3">
            <select id="topic" class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" bind:value={selectedTopic}>
                <option value="" disabled selected>Select topic</option>
                {#each Object.keys(topics) as topicKey}
                    <option value={topicKey}>{topics[topicKey].label}</option>
                {/each}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
    </fieldset>
    {#if selectedQuestionType && selectedTopic}
        <fieldset class="relative mt-4">
            <legend class="font-semibold">Choose a question:</legend>
            <label for="question">Question:</label>
            <div class="relative block w-1/3">
                <select id="question" class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" bind:value={selectedQuestion}>
                    <option value="" disabled selected>Select question</option>
                    {#each topics[selectedTopic].questions[selectedQuestionType] as question}
                        <option value={question}>{question}</option>
                    {/each}
                    <option value="custom">Input your own question</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            {#if isCustomQuestion}
                <label for="customQuestion">Custom Question:</label>
                <input type="text" id="customQuestion" class="block appearance-none w-1/3 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-4" bind:value={customQuestion} placeholder="Enter your question here" />
            {/if}
        </fieldset>
    {/if}
</div>