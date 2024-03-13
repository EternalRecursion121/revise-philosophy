<script>
    import { Progressbar } from 'flowbite-svelte';
  
    export let progress = 0; // e.g., 40 for 40%
    export let estimatedTimeRemaining = ''; // e.g., '2 hours'
  </script>
  
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-md p-3">
    <div class="flex items-center justify-between">
      <!-- Left side: Progress Label -->
      <div class="flex-1">
        <div class="text-sm font-semibold">
          Course Progress: <span class="text-blue-700">{`${progress.toFixed(2)}% Complete`}</span>
        </div>
        <Progressbar 
          progress={progress.toFixed(1)}
          label={`${progress.toFixed(1)}% Complete`} 
          color="blue"
        />
      </div>
  
      <!-- Right side: Time Estimation -->
      <div class="ml-4 flex-shrink-0 text-sm text-gray-600 flex-col">
        <div class="text-sm font-semibold">
          Estimated Time Remaining:
        </div>
        <div class="text-sm text-center">
          {estimatedTimeRemaining}
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* Additional styling if needed */
  </style>
  