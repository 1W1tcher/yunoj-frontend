<template>
  <div id="UserLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/oj-logo.svg" class="logo" />
          <div>云OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">qye、枯寂</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#UserLayout {
  text-align: center;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png")
    0% 0% / 100% 100%;
}

#UserLayout .logo {
  width: 64px;
  height: 64px;
}

#UserLayout .header {
  margin-top: 16px;
  margin-bottom: 16px;
}

#UserLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#UserLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

<script></script>
