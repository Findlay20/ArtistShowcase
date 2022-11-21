import React, {useState} from "react";



export const CommentForm = () => {

    const [comment, setState] = useState("");

    async function handleSubmit(e) {
        e.preventDefault()

        const comment = e.target.querySelector('input').value
        
        setState(comment)
        
        return comment
    }

    return <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Add a comment</h2>
            <input type="text" name="comment" placeholder="Add a comment..."/>
            </form>
} 
