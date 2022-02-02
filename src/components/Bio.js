import { useSpring, animated } from 'react-spring';


const Bio = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { mass: 10, tension: 1500, friction: 1000 },
    delay: 250,
  })

  return (
    <animated.div style={props} className="flex justify-center pt-5 pb-8">
      <p className="dark:text-white w-4/5 darkTrans font-mono">
        I did BS Information Technology from <a className="link" target="_blank" rel="noopener noreferrer" href="https://kfueit.edu.pk">KFUEIT</a>. 
        Now I work as MERN Stack Developer at <a className="link" target="_blank" rel="noopener noreferrer" href="https://mercurysols.org">Mecury Sols</a>.
        Before that I did internship at Builtin-soft as .NET Core Developer. 
        You can find me on Twitter <a className="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?screen_name=mrizwanashiq">@mrizwanashiq</a>. 
      </p>
    </animated.div>
  )
}

export default Bio;
