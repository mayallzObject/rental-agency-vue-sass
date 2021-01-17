<template>
  <div>
    <header class="main-header">
      <h1 class="heading-1">
        Rental Properties
      </h1>
    </header>
    <section class="homes">
      <ProductCard v-for="home in getHomes" :key="home.id" :home="home" />
    </section>
    <section>
      <HomesGallery />
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import HomesGallery from "@/components/HomesGallery";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ProductCard,
    HomesGallery
  },
  computed: {
    ...mapGetters(["getHomes"])
  }
};
</script>
