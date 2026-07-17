import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { getPortalByKey } from "../config/portals.jsx";
import NotAuthorized from "./NotAuthorized.jsx";
import { Loader } from "./Loader.jsx";

/* Wraps a portal page. If the portal key is NOT in the eligibility
   list returned by /eligibilityList, it renders the red gate instead
   of the page content. */
export default function PortalGuard({ portalKey, children }) {
  const { isPortalAllowed, eligibilityLoading, eligibility } = useAuth();

  if (eligibilityLoading && eligibility.length === 0) {
    return <Loader label="Checking your access…" />;
  }
  if (!isPortalAllowed(portalKey)) {
    const portal = getPortalByKey(portalKey);
    return <NotAuthorized portalName={portal ? portal.label : portalKey} />;
  }
  return children;
}
