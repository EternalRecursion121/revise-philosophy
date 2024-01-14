<script>
    import Question from '$lib/components/Question.svelte';
    import Progress from '$lib/components/Progress.svelte';
</script>

<div class="container mx-auto p-4">
    <Progress completedPercentage={40} estimatedTimeRemaining="2 hours" />
    <h1 class="text-3xl font-bold mb-6">Metaphysics of Mind</h1>

    <Question question="What is the mind-body problem?" />
</div>