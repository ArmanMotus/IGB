import React, {useRef, useEffect} from 'react'
import logo from '../../../src/logo-cdr.png'
import './header.css'
const nav__links =[
    {
        path: '#home',
        display: 'Home'
    },
    
    {
        path: '#about',
        display: 'About'
    },

    {
        path: '#contact',
        display: 'Contact us'
    },
]

const Header = ({theme, toggleTheme}) => {

  const headerRef =useRef(null)  
  
  const headerFunc = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('header__shrink')
    } else {
        headerRef.current.classList.remove('header__shrink')

    }
  }


  useEffect(()=>{
    window.addEventListener('scroll',headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  },[])
  return (
    <header className='header' ref={headerRef}>
        <div className='container'>
            <div className='nav__wrapper'>
                <div className='image'>
                    <img src={logo} width={150} height={88}/>
                </div>
            
                {/* navigation */}
                <div className='navigation'>
                    
                    <ul className='menu'>
                        {
                        nav__links.map((item,index)=>(
                            <li className='menu__item'>
                                <a href={item.path} className="menu__link">
                                {item.display}
                                </a>                          
                                </li>
                        ))
                    }
                    </ul>
                </div>
            
            </div>  
          </div>  
        
    </header>
  )
}

export default Header
