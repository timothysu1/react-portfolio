import { Link, useLocation } from 'react-router-dom';

export default function Nav() {

  const currentPage = useLocation().pathname;

  return (
    <ul className='nav nav-table'>
      <li className='nav-item'>
        <Link
          to='/'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/portfolio'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/contact'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/resume'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
};