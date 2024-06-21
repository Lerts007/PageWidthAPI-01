<template>
  <header>
    <div class="logo">
      <NuxtLink to="/"><img src="/public/logo.svg" alt="Logo" /></NuxtLink>
    </div>
    <div class="rightBlock">
      <nav>
        <ul class="navPanel">
          <li><NuxtLink to="/works">Works</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
      <div class="buttons">
        <button class="language">
          <img src="/public/united kingdom.png" alt="" srcset="" />
        </button>
        <button class="btnWork">Let's work</button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  height: 124px;

  margin: 0 auto;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
}
.rightBlock {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 91px;
}
.navPanel {
  @include TT_Commons-20;
  display: flex;
  gap: 60px;
}
.buttons {
  display: flex;
  gap: 15px;
}
.language {
  width: 52px;
  height: 52px;

  border-radius: 28px;
  border: 2px solid #f0f0f0;

  background-color: #fff;
}
.btnWork {
  @include TT_Commons-20;
  width: 142px;
  height: 52px;

  padding: 0px 22px;

  background-color: #000;
  color: #fff;

  border: none;
  border-radius: 28px;
}
</style>
