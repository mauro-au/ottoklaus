<template>
  <v-app>
    <transition name='fade'>
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: .3s;
}
.fade-enter-active {
  transition-delay: .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>