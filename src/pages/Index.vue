<template>
  <Layout>
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">

        <post-preview />

      </div>
    </div>
  

  </Layout>
</template>

<script>
import PostPreview from '~/components/PostPreview'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    PostPreview
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
