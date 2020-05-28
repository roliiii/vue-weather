<template>
  <div id="app">
    <div id="nav">
      <h1>Weather</h1>
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

#nav h1 {
  color: white;
}

#nav h1:hover {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
  cursor:default;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

#nav a.router-link-exact-active {
  color: rgb(93, 240, 105);
}
</style>
