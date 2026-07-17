import React from "react";
import { IcShieldX, IcLock } from "../assets/icons.jsx";

/* The red gate shown when a portal is not in the user's eligibility list. */
export default function NotAuthorized({ portalName }) {
  return (
    <div className="gate">
      <div className="gate-box">
        <div className="gate-ico">
          <IcShieldX />
        </div>
        <h2>You are not authorized for this portal</h2>
        {portalName && <div className="gate-portal">{portalName}</div>}
        <p>
          Your account does not have access to this area. Access is controlled by your
          eligibility profile. If you believe this is a mistake, contact your Ad Operations
          Admin to request access.
        </p>
        <div className="gate-meta">
          <IcLock size={15} />
          Access restricted · eligibility check failed
        </div>
      </div>
    </div>
  );
}
