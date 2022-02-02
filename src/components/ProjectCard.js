import { imgUrl, imgMap } from '../assets/imgs/imgmap';


const ProjectCard = ({ project }) => {
  const { title, description, content: { badges, uri } } = project;

  // badges from - https://devicon.dev/
  return (
    <a href={uri} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col w-full md:min-h-full sm:min-h-full bg-gray-300 dark:bg-gray-900 rounded-lg px-5 py-3 
                    betterhover:hover:shadow-purple-lg betterhover:dark:hover:shadow-dark-lg
                    cursor-pointer 
                    transition-all ease-in-out duration-300 transform betterhover:hover:-translate-y-2 betterhover:hover:scale-105 betterhover:hover:rotate-1"
    >
      <div className="flex-grow h-full">
        <p className="text-2xl text-center dark:text-white darkTrans font-mono">{title}</p>
        <p className="py-3 text-gray-700 dark:text-gray-400 darkTrans font-thin text-lg">{description}</p>
      </div>
      <div className="flex justify-center gap-x-12 gap-y-3 flex-wrap">
        {badges.map((b, idx) => {
          const src = `${imgUrl}${imgMap[b]}`;
          return <img width={35} height={35} src={src} key={idx} alt={`${b} logo`} />
        })}
     </div>
    </div>
    </a>
  )
}

export default ProjectCard;
