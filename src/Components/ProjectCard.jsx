import {ProjectData} from '../data/data' 
const ProjectCard = ({title , description , website , github , tags}) => {
  return (
    <>
    <div className='justify-center mb-[48px] ml-[180px] mr-[180px] pl-[20px] pr-[20px] border-2 border-green-400 text-white'>
      <div>
        <h1 className='text-4xl text-bold '>{title}</h1>
        <p className='text-2xl'>{description}</p>
        <div className='flex flex-wrap gap-1 '>
          {
            tags.map((tag,index)=> (
              <button key={index} className='bg-blue-300 font-semibold text-black px-3 py-1 rounded text-[10px]'>{tag}</button>
            ))
          }
        </div>
        {/* div for making grid to show website and github on the same level */}
        <div className='grid grid-cols-2 '>
        <a href={website} className="flex items-center  mx-[100px] text-[14px] bg-white text-black border border-white px-3 py-2 rounded-lg">
                    <span className="mr-2">🌐</span> Website
        </a>
        <a href={github} className="flex items-center text-[14px] mx-[100px] bg-white text-black border border-white px-3 py-2 rounded-lg">
                    <span className="mr-2">🌐</span> Github
        </a>
        </div>
      </div>
    </div>
    </>
  )
}


export default ProjectCard