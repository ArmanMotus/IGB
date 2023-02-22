import React from 'react'
import './footer.css'


const quickLinks01 =[
    {
        path: '#',
        display: 'Phone: +374 (XX) XXX XXX'
    },
    {
        path: '#',
        display: 'Emial: info@XXX.com'
    },
    {
        path: '#',
        display: '00XX, Yerevan - Armenia'
    },
    {
        path: '#',
        display: 'XXXXXXXXXXXXXXXXXXXXXXXXX'
    },
    
]

const social =[
    {
        path: <a href='https://www.facebook.com' ><i class="ri-facebook-box-fill"></i></a> ,
        display: <a href='https://www.linkedin.com'><i class="ri-linkedin-box-fill"></i></a>
    },
    
]

const Footer = () => {
  return ( <footer className="footer" id='contact'>
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>IGBMotion</h2>
                <p className='description'>Technology Solutions for Your Every Need</p>

                <p className="small__text description">©2023 IGBMotion. All rights reserved.</p>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__link-title">Contact us</h3>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index)=>(
                            <li className="quick__link-item" key={index}>
                                <a>{item.display}</a>
                                
                            </li>
                        ))
                    }
                    
                </ul>
                
                <ul className="quick__links">
                    {
                        social.map((item,index)=>(
                            <div className="quick__link-item-social" key={index}>
                                {item.path}{item.display}
                            </div>
                        ))
                    }
                    
                </ul>
            </div>


                    

        </div>
    </div>
  </footer>

  
    
  )
}

export default Footer
