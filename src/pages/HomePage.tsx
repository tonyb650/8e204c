import { Button } from '@headlessui/react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div className='m-2'>
      <Button as={Link} to="/nodes" className='border border-gray-300 rounded-md p-2'>Go To Graph</Button>
    </div>
  )
}

export default HomePage
