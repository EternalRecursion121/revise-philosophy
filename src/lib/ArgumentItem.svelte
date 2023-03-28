<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Argument } from '$lib/types/argument';

    export let argument: Argument;

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('detail', argument);
    }
</script>

<tr class="cursor-pointer hover:bg-gray-100" on:click={handleClick}>
    <td class="border-t border-gray-200 px-4 py-2 font-semibold">{argument.name}</td>
    <td class="border-t border-gray-200 px-4 py-2">{argument.author}</td>
    <td class="border-t border-gray-200 px-4 py-2">{argument.topic}</td>
</tr>

{#if argument.responses.length > 0}
    <tr>
        <td colspan="3" class="pl-8">
            <table class="w-full">
                {#each argument.responses as response (response.id)}
                    <ArgumentItem {response} />
                {/each}
            </table>
        </td>
    </tr>
{/if}
