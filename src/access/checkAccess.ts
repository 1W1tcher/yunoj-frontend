/**
 * 检查权限（判断当前登录用户是否具有需要的权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import AccessEnum from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;

  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }

  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUserAccess !== AccessEnum.NOT_LOGIN) {
      return false;
    }
  }

  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== AccessEnum.ADMIN) {
      return false;
    }
  }

  return true;
};

export default checkAccess;
