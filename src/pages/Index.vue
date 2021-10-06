<template>
    <Layout>
        <!-- Page Header-->
        <header
            class="masthead"
            :style="{
                backgroundImage: `url('${GRIDSOME_API_URL}${$page.general.edges[0].node.cover.url}')`
            }"
        >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>{{$page.general.edges[0].node.title}}</h1>
                            <span class="subheading">{{$page.general.edges[0].node.subtitle}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <template v-for="edge in $page.posts.edges">
                        <!-- Post preview-->
                        <div
                            class="post-preview"
                            :key="edge.node.id"
                        >
                            <g-link :to="`/post/${edge.node.id}`">
                                <h2 class="post-title">{{edge.node.title}}</h2>
                                <h3 class="post-subtitle">{{edge.node.content}}</h3>
                            </g-link>
                            <p class="post-meta">
                                Posted by
                                <a href="#!">{{edge.node.created_by.firstname}}{{edge.node.created_by.lastname}}</a>
                                on {{edge.node.created_at}}
                            </p>
                        </div>
                        <!-- Tags -->
                        <div class="d-flex">
                            <g-link
                                v-for="tag in edge.node.tags"
                                :key="tag.id"
                                class="text-decoration-underline m-lg-2"
                                :to="`/tag/${tag.id}`"
                            >{{tag.title}}</g-link>
                        </div>
                        <!-- Divider-->
                        <hr class="my-4" />
                    </template>
                    <!-- Pager-->
                    <div class="d-flex justify-content-end mb-4">
                        <pager :info="$page.posts.pageInfo" />
                    </div>
                    <!-- <a
                            class="btn btn-primary text-uppercase"
                            href="#!"
                        >Older Posts →</a> -->
                </div>
            </div>
        </div>
    </Layout>
</template>
<page-query>
query ($page: Int) {
  posts: allStrapiPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    },
    edges {
      node {
        id,
        title,
        created_at,
        created_by {
          id,
          firstname,
          lastname
        }
        content,
        tags {
          id,
          title
        }
      }
    }
  }
  general: allStrapiGeneral {
    edges {
      node {
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
    metaInfo: {
        title: 'Blog'
    },
    components: { Pager },
    name: 'HomePage'
}
</script>

<style></style>
