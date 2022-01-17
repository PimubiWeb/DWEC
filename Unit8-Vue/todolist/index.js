const fecha = new Date();
const Tarea = {
    data() {
        return {
            tarea: "",
            tarea_array: [],
            ok: ""
        }
    },
    methods: {
        metertarea() {
            this.tarea_array.push({nombre: this.tarea,fecha: fecha.toDateString(), completado: false});
            localStorage.setItem('tarea_array', JSON.stringify(this.tarea_array));

        },
        cambiarcompletado(){
            this.tarea_array.tarea[index].completado = true;
        },
        borrartarea(){
            this.tarea_array.tarea.splice(index, 1);
        }

    },
    computed: {
        sincompletar(){
            let contador = 0
            this.tarea_array.forEach(t => {
                t.completado ? "" : contador++;
            });
            return contador;
        }
        
    },
    beforeMount(){
        if(JSON.parse(localStorage.getItem('tarea_array'))){
            this.tarea_array = JSON.parse(localStorage.getItem('tarea_array'));
            this.ok = this.tarea_array.length;
        }
    }
}

window.onload = () => {
    Vue.createApp(Tarea).mount("#app")
}