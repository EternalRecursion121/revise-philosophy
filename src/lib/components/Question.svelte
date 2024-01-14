<script>
    // Import necessary Flowbite components
    import { Alert, Textarea, Button } from 'flowbite-svelte';
  
    export let question = '';
    let answer = '';
    let feedback = '';
    let showFeedback = false;
  
    async function handleSubmit() {
      feedback = await getFeedbackFromAPI(answer);
      showFeedback = true;
    }
  
    async function getFeedbackFromAPI(userAnswer) {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return `Feedback for your answer: ${userAnswer}`;
    }
  </script>
  
  <div class="p-4">
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
  
    {#if showFeedback}
      <Alert color="blue" on:dismiss={() => showFeedback = false}>
        <span>{feedback}</span>
      </Alert>
    {/if}
  </div>
  