import { skills } from "./skills"
import "./skill.css"
const Skill = () => {
  return (
    <div className="containers" id="skills">
    <div className="wrapper">
      <h4 className="title-1">Skills</h4>
      <p className="description">Here are some of my skills on which I have been learning and working.
      </p>
      <div className="skill_container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <h4 className="skill_title">{skill.title}</h4>
            <div className="skill_list">
              {skill.skills.map((item, index) => (
                <div className="skill_item" key={index}>
                  <img className="skill_img" src={item.image}/>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
  )
}

export default Skill