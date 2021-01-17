<template>
  <header class="header">
    <h1>Time and Hour</h1>
    <form action="#" class="search">
      <input type="text" class="search__input" placeholder="Search hotels" />
      <button class="search__button">
        <svg class="search__icon">
          <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </form>

    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <svg class="user-nav__icon">
          <use xlink:href="img/sprite.svg#icon-bookmark"></use>
        </svg>
        <span class="user-nav__notification">
          7
        </span>
      </div>
      <div class="user-nav__icon-box">
        <svg class="user-nav__icon">
          <use xlink:href="img/sprite.svg#icon-chat"></use>
        </svg>
        <span class="user-nav__notification">
          13
        </span>
      </div>
      <div class="user-nav__user">
        <span class="user-nav__user-name">Ivo </span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "UserNavigation",
  props: {}
};
</script>
