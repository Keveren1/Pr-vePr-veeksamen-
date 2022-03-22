const baseUrl = "http://localhost:14099/api/TestSites"
Vue.createApp({
  data() {
      return {   
          posts: [],
          error: null,
          id:null,
          dataBook: {name: "", waitingTime: 0},
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
      },
      async addData(){
        console.table(this.dataBook)
        try{
            response = await axios.post(baseUrl, this.dataBook)
            this.addMessage = "response" + response.status + "" + response.statusText
            this.created()
        } catch(ex) {
            alert(ex.message)
        }
      }
  }
}).mount("#app")