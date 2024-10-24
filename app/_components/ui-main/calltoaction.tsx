import { Button } from "../ui/button"
const CallToAction = () => {
  return (
    <section className="section flex justify-center">
        <div className='max-w-[800px] w-full bg-gradient-to-br from-blue-800 to-cyan-600 flex flex-col items-center gap-4 text-white p-8 rounded-lg'>
            <h3 className="h2">Get Started for FREE today!</h3>
            <p className="text-center text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates a ab sit blanditiis repellendus. Enim illum aspernatur hic veniam voluptates.</p>

            <Button className="bg-blue-400 rounded-full shadow-blue-400 shadow-xl text-lg px-8 py-4 hover:bg-blue-600">Sign Up</Button>
        </div>
    </section>
  )
}

export default CallToAction