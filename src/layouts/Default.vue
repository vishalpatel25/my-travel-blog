<template>
  <div class="layout">

    <site-nav />
    <site-header />
    <site-footer />


    <main>
    <slot/>
    </main>




    <footer>

   </footer>




  </div>
</template>


<script> 
import SiteNav from '~/components/SiteNav'
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
export default{
  components: {
    SiteNav,
    SiteHeader,
    SiteFooter

  }
}
</script>



<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: 'Major Mono Display', monospace !important;
}
</style>
