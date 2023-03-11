<script>
    import img from "../assets/login-state.png"
    import {fade} from "svelte/transition"
</script>
<div class="flex flex-col p-4 h-full" in:fade={{duration : 300}}>
    <img src="{img}" alt="cover" class="object-contain mx-auto flex-1 w-2/3">
    <div class="mb-5">
        <h1 class="font-bold text-xl">Selamat Datang!</h1>
        <p class="text-xs text-gray-400 ">Silakan masukan username dan password yang sudah diberikan oleh admin!</p>
    </div>
    <form class="">
        <div class="mb-2">
            <div class="relative">
                <input class="shadow appearance-none border rounded-full w-full text-lg py-4 pr-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-400 absolute my-auto inset-y-0 left-2">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                </svg>              
            </div>
            
            <p class="text-red-500 text-xs italic h-5 pl-8"></p>
            
        </div>
        <div class="mb-2">
            <div class="relative">
                <input class="shadow appearance-none border rounded-full w-full text-lg py-4 pr-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="***********">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-400 absolute my-auto inset-y-0 left-2">
                    <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd" />
                </svg>                              
            </div>
            <p class="text-red-500 text-xs italic h-5 pl-8"></p>
            <div class="flex items-center ml-2">
                <input id="green-checkbox" type="checkbox" value="" class="w-4 h-4 accent-emerald-500 bg-gray-100 border-gray-300 rounded transform active:scale-90 duration-100 ease-in-out">
                <label for="green-checkbox" class="ml-2 text-xs ">Simpan username & password</label>
            </div>
        </div>
        <div class="flex items-center flex-col mt-10 space-y-2">
            <button class="transform active:scale-95 duration-150 ease-in-out text-sm inline-flex items-center justify-center bg-emerald-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="button">
                Login
            </button>
        </div>
    </form>
    <p class="text-center text-gray-500 text-xs mt-10">
        &copy;2023 CV. Sangkan Hurip | All rights reserved.
    </p>
</div>

    
