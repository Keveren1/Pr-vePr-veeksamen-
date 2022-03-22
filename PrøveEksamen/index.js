const baseUrl = "http://localhost:14099/api/TestSites"
Vue.createApp({
  data() {
      return {   
          posts: [],
          error: null,
          id:null
      }
  },
  async created() {
      // created() is a life cycle method, not an ordinary method
      // created() is called automatically when the page is loaded
      console.log("created method called")
      this.helperGetPosts(baseUrl)
  },
  methods: {
      async helperGetPosts() {
          try {
              const response = await axios.get(baseUrl)
              this.posts = await response.data
              this.error = null
          } catch (ex) {
              alert(ex)
          }
      }
      
  }
}).mount("#app")