import React from "react"
import { Link } from "gatsby"
export default () => (
  <div>
    Markdown items
    <br />
    <ul style={{
        listStyleType:'none'
    }}>
      <li>
        <Link to={"/services/accounting/"}>
          Firs markdown page, services/accounting
        </Link>
      </li>
      <li>
        <Link to={"/services/randomservice/"}>
          second markdown page, services/randomservice
        </Link>
      </li>
    </ul>
  </div>
)
