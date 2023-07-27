import React from 'react';
import './myproj.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

function Myproj(){
    return(
        <>
        <div className='wow col-lg-12 col-3 container-fluid'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand bg-danger-subtle" href="#"><img src="https://www.shutterstock.com/image-vector/skill-icon-isolated-personal-line-600w-1132516751.jpg"height="50px" width="50px"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <a class="nav-link active bg-danger-subtle m-3" aria-current="page" href="#">Find Candidates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link m-3" href="#">Find Jobs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link m-3" href="#">Find Companies</a>
        </li>
          </ul>
        
        <button class="btn btn-outline-success m-2"type="submit"><FontAwesomeIcon icon={faBell} /></button>
        <button class="btn btn-outline-success m-2"type="submit">Login</button>
        <button class="btn btn-outline-success bg-danger-subtle m-2" type="submit">Register</button>
      
    </div>
  </div>
</nav>
      <h1 className='hl col-lg-12 pt-5'>Find the candidates as per your requirements</h1>
           <div className='ji mx-auto m-5 row col-lg-6'>
                <div className='col-lg-4'><FontAwesomeIcon icon={faMagnifyingGlass}/>Job Title/Keyword</div> 
                <div className='col-lg-4'><span className='me-auto'>|</span><FontAwesomeIcon icon={faLocationDot} />Add Country/City</div> 
                <div className='col-lg-4'> <button className='ho  bg-danger-subtle'>Search</button></div>
               </div>
          </div>
          <div className='hl col-lg-12 justify-content-around'>
          <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-around">
 
    <button class="btn btn-outline-success me-2 " type="button">Experience<FontAwesomeIcon icon={faAngleDown} /></button>
    <button class="btn btn-outline-success me-2 " type="button">HTML/CSS<FontAwesomeIcon icon={faAngleDown} /></button>  
    <button class="btn btn-outline-success me-2 " type="button">Bangalore<FontAwesomeIcon icon={faAngleDown} /></button>
    <button class="btn btn-outline-success me-2 " type="button">UI/UX Designer<FontAwesomeIcon icon={faAngleDown} /></button>
    <button class="btn btn-outline-success me-2 " type="button">Gender<FontAwesomeIcon icon={faAngleDown} /></button>
    <button class="btn btn-outline-success me-2 " type="button">Age<FontAwesomeIcon icon={faAngleDown} /></button>

 </form>
</nav>
            </div>
            
               
                <div className='row col-lg-8 justify-content-around mx-auto mt-5'>
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhWxZKCNzO4sNGiZQvPBxCK0Jvw2v-EOdZuXnx2YMp4pTDffsiGkI2FHFaXDOFmiuZWw&usqp=CAU" height="160px"width="160px"></img>
                        <h4>Akshay</h4>
                        <h5>UI Designer</h5>
                        <button className='bg-danger-subtle mb-3'>View</button>
                        </div>
            
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://i.pinimg.com/236x/c1/bd/b3/c1bdb3a6e2246594ff03342db2f069f3.jpg" height="160px" width="160px"/>
                        <h4>Ram</h4>
                        <h5>Ux Designer</h5>
                        <button className='bg-danger-subtle mb-3'>View</button>
                        </div>
                    
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://img.freepik.com/premium-photo/asian-woman-standing-half-length-black-suit-businesswoman-holding-business-formal-suit-standing-office-room-concept-beautiful-confident-working-woman_102814-3676.jpg?w=2000"height="160px" width="160"></img>
                        <h4>Janani</h4>
                        <h5>UI/UX Designer</h5>
                        <button className='bg-danger-subtle'>View</button>
                        </div>
                        

                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://cdn.shopify.com/s/files/1/0075/3929/4305/files/SHOT_01B_044-800x1201-cb6eae5_600x600.jpg?v=1647564477" height="160px" width="160px"></img>
                        <h4>Kishore</h4>
                        <h5>UX Designer</h5>
                        <button className='bg-danger-subtle'>View</button>
                        </div>
                </div>
                <div className='row col-lg-8 justify-content-around mx-auto  mt-5'>
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhWxZKCNzO4sNGiZQvPBxCK0Jvw2v-EOdZuXnx2YMp4pTDffsiGkI2FHFaXDOFmiuZWw&usqp=CAU" height="160px"width="160px"></img>
                        <h4>Akshay</h4>
                        <h5>UI Designer</h5>
                        <button className='bg-danger-subtle mb-3'>View</button>
                        </div>
            
            
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://i.pinimg.com/236x/c1/bd/b3/c1bdb3a6e2246594ff03342db2f069f3.jpg" height="160px"width="160px"></img>
                        <h4>Ram</h4>
                        <h5>Ux Designer</h5>
                        <button className='bg-danger-subtle'>View</button>
                        </div>
                    
                
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://img.freepik.com/premium-photo/asian-woman-standing-half-length-black-suit-businesswoman-holding-business-formal-suit-standing-office-room-concept-beautiful-confident-working-woman_102814-3676.jpg?w=2000"height="160px" width="160px"></img>
                        <h4>Janani</h4>
                        <h5>UI/UX Designer</h5>
                        <button className='bg-danger-subtle'>View</button>
                        </div>
                        

                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://cdn.shopify.com/s/files/1/0075/3929/4305/files/SHOT_01B_044-800x1201-cb6eae5_600x600.jpg?v=1647564477" height="160px" width="160px"></img>
                        <h4>Kishore</h4>
                        <h5>UX Designer</h5>
                        <button className='bg-danger-subtle'>View</button>
                        </div>
                </div>
                <div className='row col-lg-8 justify-content-around mx-auto mt-5'>       
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhWxZKCNzO4sNGiZQvPBxCK0Jvw2v-EOdZuXnx2YMp4pTDffsiGkI2FHFaXDOFmiuZWw&usqp=CAU" height="160px"width="160px"></img>
                        <h4>Akshay</h4>
                        <h5>UI Designer</h5>
                        <button className='bg-danger-subtle mb-3'>View</button>
                        </div>
            
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://i.pinimg.com/236x/c1/bd/b3/c1bdb3a6e2246594ff03342db2f069f3.jpg" height="160px" width="160px"/>
                        <h4>Ram</h4>
                        <h5>Ux Designer</h5>
                        <button className='bg-danger-subtle mb-3'>View</button>
                        </div>
                    
                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://img.freepik.com/premium-photo/asian-woman-standing-half-length-black-suit-businesswoman-holding-business-formal-suit-standing-office-room-concept-beautiful-confident-working-woman_102814-3676.jpg?w=2000"height="160px" width="160"></img>
                        <h4>Janani</h4>
                        <h5>UI/UX Designer</h5>
                        <button className='bg-danger-subtle'>View</button>
                        </div>
                        

                <div className='josh col-lg-2 text-center'>
                        <FontAwesomeIcon icon={faBookmark} className='icon'/>
                        <img src="https://cdn.shopify.com/s/files/1/0075/3929/4305/files/SHOT_01B_044-800x1201-cb6eae5_600x600.jpg?v=1647564477" height="160px" width="160px"></img>
                        <h4>Kishore</h4>
                        <h5>UX Designer</h5>
                        <button className='bg-danger-subtle'>View</button>
                        </div>
            
            </div>
            <div>
            <footer>
                <h3 className='text-center pt-5'>See all results</h3>
                <FontAwesomeIcon icon={faAngleDown} className='col-12'/>
            </footer>
            </div>
            
         
         </>   
        
         
    )
}
export default Myproj;
