import React from 'react'
import { Link } from 'react-router-dom'
const about = () => {
  return (
    <div className='text-center'>
      <div>hello i am <span className='font-extrabold text-7xl'>about page</span></div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laborum architecto fugit excepturi est nemo veniam adipisci saepe nesciunt recusandae libero hic quidem maxime, consectetur eligendi sunt ex doloribus molestias!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laborum architecto fugit excepturi est nemo veniam adipisci saepe nesciunt recusandae libero hic quidem maxime, consectetur eligendi sunt ex doloribus molestias!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laborum architecto fugit excepturi est nemo veniam adipisci saepe nesciunt recusandae libero hic quidem maxime, consectetur eligendi sunt ex doloribus molestias!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laborum architecto fugit excepturi est nemo veniam adipisci saepe nesciunt recusandae libero hic quidem maxime, consectetur eligendi sunt ex doloribus molestias!</p>
      <Link to="/">Go to home page</Link>
    </div>
  )
}

export default about
