import { matchPath, useLocation } from "react-router-dom"

import HomepageRoutes from "@/routes/homepageRoutes"
import PortalRoutes from "@/routes/portalRoutes"

export default function useMatchedRoute() {
  const { pathname } = useLocation()

  for (const route of HomepageRoutes.concat(PortalRoutes)) {
    if (matchPath((route as any).fullPath || route.path, pathname)) {
      return route
    }
  }
  return {
    name: "NotFound",
  }
}
