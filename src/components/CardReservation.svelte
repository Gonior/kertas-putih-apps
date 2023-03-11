<script>
    let openMenu = false
    let clientMenuHeight
    const hanldeOpenMenu = () => {
        openMenu = !openMenu
        
    }
</script>
<div class="bg-white rounded-lg flex-1 min-w-full p-3 mx-0.5 shadow-md snap-center ">
    <!-- Header -->
    <div class="mb-5 flex items-center justify-between border-l-4 border-emerald-400 px-3">
        <div class="flex-1 flex-col">
            <span class="text-xl font-bold">PT. Geodiva Ciwidey</span>
            <div class="flex w-max space-x-2">
                <div class="flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
                        />
                    </svg>
                    <span class="text-base font-bold">25</span>
                </div>
                <div class="flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    <span class="text-base font-bold">G2D - G5D + G4L</span>
                </div>
            </div>
        </div>
        <div class="">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6 text-gray-600"
            >
                <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
    </div>
    <div class="mb-3 flex items-center justify-between">
        <div class="flex flex-col">
            <h1 class="font-bold text-gray-500">Tanggal dan Waktu</h1>
            <h1 class="font-bold">kamis, 23 Mar 2023</h1>
        </div>
        <h1 class="text-4xl font-bold">12:00</h1>
    </div>
    <div class="mb-3 flex flex-col">
        <h1 class="font-bold text-gray-500">Down Payment (TF)</h1>
        <h1 class="font-bold">Rp 500.000</h1>
    </div>
    <div class="flex items-center justify-between">
        <div
            class="flex items-center space-x-1 rounded bg-gray-100 p-1 text-gray-600"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="h-5 w-5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
            </svg>

            <span class="font-bold">Menu : 30 item</span>
        </div>
        <button class="text-xs font-semibold transform active:scale-90 duration-150 ease-in-out text-emerald-500">
            Lihat selengkapnya
            
        </button>
    </div>
    <div bind:this={clientMenuHeight} class="px-4 {openMenu ? `h-[5000px]` : 'h-0'} overflow-hidden transition-height duration-150 ease-in-out">
        <table>
            <tr>
                <td class="text-left align-text-bottom font-bold">25</td>
                <td class="text-left font-bold"
                    >Paket 1
                    <div class="flex space-x-1 font-light">
                        <div>-</div>
                        <div>GDD2BDD23</div>
                    </div>
                    <div class="flex space-x-1 font-light">
                        <div>-</div>
                        <div>Liwet</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="text-left font-bold align-text-bottom">1</td>
                <td class="text-left font-bold"
                    >Paket 5
                    <div class="flex space-x-1 font-light">
                        <div>-</div>
                        <div>S. Asem</div>
                    </div>
                    <div class="flex space-x-1 font-light">
                        <div>-</div>
                        <div>TB</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="text-left font-bold align-text-bottom">3</td>
                <td class="text-left font-bold">Teh Manis Panas</td>
            </tr>
        </table>
    </div>
</div>
