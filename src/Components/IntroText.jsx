import Arrow from './Arrow';

const IntroText = ({ activeTopMenu, setActiveTopMenu, topMenuItems, content }) => {
  return (
    <div className="h-screen pt-24 pl-[200px] text-white"> {/* Add padding to account for fixed header and nav */}
      <div id="intro-text" className='flex flex-wrap mt-12 mx-16 border-2 border-green-400'>
        {topMenuItems.map((item) => (
          <div
            key={item}
            className={`font-medium cursor-pointer mr-8 mb-4 font-16px ${activeTopMenu === item ? 'font-bold' : 'opacity-50'} hover:opacity-100`}
            onClick={() => setActiveTopMenu(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {/* INTRO TEXT DIV  */}
      <div id="content" className='flex-grow text-[70px]  mx-16 border-2 border-green-400'>
        {content[activeTopMenu].description.split('. ').map((text, index) => (
          <h1 key={index} className='font-title -mb-10 text-white'>
            {text.trim()}
            {activeTopMenu === 'Product Managers' && text.includes('vision') && <Arrow />}
          </h1>
        ))}
      </div>
    </div>
  )
}

export default IntroText