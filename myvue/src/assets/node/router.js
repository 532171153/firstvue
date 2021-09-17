/**
 * router跳转：
 *    this.$router.push("url");
 *    this.$router.push({pash: "url"});
 *    this.$router.push({ name: 'helloWorld', params: { userId: wise }})  ==> 命名的路由+参数
 *    <router-link to="url"></router-link> ==> 只跳转，不验证时可以使用 渲染成<a></a>
 */

/*
  {
    path: '/helloWorld/:id',  ==> 动态路由
    name: 'HelloWorld',
    component: HelloWorld
  },
 */
