import React from "react";
import { useLocation} from "react-router-dom"

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
      <div>
          <h1>404: Page Not Found</h1>
      </div>
  )
}

// export function Whoops404() {
//   let location = useLocation();
//   console.log(location);
//   return (
//       <div>
//           <h1>Resource not found at { location.pathname }</h1>
//       </div>
//   )
// }