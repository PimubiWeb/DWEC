const App = {
    data() {
      return {
        dato: "titulo comun"
      }
    },
    methods: {
        
    }
}




window.onload = () => {

    let app = Vue.createApp(App)

    //creacion de mi componente
    app.component('my-component-name', {
        // ... options ...
        data() {
            //datos de mi componente como si fuese el constructor de una clase
            return{
                count: 0
            }
        },
        props: ["titulo", "color"],
        template: `
        <h1> {{titulo}} - {{color}} </h1>
        <button @click="count++">
            you click me {{count}} times.
        </button>
        <hr>
        `
    })

    app.mount('#app')
}