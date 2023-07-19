import React from 'react';
import { Link as Linkit} from 'react-router-dom';
import '../Design/style.css';

const Design = () => {
    const caseStudies = [
        {
            title: "Planting",
            role: ['UX/UI', 'UX Research'],
            location:"/planting",
            id: "planting"
        },
        {
            title: "Blahblahyaya",
            role: ['UX/UI', 'UX Research'],
            location: "/bbyy",
            id: "bbyy"
        },
    ]

    return (
        <section className="portfolio">
                <div className='glitch-wrapper'>
                    <div className='glitch' data-glitch='glitch'>
                    Case Studies:
                    </div>    
                </div>
                
            
                
                <div className="project-container">
                    {caseStudies.map ((project) => (     
                            <div className='link-outer-container'>   
                                <Linkit to={project.location}>
                                    <div className='link-inner-container'>
                                        {project.title}
                                        <span>{project.role.join(", ")}</span> 
                                    </div>
                                        
                                </Linkit>
                            </div>
                    ))}    
                </div>

                
             
        </section>
       
    )
};


export default Design;