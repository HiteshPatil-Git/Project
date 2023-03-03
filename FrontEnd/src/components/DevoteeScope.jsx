import React, { Component } from 'react';
import back2 from '../images/back2.jpg'
import donation from '../images/donation.png';
import book from '../images/book.png'
import book2 from '../images/book2.png'
import book3 from '../images/book3.png'
import back3 from '../images/back3.jpg'
import swastik2 from '../images/swastik2.jpg'
import back6 from '../images/back6.jpg'
class UserActivities extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          
            id:''
        }
        this.donation=this.donation.bind(this);
        this.bookEpass=this.bookEpass.bind(this);
        this.updateProfile=this.updateProfile.bind(this);
    }

    updateProfile(id){
        this.props.history.push(`/update/${id}`);
    }
    logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }
    bookEpass(passId){
        this.props.history.push(`/book-Epass/${passId}`);
    }
    donation(){
        this.props.history.push('/donation');
    }
  
  
    componentDidMount(){
        const userData=window.localStorage.getItem('user');
            const UserDate=JSON.parse(userData);
           
                 let UserId=UserDate.id;
               console.log(UserId)
                 this.setState({id:UserId})
    }
    render() {
        return (
           <body className="container-fluid"  style={{
            width:'100vw',
            height:'100vh',
            margin:'0',
            alignItems:'center',
            overflow:'hidden',
           
            marginRight:'0',
            marginTop:'0',
            padding:'0',
           
          }}>
             
            <div className="bg-image"  style={{
       
    
       backgroundImage: `url('${back6}')` ,
       backgroundRepeat:'no-repeat',
       backgroundColor: 'lightblue',
       width:'100vw',
       height:'100vh',
       marginRight:'0px',
       backgroundSize: 'cover',
       alignItems:'center',
     padding:'0',
     margin:'0',
   }} >

        <p  align="right" >                   
        <button style={{marginRight:'10px'}} onClick={this.logout} className="btn btn-primary">Logout</button></p>
        <div className="row flex-row flex-nowrap" style={{ marginLeft: '0px',  marginTop:'80px',}}>
        
        <div className="col-3"  style={{   marginLeft: '0px',}}>
            <div className="card border border-warning shadow-0 mb-3" style={{maxWidth: "10rem"}}>  <button className="btn btn-primary" onClick={()=>this.updateProfile(this.state.id)}>Update Profile</button>
                <div >
                    <img  width="150" height="150" src={book3} ></img>
                </div>
            </div>
        </div>
        

        <div className="col-3">
            <div className="card border border-warning shadow-0 mb-3" style={{maxWidth: "10rem"}}>  <button className="btn btn-primary" onClick={() => this.bookEpass()} >Book-My-Darshan</button>
                <div>
                    <img   width="150" height="150" src={book} ></img>
                </div>
            </div>
        </div>
        <div className="col-3"  style={{   marginLeft: '0px',}}>
            <div className="card border border-warning shadow-0 mb-3" style={{maxWidth: "10rem"}}>  <button className="btn btn-primary" onClick={this.donation}>Bookings</button>
                <div >
                    <img  width="150" height="150" src={book2} ></img>
                </div>
            </div>
        </div>
        <div className="col-3"  style={{   marginLeft: '0px',}}>
            <div className="card border border-warning shadow-0 mb-3" style={{maxWidth: "10rem"}}>  <button className="btn btn-primary" onClick={this.donation}>Donation</button>
                <div >
                    <img  width="150" height="150" src={donation} ></img>
                </div>
            </div>
        </div>      
        
     
    </div>
    </div> 
      
        </body>
        );
    }
}

export default UserActivities;