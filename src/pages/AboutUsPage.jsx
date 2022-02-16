import React from 'react'

function AboutUsPage() {
  return (
    <div>
  <title>About Us Section</title>
  <div className="min-h-screen w-full bg-slate-100">
		<div className="block m-auto pt-12 w-4/5">
			<div className="block float-none m-auto w-full">
				<div className="title">
					<h1 className='text-4xl font-bold text-gray-800'>About Us</h1>
				</div>
				<div className="content">
					<h3 className='text-2xl mt-5 font-semibold underline underline-offset-2	 text-neutral-600'>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p className='text-lg text-gray-900 leading-normal mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
          <p className='text-lg leading-normal text-gray-900 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
          <p className='text-lg leading-normal text-gray-900 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco lab	consequat.</p>
					{/* <div className="text-center">
						<a className='py-2 px-8 hover:text-white hover:text-red-800' href="">Read More</a>
					</div> */}
				</div>
				<div className="mt-3 mb-3 text-center">
					<a href=""><i className="text-3xl py-0 px-2 text-red-800 hover:text-cyan-800 fab fa-facebook-f"></i></a>
					<a href=""><i className="text-3xl py-0 px-2 text-red-800 hover:text-cyan-800 fab fa-twitter"></i></a>
					<a href=""><i className="text-3xl py-0 px-2 text-red-800 hover:text-cyan-800 fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="flex float-none justify-center	mb-5 ">
				<img className=' block h-auto rounded  h-3/4  w-3/4 ' src="https://media.istockphoto.com/photos/about-us-picture-id114283644?b=1&k=20&m=114283644&s=170667a&w=0&h=X2hZ7fnV0oH4gvQvdUzjImDFrDanjggjDkumF1fvCqs=" alt=''/>
			</div>
		</div>
	</div>
  </div>
  )
}

export default AboutUsPage