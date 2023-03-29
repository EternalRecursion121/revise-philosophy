<script lang="ts">
  import { onMount } from 'svelte';
  import { handleSignIn } from '$lib/firebaseAuth';

  onMount(() => {
    handleSignIn();
  });
</script>

<main>
  <h1>Signing in...</h1>
  <p>Please wait while we redirect you to the sign-in page.</p>
</main>
