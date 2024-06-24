import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col text-center gap-4">
            <strong className="text-2xl">Sorry, this page isn't available</strong>
            <span>The link you followed may be broken, or the page may have been removed.</span>
            <Link to="/" className="underline text-blue-500 hover:text-blue-600">go back to dashboard</Link>
        </div>
    </main>
  )
}

export default NotFound