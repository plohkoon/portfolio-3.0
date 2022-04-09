const Error = ({ status = 404, msg }: {status?: number, msg?: string}) => {
  let title = "Something went wrong"
  if (status === 404) {
    msg = "Sorry, we couldn't find the page you're looking for."
    title = "Page not found"
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full ">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-4/12 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="flex-grow flex flex-col bg-white h-screen">
           <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
             <div className="flex-shrink-0 my-auto py-16 sm:py-32">
               <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{ status } error</p>
               <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                 { title }
               </h1>
               { msg ?
                <p className="mt-2 text-base text-gray-500">{ msg }</p> :
                null
              }
              <div className="mt-6">
                <a href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default Error
