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
          <router-link class="side-nav__link" :to="{ name: 'Realtors' }">
            Realtors
          </router-link>
        </li>
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'Proposal' }">
            Proposal
          </router-link>
        </li>
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'Contact' }">
            Contact
          </router-link>
        </li>
        <li class="side-nav__item side-nav__item --active">
          <router-link class="side-nav__link" :to="{ name: 'Careers' }">
            Careers
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
