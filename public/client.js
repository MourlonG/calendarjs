{
  Vue.component('todo-item', {
    props: ['item'],
    template: `
      <li class="item"><h3>{{ item.title }}</h3></li>
    `,
  })

  const vm = new Vue({
    el: '#app',
    created: function() {
      const vm = this
      // fetch('/movies')
      //   .then(function(response) {
      //     return response.json()
      //   })
      //   .then((myJson) => {
      //     this
      //     vm.title
      //     console.log(JSON.stringify(myJson));
      //   })

      const data = {item: 1}
      fetch('/movies', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        credentials: 'omit',
        body: JSON.stringify(data),
      })
    },
    data: {
      items: [{
        title: "#0",
      }],
      title: 'Titre Calend.',
    },
    computed: {
      count: function() {
        return this.items.length
      },
    },
    methods: {
      add: function() {
        const index = this.items.length
        console.trace()
        this.items.push({
          title: "#" + (index + 1),
        })
      },
    },
  })
}
