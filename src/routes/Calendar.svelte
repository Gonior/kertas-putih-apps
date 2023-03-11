<script>
    import { onMount } from 'svelte';
    import {DAYS_LABEL, MONTH_NAMES, daysInMonth, getNameOfDay} from '../lib/store'


    let date = new Date()
    let today = date
    let days = []

    //month in machine
    const setCalendar = (d) => {
        let daysInM = daysInMonth(d.getMonth(),d.getFullYear())
        days = daysInM.prevGapDay.length !== 0 ? [...daysInM.prevGapDay] : []
        days = [...days, ...daysInM.totalDays]
        days = daysInM.nextGapDay.length !== 0 ? [...days, ...daysInM.nextGapDay] : [...days]
        
    }
    onMount(() => {
        setCalendar(date)
    })
    const changeMonth = (str) => {
        if (str === "next") {
            if (date.getMonth() === 11) date = new Date(date.getFullYear() + 1, 0, 1);
            else date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        } else {
            if (date.getMonth() === 0) date = new Date(date.getFullYear() - 1, 11, 1);
            else date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        }
        setCalendar(date)
    }

    const detectToday = (d) => {
        return today.toLocaleDateString() === `${date.getMonth()+1}/${d.d}/${date.getFullYear()}`
    }

    const checkReserv = (d) => {
        
        return `${date.getMonth()+1}/${d.d}/${date.getFullYear()}` === '2/25/2023' //tanggal reservasi
    }
</script>


<div class="w-full bg-white rounded-lg p-4 ease-in-out">
    <div class="flex justify-between items-center">
        <h1 class="text font-semibold">{MONTH_NAMES[date.getMonth()]} {date.getFullYear()}</h1>
        <div class="flex space-x-1 px-2 py-1 rounded-full bg-gray-100 items-center">
            <button class="transform active:scale-90 duration-100 ease-in-out" on:click={() => changeMonth("prev")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>  
            <button class="transform active:scale-90 duration-100 ease-in-out" on:click={() => changeMonth("next")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>  
            </button>
        </div>
    </div>
    <div class="grid grid-cols-7 gap-1 mt-3">
        {#each DAYS_LABEL as label}
            <div class="text-xs capitalize font-bold text-center p-1 {label === 'Minggu' ? 'text-red-600' : 'text-black'}">{label.slice(0,3)}</div>
        {/each}
    </div>
    <div class="grid grid-cols-7 gap-2 mt-3 transition-height duration-700 delay-1000">
        {#each days as d}
            <div class="inline-flex py-2 justify-center items-center {detectToday(d) ? 'bg-emerald-50' : ""}">
                <span 
                class=
                    "{checkReserv(d) ? 'bg-pink-300' : ''} rounded-full h-6 w-6 text-xs font-semibold inline-flex justify-center items-center
                    {d.t !== 'currentMonth' ? 'text-gray-500' : getNameOfDay(date.getFullYear(),date.getMonth()+1,d.d) === "Minggu" ? 'text-red-600': 'text-black'} ">
                    {d.d}
                </span>
            </div>
        {/each}
    </div>
</div>