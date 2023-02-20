<script>
// @ts-nocheck
import {requestPermission} from './firebase-messaging-sw'
let token = ""

const handleRequestPermission = (a) => {
  token = a
}
</script>

<div class="flex flex-col h-screen items-center justify-center safe-top safe-left safe-right safe-bottom disable-scrollbars">
  <button class="rounded-full px-2 py-1 bg-emerald-500 text-white font-bold" on:click={() => requestPermission(handleRequestPermission)}>Aktifkan</button>
  <p class="text-center">token : <br/>{token}</p>
</div>
<style>

</style>
