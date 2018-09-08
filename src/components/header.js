import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="1"
    style={{
      background: '#F5D8D4',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        height: 50
      }}
    >

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        <h1 style={{ color: '#000' }} className="HeaderTitle">Jonathan Bry - Front End React Developer</h1>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
