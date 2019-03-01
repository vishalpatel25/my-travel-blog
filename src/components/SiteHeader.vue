<template>
<header class="masthead">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{ config.siteName}}</h1>
            <span class="subheading">Never Stop Exploring</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import config from '~/.temp/config.js'
export default {
computed: {
    config (){
        return config
        }
    }
}
</script>



<style>
.masthead{
    background: linear-gradient(to right, rgba(13, 231, 180, 0.651), rgba(218, 137, 200, 0.747)), url('/images/mount.png')!important;
    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 53%, 100% 77%, 25% 100%, 0% 80%, 0 0%);
    clip-path: polygon(50% 0%, 100% 0, 100% 53%, 100% 77%, 25% 100%, 0% 80%, 0 0%);
}
</style>
