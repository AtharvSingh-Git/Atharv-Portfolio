import AnimatedBrandName from "./AnimatedBrandName"

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 h-24 text-3xl border-b-2 border-red-500 font-bold text-cyan-400 bg-black z-10'>
      <div className='flex flex-wrap border-2 border-green-400 px-4 py-9'>
        <AnimatedBrandName firstName={'Atharv'} lastName={'.Singh'}/>
      </div>
    </header>
  )
}

export default Header