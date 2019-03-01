<template>
<div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">
                {{ item.title }}
            </h2>
            <h3 class="post-subtitle">
              {{ item.subtitle}}
            </h3>
          </a>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            {{ item.author}}</p>
        </div>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object
        }
    }
}
</script> 