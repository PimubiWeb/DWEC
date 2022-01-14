const Counter = {
    data() {
      return {
        counter: 0,
        midato: "pablito",
        listanombres: ['pepe','jose','manolo'],
        nuevonombre: "",
        listapersonas: [{nombre: 'pablo', edad: 20}],
        mostrar: false
      }
    },
    methods: {
        incrementa() {
            this.counter++;
            this.listanombres.push(this.nuevonombre);
            this.mostrar = true
        }
    }
    }
window.onload = () => {
    Vue.createApp(Counter).mount('#appvue')
}