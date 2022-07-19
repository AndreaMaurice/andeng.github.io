

const Banner = () => {
  return (
    <div className="h-full grid grid-cols-1 gap-4 content-center text-slate-400">
        <div>
            <p className="text-5xl sm:text-3xl md:text-4xl font-semibold">
                Hello, world! <span className="text-rose-500">I am</span>
            </p>
        </div>
        <div>
            <h1 className="text-6xl text-rose-500 leading-snug font-bold">
                ANDREA MAURICE DE GUZMAN
            </h1>
        </div>
        <div className="w-3/5">
            <p className="text-2xl leading-snug">
            I am a web <span className="text-rose-400">developer</span> and <span className="text-rose-400">designer</span> from Zambales, Philippines.
            </p>
        </div>
        <div className="border-2 border-rose-500 w-36 rounded text-center p-1 hover:bg-rose-400 hover:border-rose-400 hover:text-slate-100">
        {/* <Link to="/connect">Contact Me!</Link> */}
        Contact Me!
        </div>
        
    </div>
  )
}

export default Banner;