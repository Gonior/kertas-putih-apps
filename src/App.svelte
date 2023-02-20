<script>
// @ts-nocheck
import {requestPermission} from './firebase-messaging-sw'
let token = ""

const handleRequestPermission = () => {
  token = requestPermission()
}
</script>

<div class="flex h-screen items-center justify-center safe-top safe-left safe-right safe-bottom disable-scrollbars select-none">
  <button class="rounded-full px-2 py-1 bg-emerald-500 text-white font-bold" on:click={() => handleRequestPermission()}>Aktifkan</button>
  <p>token : {token}</p>
</div>
<style>

</style>
