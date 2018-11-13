new Vue({
    el: '#calendar-vue',
    data: {
        title: 'Titre Cal',
        count: 0,
        items: [1, 2, 3]
    },
    computed: {
        computedVar: vm => vm.title + 'test'
    },
    methods: {
        handleClick: function() {
            this.count++
        }
    }
})

{
    const el = document.querySelector('#calendar')

    const numDays = 7
    const startDate = new Date()
    const days = []
    const dateAt = (date, i) =>
        new Date(
            new Date(startDate).setDate(
                startDate.getDate() + numDays - 1 + i
            )
        )
    for (let i = 0; i < numDays; i++) {
        days.push(dateAt(startDate, i))
    }
    console.log(days)

    el.innerHTML = `
        <h1>Calendar</h1>
        <ol class="rixo-calendar">
            ${
                days.map(day => `
                    <li class="day">${day}</li>
                `).join('')
            }
        </ol>
    `
}
