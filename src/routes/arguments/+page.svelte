<script lang="ts">
    import { writable } from 'svelte/store';
    import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc } from 'firebase/firestore';

    import ArgumentItem from '$lib/ArgumentItem.svelte';
    import type { Argument } from '$lib/types/argument';

    import { db } from '$lib/firebaseInit';
    import { userStore } from '$lib/userStore';

    // Store for holding arguments
    const argumentsStore = writable([]);

    // Load arguments from Firestore
    const argumentsCollection = collection(db, 'arguments');
    onSnapshot(argumentsCollection, (snapshot) => {
        const argumentsData = [];
        snapshot.forEach((doc) => {
            argumentsData.push({ id: doc.id, ...doc.data() });
        });
        argumentsStore.set(argumentsData);
    });

    // Variables for controlling the modal
    let isCreatingArgument = false;
    let newArgument = {
        name: '',
        author: '',
        topic: '',
        tags: '',
        content: ''
    };
    let detailModalOpen = false;
    let currentArgument:null|Argument = null;
    let editMode = false;
    let editedArgument = {};

    // Function to create a new argument in Firestore
    async function createArgument() {
        if ($userStore) {
            isCreatingArgument = true;
        } else {
            alert('You must sign in to create an argument.');
        }
    }

    async function saveArgument() {
        if (newArgument.name) {
            newArgument.tags = newArgument.tags.split(',').map(tag => tag.trim());
            await addDoc(argumentsCollection, { ...newArgument, responses: [], responses_to: [], created_at: new Date(), updated_at: new Date(), edit_history: [] });
            console.log('Created argument with name: ', newArgument.name);
            newArgument = {
                name: '',
                author: '',
                topic: '',
                tags: '',
                content: ''
            };
            isCreatingArgument = false;
        }
    }

    // Function to cancel creating a new argument
    function cancelArgument() {
        isCreatingArgument = false;
    }


    function handleDetail(event) {
        currentArgument = event.detail;
        console.log(currentArgument.tags)
        detailModalOpen = true;
    }

    function closeDetailModal() {
        detailModalOpen = false;
    }

    function toggleEditMode() {
        editMode = !editMode;
        if (editMode) {
            editedArgument = { ...currentArgument };
        }
    }

    function saveEditedArgument() {
        currentArgument = { ...editedArgument };
        editMode = false;
    }

</script>

