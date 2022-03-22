const baseUrl = "https://xn--prveeksamenrestapi20220322201832-hid.azurewebsites.net/api/TestSites"
Vue.createApp({
  data() {
      return {   
          posts: [],
          error: null,
          id:null,
          dataBook: {name: "", waitingTime: 0},
          deleteMessage: null,
          deleteId: 0,
          updateData: { id: 0, Name: "", WaitingTime: 0},
          idToGetBy: 0,
          ErrorMessage: "Non existent",
      }
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
        } catch(ex) {
            alert(ex.message)
        }
      },
      async deleteData(deleteId) {
        const url = baseUrl + "/" + deleteId
        try {
            response = await axios.delete(url)
            this.deleteMessage = response.status + " " + response.statusText
            this.helperGetPosts()
        } catch (ex) {
            alert(ex)
        }
    },
    async UpdateData() {
        const url = baseUrl + "/" + this.updateData.id
        try {
            response = await axios.put(url, this.updateData)
            this.updateMessage = "response " + response.status + " " + response.statusText
            this.helperGetPosts()
        } catch (ex) {
            alert(ex)
        }
    },
    async getById(id) {
        const url = baseUrl + "/" + id
        try {
            const response = await axios.get(url)
            this.posts = await response.data
        } catch (ex) {
            alert(ex)
        }
    },
    async FilteredGetAll(name, waitingTime){
        const newUrl = url + "?" + (name ? "name=" + name + "&" : "") + (waitingTime ? "waiTime=" + waitingTime : "")
        console.log(newUrl)
        const response = await axios.get(newUrl)
        this.posts = await response.data
    }

  }
}).mount("#app")