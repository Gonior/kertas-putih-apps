<script>
    import Calendar from "./Calendar.svelte";
    import CardReservation from "../components/CardReservation.svelte";
</script>
<div class="flex-1 flex flex-col p-2 relative pb-10">
    
    <div class="flex-1 flex-col">
        <div class="px-4">
            <div class="items-center text-gray-400 space-x-1">
                <h2 class="uppercase text-xs my-2 font-semibold">Kalender</h2>
            </div>
            <Calendar />
        </div>
        <div class="inline-flex items-center text-gray-400 px-4 space-x-1">
            <h2 class="uppercase text-xs my-2 font-semibold">Rekap Bulan ini</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        </div>
        <div class="flex space-x-2 px-4">
            <div class="flex-1 p-4 rounded-lg bg-white">
                <h1 class="text-xs font-semibold">Total Pesanan Bulan Ini</h1>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">20</span>
                    <span class="rounded-full px-2 text-xs bg-emerald-50 text-emerald-400 font-semibold">+20%</span>
                </div>
            </div>
            <div class="flex-1 p-4 rounded-lg bg-white">
                <h1 class="text-xs font-semibold">Jumlah Pelanggan Bulan Ini</h1>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">120</span>
                    <span class="rounded-full px-2 text-xs bg-red-50 text-red-400 font-semibold">-70%</span>
                </div>
            </div>
        </div>
        
        <div class="px-4 my-4 flex flex-col">
            <div class="items-center text-gray-400 space-x-1">
                <h2 class="uppercase text-xs my-2 font-semibold">Pesanan yang akan datang</h2>
            </div>
            
            <div class="inline-flex space-x-2">
                <button class="no-tap-highlighting duration-150 ease-in-out transform active:scale-90 px-2 py-1 rounded-full text-white text-xs bg-emerald-500 font-bold">Hari ini</button>
                <button class="no-tap-highlighting duration-150 ease-in-out transform active:scale-90 px-2 py-1 rounded-full text-xs bg-white ">Besok</button>
                <button class="no-tap-highlighting duration-150 ease-in-out transform active:scale-90 px-2 py-1 rounded-full text-xs bg-white ">Dalam 2 Hari</button>
            </div>
            
            <div class="flex py-2 overflow-y-auto disable-scrollbars w-full snap-x scroll-smooth">
                <CardReservation />
                <CardReservation />
                <CardReservation />
                <div class="rounded-lg flex-1 w-1/2 p-3 mx-0.5 snap-center flex justify-center items-center flex-col">
                    <button class="transform active:scale-90 duration-150 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-emerald-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <span class="text-xs min-w-max font-semibold ">6 lainnya</span>
                </div>
            </div>
        </div>
        <div class="px-4">
            <div class="inline-flex items-center text-gray-400 space-x-1">
                <h2 class="uppercase text-xs my-2 font-semibold">Aktivitas terbaru</h2>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="rounded-lg bg-white shadow p-3 flex items-start">
                    <img src="https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" class="object-cover rounded-full h-12 w-12 mr-1" alt="aa">
                    <div class="flex flex-col">
                        <div class="inline-flex space-x-1 justify-between">
                            <h3 class="font-bold">Admin</h3>
                            <span class="text-gray-500">baru saja</span>
                        </div>
                        <span>Telah merubah data reservasi atas nama "PT. Geodiva Ciwidey"</span>
                    </div>
                </div>
                <div class="rounded-lg bg-white shadow p-3 flex items-start">
                    <img src="https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" class="object-cover rounded-full h-12 w-12 mr-1" alt="aa">
                    <div class="flex flex-col">
                        <div class="inline-flex space-x-1 justify-between">
                            <h3 class="font-bold">Admin</h3>
                            <span class="text-gray-500">1 Jam</span>
                        </div>
                        <span>Telah merubah data reservasi atas nama "PT. Geodiva Ciwidey"</span>
                    </div>
                </div>
                <div class="rounded-lg bg-white shadow p-3 flex items-start">
                    <img src="https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" class="object-cover rounded-full h-12 w-12 mr-1" alt="aa">
                    <div class="flex flex-col">
                        <div class="inline-flex space-x-1 justify-between">
                            <h3 class="font-bold">Admin</h3>
                            <span class="text-gray-500">2 Jam</span>
                        </div>
                        <span>Telah menambahkan reservasi atas nama "PT. Geodiva Ciwidey"</span>
                    </div>
                </div>
            </div>
            <!-- <h1 class="text-center flex-1 absolute bottom-10 left-0 right-0 mx-auto text-gray-400">&copy 2023 CV. RM. Sangkan Hurip | all Right Reserved</h1> -->
        </div>
    </div>
</div>

<!-- https://play.tailwindcss.com/4u0b7kT78e?size=716x1120 -->