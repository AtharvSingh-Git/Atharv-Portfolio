const Nav = ({menuItems}) => {
  return (
    <aside className='fixed left-0 top-24 bottom-0 w-[200px] mt-9 font-16px border-r-2 border-red-500 font-bold text-white bg-black overflow-y-auto'>
      <nav>
        <ul className="mt-4 px-4 space-y-2">
          {menuItems.map((item) => (
            <li className='font-medium border-2 border-green-400' key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Nav