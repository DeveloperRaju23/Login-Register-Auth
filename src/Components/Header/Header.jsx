// eslint-disable-next-line no-unused-vars

import { Link } from 'react-router-dom';




const Header = () => {


    // const auth = getAuth(app)
    // const handleSignOut = () => {
    //         signOut(auth)
    //         .then(result => {
    //             console.log(result)
    //             setUser(null)    
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
    return (
        <div className='flex justify-between items-center bg-black text-white h-20 px-36'>   
        <h2>Logo</h2>      
                <nav className='flex gap-8'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/profile">Profile</Link>
                </nav>
             <Link to="/login"><button className='primary_btn'>Login</button></Link>  
        </div>
    );
};

export default Header;