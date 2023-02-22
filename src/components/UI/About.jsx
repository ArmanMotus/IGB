

import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about1.jpeg'


const chooseData =[
    {
        icon: 'ri-code-s-slash-line',
        title: 'SOFTWARE DEVELOPMENT',
        desc: 'Designing, implementing, and testing software solutions to meet the needs of end-users.'
    },

    {
        icon: 'ri-folder-shield-2-fill',
        title: 'SECURITY',
        desc: 'Secure coding techniques, secure architecture and design, security testing, and secure deployment procedures. It also involves ongoing monitoring and maintenance to ensure that the software remains secure.'
    },

    {
        icon: 'ri-cloud-fill',
        title: 'CLOUD SOLUTIONS',
        desc: 'Store data, deploy applications, and share resources.'
    },

    
]


const About = ({theme}) => {
  return (
    <section id = "about">
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about_content'>
                    <h5 className='subtitle'>About us</h5>
                    
                    <p className='description about__content-desc'>
                   IGBMotion LLC is an IT development company that specializes in providing software development services and creating custom technology solutions for businesses and organizations. We employ software developers, engineers, designers, project managers, and other professionals who work together to design, develop, and maintain software applications, websites, mobile apps, and other digital products. We use all the needed programming languages, tools, and frameworks to create and deploy digital solutions that meet the specific needs and requirements of their clients. We often work with a variety of industries, such as finance, healthcare, education, and e-commerce, to provide solutions that improve efficiency, productivity, and user experience. IGB motion may also offer consulting services, helping their clients to identify and solve technology-related problems or optimize their existing IT infrastructure.
                    </p>
                    
                    <div className='choose__item-wrapper'>
                        {chooseData.map((item,index)=>(
                            <div className="choose__us-item">
                                <span className="choose__us-icon">
                                    <i class={item.icon}></i>
                                </span>
                                <div>
                                    <h4 className="choose__us-title">{item.title}</h4>
                                    <p className="description_about">
                                        {item.desc}
                                    </p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About
