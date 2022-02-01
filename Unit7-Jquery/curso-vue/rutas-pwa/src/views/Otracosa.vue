<template>
  <div>
    <h1>Soy otra cosa dentro de rutas</h1>

    <OtraCosa msg="Bienvenido al home de la app principal :)"/>
  </div>
</template>

<script>
import OtraCosa from '@/components/CompOtra.vue'

export default {
  name: 'Home',
  components: {
    OtraCosa
  }
}


</script>