const fecha = new Date();
const TodoList = {
    data() {
        return {
            tarea: "",
            tarea_array: [],
            ok: ""
        }
    },
    methods: {
        metertarea() { //METODO PARA AÑADIR UNA NUEVA TAREA A LA LISTA
            this.tarea_array.push({nombre: this.tarea,fecha: fecha.toDateString(), completado: false});

            //subir al localstorage
            localStorage.setItem('tarea_array', JSON.stringify(this.tarea_array));

            //cuando le de a borrar que se borre tambien del localstorage

        },
        cambiarcompletado(index){ //METODO QUE CAMBIA EL ESTADO BOOLEANO
            this.tarea_array[index].completado ? this.tarea_array[index].completado = false : this.tarea_array[index].completado = true;
        },
        borrartarea(index){ //METODO QUE BORRA UNA TAREA
            this.tarea_array.splice(index, 1);
        }

    },
    computed: { //CAMPOS CALCULADOS

        sincompletar(){ //METODO CALCULADO QUE SACA TODAS TAREAS INCOMPLETAS
            let contador = 0
            this.tarea_array.forEach(t => {
                t.completado ? "" : contador++;
            });
            return contador;
        }
        
    },

    beforeMount(){ // Called right before the mounting begins: the render function is about to be called for the first time.
        
        //bajar local storage
        if(JSON.parse(localStorage.getItem('tarea_array'))){
            this.tarea_array = JSON.parse(localStorage.getItem('tarea_array'));
            this.ok = this.tarea_array.length;
        }
    }
}

window.onload = () => { 
    Vue.createApp(TodoList).mount("#app")
}