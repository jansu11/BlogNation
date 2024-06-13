import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import LinkBtn from '../components/Buttons/LinkBtn'
import Banner from '../components/Banner'
import Illustration from '../components/LandingPage/Illustration'
import Note from '../assets/illustrations/Note.svg'
import Learning from '../assets/illustrations/Learning.svg'
import Articles from '../assets/illustrations/Articles.svg'

function WelcomePage() {

  const {auth,loading} = useContext(AuthContext)
  const navigate = useNavigate()


  useEffect(() => {
    if (auth && auth.token){
      navigate('/author/dashboard')
    }
  },[auth,navigate])

   if (!auth?.user) {
  
  return (

    <div className="h-full w-full flex flex-col justify-between items-center pr-2">

      <div className='flex flex-wrap items-center py-10 px-0'>
        <div className='flex-1 p-5'>
          <h1 className='text-3xl mb-5 
          text-center
          px-14 text-black-300 font-bold '>
            Expand your knowlege horizon. Browse categories you like

          </h1>
          <p className=' my-4 text-xl font-bold '>
            because knowlege is power

          </p>
          <Link to={'/blogs/'}>
            <button className='bg-[#ff6b6b] text-white  p-5 border-radius font-bold hover:text-gray-800 trasition  duration-300'>
              Read the Blogs

            </button>
          </Link>

        </div>
        <div className='' >
          <img src={Learning}>
          </img>

        </div>

      </div>

      <Banner backgroundImage={''} 
          title='Turn your thoughts into Masterpiece'
          Illus={<Illustration svg={Articles}/>}
          btn={<LinkBtn url='/author/' textContent='Join As Author'/>}

      
          subtitle=' become the author'
      />

    </div>
  )
}
}

export default WelcomePage