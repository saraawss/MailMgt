import React, { Component } from 'react';
const DataService = require('../../services/data-service');
var Convert = require('ansi-to-html');
var convert = new Convert();

class Form extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    		from: '',
	    		to: '',
	    		bcc: '',
	    		cc: '',
	    		subject: '',
	    		text: '',
	    		message: ''
	    };

	    this.handleChangeTo = this.handleChangeTo.bind(this);
	    this.handleChangeBcc = this.handleChangeBcc.bind(this);
	    this.handleChangeCc = this.handleChangeCc.bind(this);
	    this.handleChangeSubject = this.handleChangeSubject.bind(this);
	    this.handleChangeText = this.handleChangeText.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event) {
	    
	    event.preventDefault();
	    
	    let message_ = {
	    	message: ""
	    };
	    
	    DataService
        .submitData(this.state)
        .then(msg => {
        	message_ = msg;
        	this.setState({message: message_});
            return;
        })
        .catch(error => {
            return;
        });
	}
	
	handleChangeTo(event) {
	    this.setState({to: event.target.value});
	}
	
	handleChangeBcc(event) {
	    this.setState({bcc: event.target.value});
	}
	
	handleChangeCc(event) {
		this.setState({cc: event.target.value});
	}
	
	handleChangeSubject(event) {
	    this.setState({subject: event.target.value});
	}
	
	handleChangeText(event) {
	    this.setState({text: event.target.value});
	}
	
  render() {
	
	let alert;
	if(this.state.message !== "") {
		let message_ = {
		    	message: ""
		    };
		
		message_ = this.state.message;
		let msg = message_.message;
		msg = convert.toHtml(msg);
		
		if(message_.message !== "ok") {
			alert = <AlertError error={msg}/>
		}else{
			alert = <Alert error={msg}/>
		}
		
	}
	
    return (
    	<div className="container padding-top-30"> 
    	
    		{alert}
	    	<form onSubmit={this.handleSubmit}>
		        <input type="text" className="form-control" placeholder="To" value={this.state.to} onChange={this.handleChangeTo} required/>
		        <input type="text" className="form-control margin-top-10" placeholder="Bcc" value={this.state.bcc} onChange={this.handleChangeBcc}/>
		        <input type="text" className="form-control margin-top-10" placeholder="Cc" value={this.state.cc} onChange={this.handleChangeCc}/>
		        <input type="text" className="form-control margin-top-10" placeholder="Subject" value={this.state.subject} onChange={this.handleChangeSubject} required/>
		        <textarea className="form-control margin-top-10" value={this.state.text} placeholder="Message" rows="3" onChange={this.handleChangeText} required></textarea>
		        <button type="submit" className="btn btn-primary margin-top-10">Send</button>
	        </form>
	    </div>
    );
  }
}

const Alert = (props) => {
	const error = props.error;

	    return (
	    		
	    		<div>
	    		<div className="alert alert-success" role="alert">
	    		  Your mail has been sent.
	    		</div>
	    		</div>
	    		
	    );
	  
}

const AlertError = (props) => {
	const error = props.error;
	
	function createMarkup() {
		  return {__html: error};
	}

	    return (
	    		
	    		<div>
	    		<div className="alert alert-danger" role="alert">
	    			<div dangerouslySetInnerHTML={createMarkup()} />
	    		</div>
	    		</div>
	    		
	    );
	  
}

export default Form;