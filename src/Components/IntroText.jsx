const Introtext = ( {activeTopMenu , setActiveTopMenu , topMenuItems , content}) =>{
    return(
        <main className=" inset-y-0 right-0 mt-6 border-2 border-red-500 font-bold text-white">
        <div id="intro-text" className='flex flex-wrap mt-10 mx-16 border-2 border-green-400'>
        {topMenuItems.map((item) => (
          <div
            key={item}
            className={`font-medium cursor-pointer mr-8 mb-4 font-16px ${activeTopMenu === item ? 'font-bold' : 'opacity-50'}`}
            onClick={() => setActiveTopMenu(item)}
          >
            {item}
          </div>
        ))}
        </div>
        <div id="content" className='flex-grow text-[70px] mx-16 border-2 border-green-400'>
          {content[activeTopMenu].description.split('. ').map((text,index) => (
            <h1 key={index} className=' font-title -mb-10'>{text.trim()}</h1>
          ))}
          </div>
      </main>
    )
}

export default Introtext