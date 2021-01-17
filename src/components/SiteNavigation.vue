<template>
  <div class="content">
    <nav class="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'Home' }">
            Home
          </router-link>
        </li>
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'Home' }">
            Realtors
          </router-link>
        </li>
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'Home' }">
            Proposal
          </router-link>
        </li>
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'About' }">
            Contact
          </router-link>
        </li>
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'About' }">
            Jobs
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
