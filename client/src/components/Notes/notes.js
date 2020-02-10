import React, { Component } from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
/*import { Container } from 'react-bootstrap' */
import noteService from '../../services/NoteService'
import "./notes.scss";


const resetTimeout = (id, newID) => {	
	clearTimeout(id)
	return newID	
}

const SaveMessage = ({visible}) => <div className={'saved' + (visible ? ' saved-visible' : '')}><p>Saved Successfully</p></div>

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: null,
			note: '',
			saved: false,
    };
  }
  componentDidMount() {
    this.fetchNote();
  } 

  editValue = note => {		
		this.setState({timeout: resetTimeout(this.state.timeout, setTimeout(this.saveNote, 400)), note: note})		
	};
	
	saveNote = async e => {	
    try {
      await noteService.storeNote(this.state.note, this.props.user.name)
      .then(() => {
        this.setState({...this.state, saved: true})		
        setTimeout(() => this.setState({...this.state, saved: false}), 1000)		
      });
    } catch (err) {
      console.log(err)
    }	
  };
  
  async fetchNote(){
    try{
      await noteService.retrieveNote(this.props.user.name)
      .then((data) => {
        this.setState({
          note: data.data.note
        })
      })
    } catch(err){
      console.log(err)
    }
  }
	

  render() {
    return (
      <Draggable enableUserSelectHack={false}>
        <div className="editor">
          <h5>Notes</h5>
          <textarea onChange={ e => this.editValue(e.currentTarget.value)} placeholder="Enter notes..." value={this.state.note}></textarea>
          <SaveMessage visible={this.state.saved} />
        </div>
      </Draggable>		
    );
  }
}

const mapStateToProps = (state) => {
  const { authentication } = state
  return {
    user: authentication[0]
  }
};
export default connect(mapStateToProps)(Note);