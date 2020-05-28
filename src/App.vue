<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/settings">settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  background: rgb(223, 223, 223);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  background: rgb(82, 83, 104);
  margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: rgb(93, 240, 105);
}
</style>
