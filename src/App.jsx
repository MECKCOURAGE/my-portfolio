import './index.css'
import FirstPage from './pages/Firstpage'
import Secondpage from './pages/Secondpage'
import FooterPage from './pages/FooterPage'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='h-[20px] bg-green'>
      </div>
      <div>
        <FirstPage />
        <div className="w-full">
          <svg className="svg-curve" viewBox="0 0 1440 79" fill="#D7DBD1" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#3D703D" width="100%" height="102%" />
            <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
          </svg>
        </div>

      </div>
      <Secondpage />
      <div className='w-full'>
        <svg
          className="svg-curve flex bg-customGreen text-gray"
          viewBox="0 0 1440 78"
          xmlns="http://www.w3.org/2000/svg"
          fill="#3D703D"
        >
          <path
            d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V80H-100V0Z"
            fill="#D7DBD1"
          ></path>
        </svg>
      </div>

      <FooterPage />
      <div className='h-[10px] bg-green'>
      </div>

    </>
  )
}

export default App
