import store from "@/store";
import router from "@/router";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;
  //如果之前没登录过，自动登录
  if (!loginUser || !loginUser.userRole) {
    //加 await 是为了等用户登录成功之后，再执行后续的代码
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //如果跳转的界面必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果没登录，跳转到登录界面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
  }
  //如果已经登录了，但权限不足，那么跳转到无权限界面
  if (!checkAccess(loginUser, needAccess)) {
    next("/noAuth");
    return;
  }
  next();
});
