import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-full grid grid-cols-1 gap-4 content-center text-slate-400">
        <div>
            <p className="text-5xl" style={{ fontWeight: 500 }}>
                Hello, world! I am
            </p>
        </div>
        <div>
            <h1 className="text-7xl text-rose-500" style={{ fontWeight: 700 }}>
                Andrea Maurice De Guzman
            </h1>
        </div>
        <div className="w-3/5">
            <p className="text-3xl">
            I am a web <span className="text-rose-300">developer</span> and <span className="text-rose-300">designer</span> from Zambales, Philippines.
            </p>
        </div>
        <div className="border-2 border-rose-500 w-36 rounded text-center p-1 hover:bg-rose-500 hover:text-slate-100">
        {/* <Link to="/connect">Contact Me!</Link> */}
        Contact Me!
        </div>
        {/* <Switch>
          <Route exact path="/connect">
          </Route>
        </Switch> */}
    </div>
  )
}

export default Banner