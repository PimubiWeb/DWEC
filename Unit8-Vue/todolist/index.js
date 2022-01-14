const Tarea = {
    data() {
        return {
            tarea1: "comprar pan",
            tarea: "",
            tarea_array: []
        }
    },
    methods: {
        metertarea() {
            this.tarea.push(this.tarea) 
        }
    }
}

window.onload = () => {
    Vue.createApp(Tarea).mount("#app")
}