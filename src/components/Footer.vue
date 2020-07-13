<template>
    <v-footer absolute class="font-weight-medium py-0">
      <v-col class="text-center py-0" cols="12">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon>
            <v-icon color="black" size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider class="mr-10 ml-10"></v-divider>

        <v-card-text>
        {{ new Date().getFullYear() }} — <strong>OTTO KLAUS</strong>
        </v-card-text>

      </v-col>
    </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
}
</script>

<style>

</style>