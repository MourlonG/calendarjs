new Vue({
    el: '#calendar',
    data: {
        days: [
            { name: 'Lundi' },
            { name: 'Mardi' },
            { name: 'Mercredi' },
            { name: 'Jeudi' },
            { name: 'Vendredi' },
            { name: 'Samedi' },
            { name: 'Dimanche' }
        ],
        dates: [
            { num: '01' },
            { num: '02' },
            { num: '03' },
            { num: '04' },
            { num: '05' },
            { num: '06' },
            { num: '07' },
            { num: '08' },
            { num: '09' },
            { num: '10' },
            { num: '11' },
            { num: '12' },
            { num: '13' },
            { num: '14' },
            { num: '15' },
            { num: '16' },
            { num: '17' },
            { num: '18' },
            { num: '19' },
            { num: '20' },
            { num: '21' },
            { num: '22' },
            { num: '23' },
            { num: '24' },
            { num: '25' },
            { num: '26' },
            { num: '27' },
            { num: '28' },
            { num: '29' },
            { num: '30' },
            { num: '31' }
        ],
        period: 'Novembre 2018',
        count: 0,
        items: [1, 2, 3]
    },
    methods: {
        prevPeriod: function() {
            console.log(this.period)
        },
        nextPeriod: function() {
            console.log(this.period)
        },
        newtr: function() {}
    }
})
