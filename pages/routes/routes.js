import { getBrowserCookie } from "../../utils/auth" 
import { appRoutes } from "../../utils/constants" 

const isBrowser = () => typeof window !== "undefined" 

const unprotectedRoutes = [
  appRoutes.LOGIN_PAGE,
  appRoutes.MENUS_PAGE,
  appRoutes.PROMOS_PAGE,
  appRoutes.PRODUCTS_PAGE,
] 

const ProtectedRoutes = ({ router, children }) => {
  const userAuthenticated = getBrowserCookie() 
  let isProtectedRoute = unprotectedRoutes.indexOf(router.pathname) === -1 

  if (isBrowser() && !userAuthenticated && isProtectedRoute) {
    router.push(appRoutes.LOGIN_PAGE) 
  }

  if (
    isBrowser() &&
    userAuthenticated &&
    router.pathname === appRoutes.LOGIN_PAGE
  ) {
    router.push(appRoutes.DASHBOARD_PAGE) 
  }

  return children 
} 

export default ProtectedRoutes 
