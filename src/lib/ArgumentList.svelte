<script lang="ts">
    import Argument from './Argument.svelte';
    export let _arguments: Object[];
</script>


<ul class="list-disc list-inside">
    {#each _arguments as argument}
        <Argument argument={argument} />
    {/each}
</ul>