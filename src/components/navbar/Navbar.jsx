import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    console.log(123);
    window.scrollY > 0 ? setActive(true) : setActive(false);
    console.log(active);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => window.removeEventListener('scroll', isActive);
  }, []);

  const currentUser = {
    id: 1,
    userName: 'DragonFly',
    isSeller: true,
  };

  return (
    <div className={`${active || pathname !== '/' ? 'active' : ''} navbar`}>
      <div className='container'>
        <div className='logo'>
          <Link to='/' className='link'>
            <span className='text'>fiverr</span>
            <span className='dot'>.</span>
          </Link>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser?.isSeller && <button>Join</button>}
          {currentUser?.isSeller && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img
                src='https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <span>{currentUser?.name}</span>
              {open && (
                <div className='options'>
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to='/gigs'>
                        Gigs
                      </Link>
                      <Link className='link' to='/add'>
                        Add new Gigs
                      </Link>
                    </>
                  )}
                  <Link className='link' to='/orders'>
                    Order
                  </Link>
                  <Link className='link' to='/messages'>
                    Messages
                  </Link>
                  <Link className='link' to='/logout'>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className='menu'>
            <Link className='link menuLink' to='/'>
              Graphics & Design
            </Link>
            <Link className='link menuLink' to='/'>
              Video & Animation
            </Link>
            <Link className='link menuLink' to='/'>
              Writing & Translation
            </Link>
            <Link className='link menuLink' to='/'>
              AI Services
            </Link>
            <Link className='link menuLink' to='/'>
              Digital Marketing
            </Link>
            <Link className='link menuLink' to='/'>
              Music & Audio
            </Link>
            <Link className='link menuLink' to='/'>
              Programming & Tech
            </Link>
            <Link className='link menuLink' to='/'>
              Business
            </Link>
            <Link className='link menuLink' to='/'>
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
