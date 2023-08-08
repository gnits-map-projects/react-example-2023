import React, { useState } from "react";

export default function AuthenticationPage({children}) {
  const [authenticate, setAuthenticate] = useState(false);

  if (!authenticate) {
    return (
        <div>
            <div>Please Login</div>
            <button onClick={() => setAuthenticate(true)}>Login</button>
        </div>
    )
  }

  return (
    <div>
    {children}
    </div>
  )
}