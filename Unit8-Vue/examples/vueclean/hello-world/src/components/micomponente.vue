<template>
  <div class="hello">
    <p>
      MI COMPONENTE
    </p>
    <p>{{count}}</p>
    
  </div>
</template>

<script>
export default {
  name: 'micomponente',
  
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

}
</script>