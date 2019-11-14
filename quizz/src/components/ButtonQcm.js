import React from "react"
import './ButtonQcm.css'


    class ButtonQcm extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                win: false,
                lost: false,
                buttonWinOrder: ''
            }
            this.nextQuestion = this.nextQuestion.bind(this)
            this.checkWin = this.checkWin.bind(this)
            this.checkLost = this.checkLost.bind(this)
        }

        buttonWinOrder() {
            this.setState({
                buttonWinOrder: Math.floor(Math.random()*Math.floor(4)+1) 
            })
        }

        checkWin() {
            this.setState({win: true});
            this.props.incrementScore()
        }

        checkLost() {
            this.setState({lost: true})
        }

        nextQuestion() {
            this.setState({win: false, lost :false});
            this.props.getQuestions();
            this.props.incrementQuestionNumber()
          }

        componentDidMount() {
            this.buttonWinOrder();
            } 

    render() {
       
    return (   
        
    <div className='cardContent'>
  
        <div className= 'button-order'>
            <button
                onClick={this.checkWin}
                style={{ order: this.state.buttonWinOrder }}
                className={this.state.win||this.state.lost?'winButton':'qcmButton'}>
                {this.props.correct_answer.replace(/&quot;|&#039;/g,"'").replace(/amp;/g,'')}
            </button>

            <button onClick={this.checkLost} 
                className={this.state.lost?'lostButton':'qcmButton'}>
                {this.props.incorrect_answer[0].replace(/&quot;|&#039;/g,"'").replace(/amp;/g,'')}
            </button>
        
            <button onClick={this.checkLost}
                className={this.state.lost?'lostButton':'qcmButton'}>
                {this.props.incorrect_answer[1].replace(/&quot;|&#039;/g,"'").replace(/amp;/g,'')}
            </button>

            <button onClick={this.checkLost}
            
                className={this.state.lost?'lostButton':'qcmButton'}>
                {this.props.incorrect_answer[2].replace(/&quot;|&#039;/g,"'").replace(/amp;/g,'')}
            </button>

        </div> 

        <div className={this.state.win?'imageWin':'noImage'} >
             <img className='winLogo' src={"https://i.ibb.co/bFwKdvc/gagne.png"} alt="Win" ></img>
             
        </div> 

        <div className={this.state.lost?'imageLost':'noImage'}>
             <img className='lostLogo' src={"https://i.ibb.co/99nLRBf/lost.png"} alt="Lost" ></img> 
             
        </div> 
        <div><button onClick={this.nextQuestion}>Next question</button></div>    
    </div>
    )   
 }
}

export default ButtonQcm;
