import { useState,useEffect } from "react"
import experiences from '../../assets/doc/experience.json'
import categorias from '../../assets/doc/categ.json'
import "./experience.css"


export function Experience(){

    const [categ, setCateg] = useState(categorias.categoria[2].name)
    const [a,setA] = useState("")
    const [estado,useStado] = useState(false)
    const [newArray,useNewArray] = useState(experiences.experience)

    useEffect(()=>{
       
        const list = []
        for(var x = 0;x<newArray.length;x++){
      
            for(var y = 0; y<newArray[x].categ.length;y++){
                
                if(newArray[x].categ[y] == categ){
                    list.push(newArray[x])
                }
            }
        }
        useNewArray(list)
        
    },[estado])



    function changeExperience( event ){
        setCateg(event.target.innerHTML)
        useStado(!estado)
        useNewArray([...experiences.experience])
        if(a != ""){
            a.classList.remove('active')
           
        }

        event.target.className += "active"
        setA(event.target)

    }


    return(
        <section id="experiencia"  className="sect_aboutMe">
            <h1 className="sectionTitle">Mi experiencia</h1>
            <section className="section_categ">
                {
                    categorias.categoria.map((categoria,index)=> {

                        return(
                            <button id={index} onClick={changeExperience} key={index}>{categoria.name}</button>
                        )
                    })
                }
            </section>
            <div className='separateExperience'>

                {
                newArray?.map((experience, index) => {       
                        return(

                            <>
                                {
                                    index % 2 == 0 ? 
                                        <section key={experience.name}  className="cont_experience">
                                            <div className="info_Experience">
                                                <h2>{experience.name}</h2>
                                                <p className="info_Experience_p">
                                                {experience.desc}
                                                </p>
                                                
                                            </div>
                                            
                                            <div className="data_experience">
                                                <img className="data_experience_img" src={experience.logo} alt="" />
                                                <div className="time_exp">
                                                    <span >→</span>
                                                    <p>{experience.date}</p>
                                                </div>
                                            </div>
                                        </section> :
                                        <section className="cont_experience reverse">
                                            <div className="info_Experience">
                                                <h2>{experience.name}</h2>
                                                <p className="info_Experience_p">
                                                {experience.desc}
                                                </p>
                                                
                                            </div>
                                            
                                            <div className="data_experience_reverse">
                                                <img className="data_experience_img" src={experience.logo} alt="" />
                                                <div className="time_exp_reverse">
                                                    <span className="rotated">→</span>
                                                    <p>{experience.date}</p>
                                                </div>
                                            </div>
                                        </section>
                                }

                            
                            </>
                        )

                    })
                }
            

            </div>

        </section>
    )
}