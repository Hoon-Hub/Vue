<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Props">Props</router-link> |
    <router-link to="/Repeat01">Repeat01</router-link> |
    <router-link to="/다중이벤트">다중이벤트</router-link> |
    <router-link to="/DataBindingList">DataBindingList</router-link><br>
    <router-link to="/Parent">Refs</router-link> |
    <router-link to="/Calculator">CompositionAPI</router-link> |
    <router-link to="/Directives">Direction</router-link> |
    <router-link to="/Plugins">Plugins</router-link> |
    <router-link to="/Store">Store</router-link> |
    <router-view />

  </div>
</template>

<style>
#app {
  text-align:center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
