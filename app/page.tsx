import React from 'react'

const HomePage = async () => {

  await new Promise((resolve) => setTimeout(resolve, 2000)); // fake delay

  return (
    <div>Home page</div>
  )
}

export default HomePage;