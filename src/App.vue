<template>
  <div id="app" class="app">
    <MainHeader />
    <UserNavigation />
    <SiteNavigation />
    <MainFiltersBox />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import SiteNavigation from '@/components/SiteNavigation'
import UserNavigation from '@/components/UserNavigation'
import MainFiltersBox from '@/components/MainFiltersBox'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    MainHeader,
    SiteNavigation,
    UserNavigation,
    MainFiltersBox,
    Footer
  }
}
</script>
