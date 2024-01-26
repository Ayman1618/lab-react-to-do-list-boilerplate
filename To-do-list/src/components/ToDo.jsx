import { Component } from "react";
import "./ToDo.css"

export default class ToDo extends Component{

    constructor(){
        super()
        this.state = {
            text : "",
            todo : []
        }
    }

    render(){

        let {text,todo} = this.state

        let handleChange = (event) => {
                this.setState({text : event.target.value})
        }

        let handleClick = () => {
            this.setState({
                todo : [...todo, text]
            })
        }

        let handleUpdate = (index) => {
            let updatedText = prompt("Enter a new To Do")
            let filterTodo = todo.map((element,i)=>{
                if(i == index){
                    return updatedText
                }
                return element
            })

            this.setState({
                todo : filterTodo
            })
        }

        let handleDelete = (index) => {
            // let deletedData = todo.filter((element,i) => i != index)
            todo.splice(index,1)
            this.setState({
                todo:todo
            })
        }

        return(
            <>
            <div>
                <input type="text" placeholder="Enter New Entry" onChange={handleChange}/>
                <button id="but" onClick={handleClick}>ADD ITEM</button>
            </div>

            <div>
                {
                    todo.map((element,i) => (
                        <div key = {i}>
                            <p>{element}</p>
                            <button onClick={()=> handleUpdate(i)}>Update Item</button>
                            <button onClick={()=> handleDelete(i)}>Delete Item</button>
                        </div>
                    ))
                }
            </div>

            </>
        )
    }
}