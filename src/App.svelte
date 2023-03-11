<script>
// @ts-nocheck
import {requestPermission} from './lib/firebase-messaging-sw'
import Calendar from "./routes/Calendar.svelte"
import Login from "./routes/Login.svelte"
import Home from "./routes/Home.svelte"

import { routes } from './lib/routes';
import { getCenterBoundingRect } from './lib/store';
    import { onMount } from 'svelte';
let token = ""
onMount(() => {
  center = getCenterBoundingRect('btn-nav-1')
})
const handleRequestPermission = (a) => {
  token = a
}

let center = 0 
// validate url -> can be to exact reservation or 404
// call lib/controller later
// validate userlogin()

const handlePage= (id) => {
  center = getCenterBoundingRect(id)
  // console.log(center)
}
</script>

<div class="flex flex-col h-screen items-center safe-top safe-left safe-right safe-bottom select-none mx-auto max-w-lg">  
  <div class="h-full w-full flex flex-col justify-between">
    <div class="w-full flex justify-between px-4 py-2 space-x-2 items-center">
      <div class="flex-1">
          <div class="inline-flex items-center space-x-2 bg-white rounded-full w-full text-lg py-3 pl-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span class="text-xs text-gray-400 ">Cari reservasi</span>
          </div>
      </div>
      <button class="flex-0 text-emerald-400 transform active:scale-90 duration-150 ease-in-out relative h-min">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
          </svg>                    
          <div class="rounded-full h-2 w-2 border-white border bg-red-500 absolute -top-0.5 right-0.5"></div>
      </button>
    </div>
    <div class="flex-1 overflow-y-auto disable-scrollbars">
      <Home/>

    </div>
    <div class="flex flex-col">
      <!-- Add button -->
      <button class="inline-flex items-center justify-center no-tap-highlighting transfrom active:scale-90 duration-150 ease-in-out border-4 w-12 h-12 border-gray-100 absolute inset-x-0 bottom-10 mx-auto bg-emerald-500 rounded-full text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
          <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
      </button>
      <!-- End: Add button -->
      <div class="bg-white w-full inline-flex justify-around items-center py-4">
        <button id="btn-nav-1" on:click={() => handlePage('btn-nav-1')} class="no-tap-highlighting flex items-center flex-col text-emerald-500 transform active:scale-95 duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <span class="text-xs font-semibold">Beranda</span>
        </button>
        <button id="btn-nav-2" on:click={() => handlePage('btn-nav-2')} class="no-tap-highlighting flex items-center flex-col text-gray-500 transform active:scale-95 duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
          </svg>
          <span class="text-xs ">Kalender</span>
        </button>
        <button id="btn-nav-3" on:click={() => handlePage('btn-nav-3')} class="no-tap-highlighting flex items-center flex-col text-gray-500 transform active:scale-95 duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clip-rule="evenodd" />
          </svg>
          <span class="text-xs ">event</span>
        </button>
        <button id="btn-nav-4" on:click={() => handlePage('btn-nav-4')} class="no-tap-highlighting flex items-center flex-col text-gray-500 transform active:scale-95 duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
          </svg>
          <span class="text-xs ">Pengaturan</span>
        </button>
      </div>
      <div class="w-[25px] h-[4px] rounded-full bg-emerald-500 mt-1 absolute bottom-2 left-0 transform duration-300 ease-in-out" style="transform: translateX({Math.round(center-12)}px);"></div>
    </div>
    
    <!-- routes -->
      <!-- svelte-ignore missing-declaration -->
    <!-- <a href='/auth' use:link>auth</a>
    <a href='/calendar' use:link>calendar</a> -->
    <!-- <Login /> -->
    <!-- <div>
      
    </div> -->
    <!-- <button class="rounded-full w-1/2 hover:w-full transition-width duration-200 ease-in-out px-2 py-1 bg-emerald-500 text-white font-bold" on:click={() => requestPermission(handleRequestPermission)}>Aktifkan</button>
    <p class="text-center">token : <br/>{token}</p> -->

  </div>
</div>
<style scoped="global">
  
</style>
