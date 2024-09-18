import AnimatedBrandName from "./AnimatedBrandName"
const Header = () => {
    return(
        <header className=' col-span-2 h-24 text-3xl border-2 border-red-500 font-bold text-cyan-400'>

        <div className='flex flex-wrap px-4 py-9 border-2  border-green-400'>
          <AnimatedBrandName firstName={'Atharv'} lastName={'.Singh'}/>
        </div>

      </header>
    )
}

export default Header