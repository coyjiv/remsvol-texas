import { Link } from 'react-scroll'
export default function AboutUs() {
  return (
    // OnHover should move

    <div className='relative bg-[#221813] group' id='about-us'>
      <div className='relative h-80 overflow-hidden bg-[#ebe0bf] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
        <picture>
          <source
            media='(max-width: 1023px)'
            srcset='/img/about-us-bg-sm.jpg'
          />
          <source media='(min-width: 1024px)' srcset='/img/about-us-bg.jpg' />
          <img
            src='/img/about-us-bg-sm.jpg'
            className='h-full w-full object-cover'
            alt='About us'
          />
        </picture>
        <svg
          viewBox='0 0 926 676'
          aria-hidden='true'
          className='absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px] group-hover:-translate-y-20 transition-transform duration-300'
        >
          <path
            fill='white'
            fillOpacity='.3'
            d='m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z'
          />
          <defs>
            <linearGradient
              id='60c3c621-93e0-4a09-a0e6-4c228a0116d8'
              x1='926.392'
              x2='-109.635'
              y1='.176'
              y2='321.024'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#776FFF' />
              <stop offset={1} stopColor='#FF4694' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8'>
        <div className='pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32'>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            About Us
          </h2>
          <p className='mt-6 text-base leading-7 text-gray-300'>
            We take construction to the next level by building strong
            relationships & providing a broad variety solution tailored for your
            project. From blueprint to closeout - entrust your project to the
            professionals by submitting your blueprints.
          </p>
          <Link to='apply-form' smooth={true} duration={500}>
            <div className='mt-8'>
              <p className='inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer'>
                Get an estimate
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
