<script lang="ts">
    import type { Argument } from '$lib/types/argument';

    export let argument: Argument;
</script>

<li>
    {#if argument.responses.length > 0}
    <span class="arrow" ></span>
        <ul class="list-disc list-inside hidden">
            {#each argument.responses as response}
                <Argument argument={response} />
            {/each}
        </ul>
    {:else}
        <span class="box" ></span>
    {/if}
    {argument.name}
</li>


<style lang="postcss">
    .arrow::before {
        content: "▶";
        color: black;
        display: inline-block;
        margin-right: 6px;
    }

    .arrow-down::before {
        @apply rotate-90;
    }

    .box::before {
        content: "■";
        color: black;
        display: inline-block;
        margin-right: 6px;
    }
</style>

