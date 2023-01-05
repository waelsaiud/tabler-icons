import * as React from "react";

function IconBracesAsterix({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-braces-asterix" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" /><path d="M12 11.875l3 -1.687" /><path d="M12 11.875v3.375" /><path d="M12 11.875l-3 -1.687" /><path d="M12 11.875l3 1.688" /><path d="M12 8.5v3.375" /><path d="M12 11.875l-3 1.688" /><path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" /></svg>;
}

export default IconBracesAsterix;