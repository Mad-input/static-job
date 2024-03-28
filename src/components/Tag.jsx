/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line react/prop-types
export default function Tag({children,type,filter}) {
  return (
    <div onClick={()=> filter(type,children)}className="tag" datatype={type}>{children}</div>
  )
}
