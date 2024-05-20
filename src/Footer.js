import React from "react"
const today = new Date();
const Footer = ({length}) => {
  return (
    <footer>
        <p>{length} List {(length===1)? "item":"items"}</p>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer