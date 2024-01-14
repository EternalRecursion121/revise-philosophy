<script>
    import { Progress } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    export let completedPercentage = 0; // e.g., 40 for 40%
    export let estimatedTimeRemaining = ''; // e.g., '2 hours'

    // Calculate width of progress bar based on completion
    $: progressBarWidth = `${completedPercentage}%`;

    let ssr = true;
    onMount(() => {
        ssr = false;
    });
</script>

<div class="fixed bottom-0 left-0 right-0 bg-white shadow-md p-3">
    <div class="flex items-center justify-between">
        <div class="text-sm text-gray-600">
        Estimated Time Remaining: {estimatedTimeRemaining}
        </div>
        {#if !ssr}
            <Progress 
            value={completedPercentage} 
            label={`${completedPercentage}% Complete`}
            color="blue"
            />
        {/if}
    </div>
</div>
