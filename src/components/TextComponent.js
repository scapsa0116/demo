import React from 'react'
import { TextInput } from '../components/TextInput'



class TextComponent extends React.Component{

    state = {
        text: ''
    }
    
      
    
    OnSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const data = this.state
        console.log(data)
      }

      handleChange=(event)=> {
        event.preventDefault();
        this.setState({
            [event.target.text]: event.target.value
        });
      }
    


    render(){
        const { state } = this
        return(
            <div>
                <form onSubmit={this.OnSubmit} className="bg-gray-300">
                <label className="block">
                <span className="text-gray-700">Textarea</span>
                <textarea  
                type="text" 
                value = { state.text } 
                onChange={this.handleChange} 
                className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                onChange={ e => this.setState({ text : e.target.value }) }></textarea> 
                </label>
                <input type="submit" value="Submit" />             
                </form>
                <TextInput text = {this.state.text}/>
                </div>
                
                
        )
    }
}


export default TextComponent