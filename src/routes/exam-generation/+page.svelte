<script>
    import { Label, Select } from 'flowbite-svelte';

    let spec_points = [
        { name: '1.1 What is knowledge?', value: 1.1 },
        { name: '1.2 Perception as a Source of Knowledge', value: 1.2 },
        { name: '1.3 Reason as a Source of Knowledge', value: 1.3 },
        { name: '1.4 The Limits of Knowledge', value: 1.4 },
        { name: '2.1 Normative Ethical Theories', value: 2.1 },
        { name: '2.2 Applied Ethics', value: 2.2 },
        { name: '2.3 Meta-ethics', value: 2.3 },
        { name: "3.1 The Concept and Nature of 'God'", value: 3.1 },
        { name: '3.2 Arguments Relating to the Existence of God', value: 3.2 },
        { name: '3.3 Religious Language', value: 3.3 },
        { name: '4.1 What Do We Mean by ‘Mind’?', value: 4.1 },
        { name: '4.2 Dualist Theories', value: 4.2 },
        { name: '4.3 Physicalist Theories', value: 4.3 },
        { name: '4.4 Functionalism', value: 4.4 }
    ];

    let question_types = [
        { name: '3 marker', value: '3'},
        { name: '5 marker', value: '5'},
        { name: '12 marker', value: '12'},
        { name: '25 marker', value: '25'}
    ];

    let selectedSpecPoint = '';
    let selectedQuestionType = '';
    let generatedQuestions = [];

    async function generateQuestions() {
        const response = await fetch(`https://3a09-51-182-252-33.ngrok-free.app/philosophy/question/${selectedSpecPoint}/${selectedQuestionType}`);
        const data = await response.json();
        generatedQuestions = data.questions;
    }
</script>

<div class="flex flex-col mx-3 w-[500px]">
    <Label>
        Select a specification point
        <Select class="mt-2" items={spec_points} bind:value={selectedSpecPoint} />
    </Label>

    <Label>
        Select a question type
        <Select class="mt-2" items={question_types} bind:value={selectedQuestionType} />
    </Label>

    <button on:click={generateQuestions}>Generate Question</button>

    {#if generatedQuestions.length > 0}
        {#each generatedQuestions as generatedQuestion}
            <p>{generatedQuestion}</p>
        {/each}
    {/if}
</div>

