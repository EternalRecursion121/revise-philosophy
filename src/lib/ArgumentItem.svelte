<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Argument } from '$lib/types/argument';

    export let argument: Argument;

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('detail', argument);
    }
</script>

<div class="border border-gray-200 rounded-lg p-4 mb-4 cursor-pointer" on:click={handleClick}>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-2 font-semibold">{argument.name}</div>
        <div class="col-span-2">{argument.author}</div>
        <div class="col-span-2">{argument.topic}</div>
    </div>
</div>

{#if argument.responses.length > 0}
    <div class="pl-8">
        {#each argument.responses as response (response.id)}
            <ArgumentItem {response} />
        {/each}
    </div>
{/if}

<style lang="postcss">
</style>
