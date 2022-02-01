<template>
  <div class="hello">
    <p>MI COMPONENTE TEMPLATE</p>


    <button @click="muestraconsole">
            you click me {{count}} times.
    </button>
    
  </div>
</template>

<script>
export default {
  name: 'micomponente',
  
  data(){
        //datos de mi componente como si fuese el constructor de una clase
        return{
            count: 0
        }
      },
      methods: {
        muestraconsole(){
          this.count++;
          if(this.count === 10){  
            console.log("he llegado hasta 10");
            this.$emit('llegada', 'pepe');
          
          }
          
        }
      }

}
</script>