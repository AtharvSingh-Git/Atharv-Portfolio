const Nav = ({menuItems}) => {
    return(
        <aside className=' inset-y-0 left-0 font-16px mt-6 border-2 border-red-500 font-bold text-black'>
        <div>
          <ul className="mt-4 px-4 space-y-2">
            {menuItems.map((item) => <div className='font-medium border-2 border-green-400 text-white'key={item}>{item}</div>)}
          </ul>
        </div>
      </aside>

    )
}

export default Nav