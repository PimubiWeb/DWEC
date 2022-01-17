const Counter = {
    data() {
      return {
            nuevoId: 32,
            array = [{"nombre": "hhtps://google.es", }]
        }
    }
}

window.onload = () => {
    Vue.createApp(Counter).mount('#app')
}