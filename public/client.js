{
  Vue.component('todo-item', {
    props: ['item'],
    template: `
      <li class="item"><h3>{{ item.title }}</h3></li>
    `,
  })

  const vm = new Vue({
    el: '#app',
    template: `
      <div class="rixo-todo-list">
        <h1>{{ title }}</h1>
        <form v-on:submit="add">
          <input type="text" v-model="formItem.text" />
          <button type="submit">Add TODO</button>
        </form>
        <h2>List 1</h2>
        <div v-if="loading">
          Loading...
        </div>
        <ol v-if="!loading" class="list">
          <li class="item" v-for="item in items">
            <button class="delete"
              v-on:click="deleteItem(item)">X</button>
            <h3>{{ item.text }}</h3>
          </li>
        </ol>
      </div>
      `,
    data: {
      loading: false,
      items: [],
      title: 'Titre Calend.',
      formItem: {
        text: '',
      },
    },
    created: function() {
      this.loading = true

      loadAllItems()
        .then(items => {
          this.items = items
        })
        .catch(err => {
          alert("Ooops")
        })
        .then(() => {
          this.loading = false
        })
    },
    computed: {
      count: function() {
        return this.items.length
      },
    },
    methods: {
      add: function(e) {
        e.preventDefault()
        const data = this.formItem
        addItem(data)
          .then((item) => {
            // TODO
            // return this.reload()
            this.items = [...this.items, item]
          })
          .catch(err => alert('Ooops'))
      },
      deleteItem: function(item) {
        const id = item.id

        const index = this.items.findIndex(it => it.id === id)

        removeItem(id)
        .then(() => {})
        .catch(err => console.log(err))

        const newItems = Array.from(this.items)

        newItems.splice(index, 1)

        this.items = newItems
      },
    },
  })

  function loadAllItems() {
    return fetch('/api/todos')
      .then(response => response.json())
  }

  function addItem(item) {
    return fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    .then(response => response.json())
  }

    function removeItem(id) {
        return fetch('/api/todos/'+id, {
            method: 'DELETE'
        })
    }
}
