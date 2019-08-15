import React from "react"
import { Link } from "gatsby"
export default () => (
  <div>
    Markdown items
    <br />
    <ul style={{
        listStyleType:'none',
        margin: '5px'
    }}>
      <li>
        <Link to={"/services/accounting/"}>
         services/accounting
        </Link>
      </li>
      <li>
        <Link to={"/services/randomservice/"}>
          services/randomservice
        </Link>
      </li>
    </ul>
  </div>
)
