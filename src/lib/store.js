const countNumber = (num, t) => {
    let nums = []
    for (let i = 1; i <= num; i++) {
        nums.push({d : i, t})
    }
    return nums
}
const countPrevNumber = (total, to , t) => {
    let nums = []
    for (let i = total; i > total - to; i--) {
        nums.push({d : i, t})
    }
    return nums.sort()
}
export const urlParams = new URLSearchParams(window.location.search);

export const DAYS_LABEL = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']
export const MONTH_NAMES = ["Januari", "Februari", "Maret", "April", "Mei", "Juni","Juli", "Agustus", "September", "October", "Nopember", "Desember"];
export const getNameOfDay = (year, month, num) => {
    return new Date(`${year}-${month}-${num}`).toLocaleDateString("id-ID", {weekday : "long"})
}
export const daysInMonth = (month, year) => {
    
    let total = new Date(year, month+1, 0).getDate();
    let firstDay = getNameOfDay(year, month+1,1)
    let lastDay = getNameOfDay(year, month+1, total)
    let totalPrevDay
    if (month === 0) {
        totalPrevDay = new Date(year-1, 12, 0).getDate();
    } else totalPrevDay = new Date(year, month, 0).getDate();
    return {
        firstDay,
        totalDays : countNumber(total,"currentMonth"),
        prevGapDay : DAYS_LABEL.indexOf(firstDay) === 0 ? [] : countPrevNumber(totalPrevDay, DAYS_LABEL.indexOf(firstDay), "prev"),
        lastDay,
        nextGapDay : Math.abs(DAYS_LABEL.indexOf(firstDay) - 7) === 0 ? [] : countNumber(Math.abs(DAYS_LABEL.indexOf(lastDay) - 6), "nextMonth"),
    }
}

export const getCenterBoundingRect = (id) => {
    let el = document.getElementById(id)
    let cor = el.getBoundingClientRect()
    
    return (cor.left + cor.right) /2
}