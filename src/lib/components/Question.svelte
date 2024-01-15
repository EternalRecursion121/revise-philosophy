<script>
  // Import necessary Flowbite components
  import { Alert, Textarea, Button, Spinner } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';

  export let question = '';
  export let question_type;
  let answer = '';
  let feedback = '';
  let showFeedback = false;
  let isLoading = false;
  let isError = false;
  const dispatch = createEventDispatcher();

  async function handleSubmit() {
    if (!showFeedback) {
      isLoading = true;
      feedback = await getFeedbackFromAPI(answer);
      isLoading = false;
      showFeedback = true;
    }
  }

  async function getFeedbackFromAPI(userAnswer) {
    try {
      const response = await fetch('https://3a09-51-182-252-33.ngrok-free.app/philosophy/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: question,
        question_type: question_type,
         answer: userAnswer
      })
    });
    // const thread_id = await response.json();
    // console.log(thread_id);

    // let currentStatus = "processing";
    // let data;
    // while (currentStatus == "processing") {
    //   const response = await fetch(`https://3a09-51-182-252-33.ngrok-free.app/philosophy/feedback/${thread_id}`);
    //   data = await response.json();
    //   currentStatus = data.status;
    //   if (currentStatus == "processing") {
    //     await new Promise(resolve => setTimeout(resolve, 2000));
    //   }
    // }
    // console.log(data);

    const feedback = (await response.json()).replace(/\【.*?\】/g);
    return feedback;
      
    } catch (error) {
      isError = true;
      return error;
      
    }
    
  }

  // async function getFeedbackFromAPI(userAnswer) {
  //   // Simulate an API call
  //   await new Promise(resolve => setTimeout(resolve, 3000));
  //   return `Feedback for your answer: ${userAnswer}`;
  // }

  function handleSkip() {
    if (isLoading) return;
    showFeedback = false;
    isError = false;
    answer = '';
    feedback = '';
    // Emit an event for the next question
    dispatch('nextQuestion');
  }
</script>

<h2 class="text-2xl font-bold mb-3">{question}</h2>

<Textarea 
  class="focus:ring-blue-500 focus:border-blue-500"
  placeholder="Type your answer here..." 
  bind:value={answer} 
  rows="4" 
/>

<Button color="blue" size="md" gradientDarker="true" on:click={handleSubmit}>
  Submit Answer
</Button>

<Button color={showFeedback ? 'green' : 'alternative'} class="my-2 ml-1" size="md" on:click={handleSkip}>
  {showFeedback ? 'Next Question' : 'Skip Question'}
</Button>

{#if isLoading}
  <Spinner color="blue" />
  <Alert color="orange">
    <span>Generating feedback... (Should take around 30s)</span>
  </Alert>
{/if}

{#if isError}
  <Alert color="red">
    <span>Something went wrong. Sorry about that</span>
    <br>
    <span>Error: {feedback}</span>
  </Alert>
{/if}

{#if showFeedback && !isError}
  <Alert color="blue" on:dismiss={() => {showFeedback = false;}}>
    <span>{feedback}</span>
  </Alert>
{/if}