<div class="flex flex-col items-center justify-center space-y-4 px-2">
    <h1 class="text-3xl my-6">Arguments</h1> 
    
     <table class="table-auto border-collapse w-full">
        <thead>
            <tr>
                <th class="border-b border-gray-200 text-left px-4 py-2 font-semibold">Name</th>
                <th class="border-b border-gray-200 text-left px-4 py-2 font-semibold">Author</th>
                <th class="border-b border-gray-200 text-left px-4 py-2 font-semibold">Topic</th>
            </tr>
        </thead>
        <tbody>
            {#each $argumentsStore as argument (argument.id)}
                <ArgumentItem {argument} on:detail={handleDetail} />
            {/each}
        </tbody>
    </table>

    <button class="py-2 px-4 bg-green-500 text-white rounded" on:click={createArgument}>
        Add new argument
    </button>

</div>

{#if detailModalOpen}
    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded shadow-lg w-1/2">
            {#if !editMode}
                <div class="text-2xl font-bold mb-4">{currentArgument.name}</div>
                <div class="mb-4">
                    <span class="font-semibold">Author:</span> {currentArgument.author}
                </div>
                <div class="mb-4">
                    <span class="font-semibold">Topic:</span> {currentArgument.topic}
                </div>
                <div class="mb-4">
                    <span class="font-semibold">Tags:</span> {#each currentArgument.tags as tag, index}{tag}{index === currentArgument.tags.length - 1 ? '' : ', '}{/each}
                </div>
                <div class="mb-4">
                    <span class="font-semibold">Content:</span>
                    <p>{currentArgument.content}</p>
                </div>
                <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2" on:click={toggleEditMode}>
                    Edit
                </button>
                <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded" on:click={closeDetailModal}>
                    Close
                </button>
            {:else}
                <div class="mb-4">
                    <label class="block mb-1 font-semibold text-gray-700" for="edit-name">Name:</label>
                    <input class="w-full px-3 py-2 border border-gray-300 rounded" id="edit-name" type="text" bind:value={editedArgument.name} />
                </div>
                <div class="mb-4">
                    <label class="block mb-1 font-semibold text-gray-700" for="edit-author">Author:</label>
                    <input class="w-full px-3 py-2 border border-gray-300 rounded" id="edit-author" type="text" bind:value={editedArgument.author} />
                </div>
                <div class="mb-4">
                    <label class="block mb-1 font-semibold text-gray-700" for="edit-topic">Topic:</label>
                    <input class="w-full px-3 py-2 border border-gray-300 rounded" id="edit-topic" type="text" bind:value={editedArgument.topic} />
                </div>
                <div class="mb-4">
                    <label class="block mb-1 font-semibold text-gray-700" for="edit-tags">Tags:</label>
                    <input class="w-full px-3 py-2 border border-gray-300 rounded" id="edit-tags" type="text" value="{editedArgument.tags.join(', ')}" on:input={(e) => editedArgument.tags = e.target.value.split(',').map(t => t.trim())} />
                </div>
                <div class="mb-4">
                    <label class="block mb-1 font-semibold text-gray-700" for="edit-content">Content:</label>
                    <textarea class="w-full px-3 py-2 border border-gray-300 rounded whitespace-pre-wrap" id="edit-content" rows="5" bind:value={editedArgument.content}></textarea>
                </div>
                 <div class="flex justify-end">
                    <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2" on:click={toggleEditMode}>
                        Cancel
                    </button>
                    <button class="px-4 py-2 bg-green-500 text-white rounded" on:click={saveEditedArgument}>
                        Save
                    </button>
                </div>
            {/if}
        </div>
    </div>
{/if}

{#if isCreatingArgument}
    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded shadow-lg w-1/2">
            <label class="block mb-2 font-bold text-gray-700" for="argument-name">
                Enter argument name:
            </label>
            <input
                class="block w-full border-gray-300 rounded shadow-sm py-2 px-3 mb-2"
                type="text"
                id="argument-name"
                bind:value={newArgument.name}
            />

            <!-- Add the other fields here -->
            <label class="block mb-2 font-bold text-gray-700" for="argument-author">
                Enter author:
            </label>
            <input
                class="block w-full border-gray-300 rounded shadow-sm py-2 px-3 mb-2"
                type="text"
                id="argument-author"
                bind:value={newArgument.author}
            />

            <label class="block mb-2 font-bold text-gray-700" for="argument-topic">
                Enter topic:
            </label>
            <input
                class="block w-full border-gray-300 rounded shadow-sm py-2 px-3 mb-2"
                type="text"
                id="argument-topic"
                bind:value={newArgument.topic}
            />

            <label class="block mb-2 font-bold text-gray-700" for="argument-tags">
                Enter tags (comma separated):
            </label>
            <input
                class="block w-full border-gray-300 rounded shadow-sm py-2 px-3 mb-2"
                type="text"
                id="argument-tags"
                bind:value={newArgument.tags}
            />

            <label class="block mb-2 font-bold text-gray-700" for="argument-content">
                Enter argument content:
            </label>
            <textarea
                class="block w-full border-gray-300 rounded shadow-sm py-2 px-3 mb-4 whitespace-pre-wrap"
                id="argument-content"
                bind:value={newArgument.content}
            ></textarea>
            <div class="flex justify-end">
                <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2" on:click={cancelArgument}>
                    Cancel
                </button>
                <button class="px-4 py-2 bg-green-500 text-white rounded" on:click={saveArgument}>
                    Save
                </button>
            </div>
        </div>
    </div>
{/if}