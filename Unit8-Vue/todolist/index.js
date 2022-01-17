const Tarea = {
    data() {
        return {
            tarea: "",
            tarea_array: []
        }
    },
    methods: {
        metertarea() {
            this.tarea_array.push(this.tarea) 
        }
    }
}

window.onload = () => {
    Vue.createApp(Tarea).mount("#app")
}