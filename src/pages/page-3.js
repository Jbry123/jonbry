import React from 'react'
import Link from 'gatsby-link'
import { Button } from '@material-ui/core'

const SecondPage = () => (
  <div className="PageContainer2">
    <h1 className="PageTitle2">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button>
      Hi
    </Button>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
