<template>
  <div>
    <header>
      <h1>My Anime Feed</h1>
    </header>
    <div class="btn-area">
      <button type="button" class="my-button" v-if="floating_button_to_top" @click="goToTop">Top</button>
    </div>
    <main >
      <Post v-for="(anime, i) in anime_list" :key="i" :anime="anime"  />
    </main>
  </div>
</template>

<script>
import Post from './components/Post.vue'

export default {
  name: 'App',
  components: {
    Post
  },
  data () {
    return {
      anime_list: [],
      floating_button_to_top: false
    }
  },
  methods: {
    getAnime() {
      const anime_titles = [
				"Naruto",
				"Demon Slayer",
				"Dragon Ball",
				"My Hero Academia",
				"Sword Art Online",
				"Tokyo Ghoul",
				"Darling in the Franxx",
				"Code Geass",
				"One Piece",
				"Fairy Tail",
				"Bleach",
				"Attack on Titan",
				"Hunter x Hunter",
			]

      const anime = []

      for (let i = 0; i < 10; i ++) {
        anime.push({
          title: anime_titles[
            Math.floor(Math.random() * anime_titles.length)
            ],
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio fuga nulla provident quibusdam vel aliquam a excepturi facilis recusandae autem, eum ex, placeat, labore aliquid suscipit veniam maxime alias."
        })
        console.log(anime)
      }

      return anime
    },
    handleScroll () {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        
        const new_anime = this.getAnime()

				this.anime_list = [...this.anime_list, ...new_anime];
      }
    },
    goToTop () {
      let scrollTop = window.pageYOffset
      if (scrollTop > 0) {
        window.scrollTo(0, 0, {behavior: "smooth"})
      }
      this.floating_button_to_top = false
    }
  },
  mounted () {
    this.anime_list = this.getAnime()
    window.addEventListener('scroll', this.handleScroll)
  },
  watch () {
    if( window.pageYOffset > 100 ) {
      this.floating_button_to_top = true
    } else {
      this.floating_button_to_top = false
    }
  }
}
</script>

<style>
*{
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #2c3e50;
  min-height: 100vh;
  padding-top: 3rem;
}

header h1{
  text-align: center;
}

header {
  margin-bottom: 2rem;
}

main {
  padding: 0 2rem;
  max-width: 640px;
  margin: 0 auto;
}
.btn-area {
  width: 100%;
  text-align: center;
}
.my-button {
  outline: none;
  padding: 3px 1rem;
  background-color: transparent;
  border-radius: 5px 5px 5px;
  position: fixed;
  top: 15px;
}
</style>
