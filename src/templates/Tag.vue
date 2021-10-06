<template>
    <Layout>
        <!-- Page Header-->
        <header
            class="masthead"
            style="background-image: url('/img/home-bg.jpg')"
        >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1># {{ $page.tag.title }}</h1>
                            <!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <template v-for="edge in $page.tag.posts">
                        <!-- Post preview-->
                        <div
                            class="post-preview"
                            :key="edge.id"
                        >
                            <g-link :to="`/post/${edge.id}`">
                                <h2 class="post-title">{{edge.title}}</h2>
                                <!-- <h3 class="post-subtitle">{{edge.node.content}}</h3> -->
                            </g-link>
                            <!-- <p class="post-meta">
                                Posted by
                                <a href="#!">{{edge.node.created_by.firstname}}{{edge.node.created_by.lastname}}</a>
                                on {{edge.node.created_at}}
                            </p> -->
                        </div>
                        <!-- Tags -->
                        <!-- <div class="d-flex">
                            <g-link
                                v-for="tag in edge.node.tags"
                                :key="tag.id"
                                class="text-decoration-underline m-lg-2"
                                :to="`/tag/${tag.id}`"
                            >{{tag.title}}</g-link>
                        </div> -->
                        <!-- Divider-->
                        <hr class="my-4" />
                    </template>
                </div>
            </div>
        </div>
    </Layout>
</template>
<page-query>
query ($id: ID!) {
  tag: strapiTag(id: $id) {
    id,
    title,
    posts {
      id
      title
    }
  }
}
</page-query>
<script>
export default {
    name: 'TagPage'
}
</script>