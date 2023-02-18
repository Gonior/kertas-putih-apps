<script>
// @ts-nocheck
import {requestPermission} from './firebase-messaging-sw'

</script>

<div class="flex h-screen bg-red-500 items-center justify-center safe-top safe-left safe-right safe-bottom disable-scrollbars select-none">
  <button class="rounded-full px-2 py-1 bg-emerald-500 text-white font-bold" on:click={() => requestPermission()}>Aktifkan</button>
  
</div>
<style>

</style>
