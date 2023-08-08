import React, {useState} from "react";

export default function AuthenticatePage({children}) {
  const [authenticate, setAuthenticate] = useState(false);
  console.log('.....called ......', authenticate)
  if (!authenticate) {
    return (
    <div>
        <div>Please login to access page</div>
        <button onClick={() => setAuthenticate(true)}>Login</button>
    </div>
    )
  }

  return(
    <div>{children}</div>
  )
};
