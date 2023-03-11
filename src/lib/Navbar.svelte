<!--Navbar.svelte-->
<nav class="p-2">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div>
            <a href="/" class="text-xl font-bold text-gray-800 uppercase md:text-2xl">Revise Philosophy</a>
        </div>
        <div class="flex">
            <ul class="flex p-4 space-x-5">
                <li><a href="/arguments">Arguments</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <!--Search-->
            <div class="flex p-2">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Search...">
                </div>
            </div>
        </div>
    </div>
    <hr class="border-gray-300">
</nav>