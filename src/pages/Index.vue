<template>
  <Layout>
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">

        <post-preview
        v-for="edge in $page.news.edges" :key="edge.id" :item="edge.node"
         />

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

<page-query>
query News {
  news: allNews {
    edges {
      node {
        title
        subtitle
        path
        date
        thumbnail
      }
    }
  }
}
</page-query>



