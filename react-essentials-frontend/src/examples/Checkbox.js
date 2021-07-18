import React, {useReducer} from "react";

export function Checkbox() {
  // const [checked, setChecked] = useState(false); 

  // function toggle() {
  //   setChecked((checked) => !checked)
  // }

  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );

  return (
    <>
      <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
      <input id="checkbox" type="checkbox" value={checked} onChange={toggle}/>
    </>
  );
};
