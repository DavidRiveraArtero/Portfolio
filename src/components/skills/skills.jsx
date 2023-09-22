import './skills.css'
export function Skills(){
    const skills = ['svg/html.svg','svg/css.svg','svg/react.svg','svg/javascript.svg','svg/angular.svg','svg/laravel.svg','svg/tailwind.svg','svg/vite.svg','svg/bootstrap.svg','svg/nodejs.svg']
    return(
        <>
            <section className='section_skills' style={{zIndex:1}}>
                <h1 className='sectionTitle'>SKILLS</h1>

                <section className='all_skills'>
                   
                        {
                            skills.map((skill,index)=>{
                                return (
                                    <img alt='iconLang' key={index} src={skill}></img>
                                )
                            })
                        }
                    
                </section>
            </section>  
        </>
    )
}