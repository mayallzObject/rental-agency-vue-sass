<template>
  <div>
    <div class="home">
      <img :src="home.img" alt="House 1" class="home__img" />
      <svg class="home__like">
        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 class="home__name">
        {{ home.title }}
      </h5>
      <div class="home__location">
        <svg>
          <use xlink:href="@/assets/img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>{{ home.location }}</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlink:href="@/assets/img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>{{ home.rooms }}</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlink:href="@/assets/img/sprite.svg#icon-expand"></use>
        </svg>
        <p>{{ home.square }} m<sup>2</sup></p>
      </div>
      <div class="home__price">
        <svg>
          <use xlink:href="@/assets/img/sprite.svg#icon-key"></use>
        </svg>
        <p>{{ home.price }}</p>
      </div>
      <button class="btn home__btn">
        <ruter-link
          class="btn"
          :to="{
            name: 'details',
            params: { id: home.id }
          }"
        >
          Contact realtor
        </ruter-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    home: {
      type: Object,
      required: true
    }
  }
};
</script>
