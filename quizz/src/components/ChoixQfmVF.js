import React from "react"
import './CardQuestion.css'
import './ButtonQcm.css'
import './ChoixQfmVF.css'
import Category from './Category'
import { Link } from 'react-router-dom'

class ChoixQfmVF extends React.Component {
    constructor(props) {
        super(props)
    }
    
  render() {
      console.log(this.props.categoryId)
  return (
    <div id="cardContentQcm1">
       
        
        
        <Category name={this.props.location.state.categoryName} image={this.props.location.state.categoryImage} /> 
        
        <p>You prefer QCM or True False ?</p>
        
        
        <div className='cardContent'>
            
            
            <div>
            
       <Link to={{pathname:"/question",
                state: {categoryImage:this.props.location.state.categoryImage, categoryName:this.props.location.state.categoryName, categoryId: this.props.location.state.categoryId}}}>
                <button className='qcmButton'>QCM</button>
        </Link>        
                <button className='qcmButton'>True-False</button>
            </div>
        </div>  

    </div>
  )}}   

  
  export default ChoixQfmVF;