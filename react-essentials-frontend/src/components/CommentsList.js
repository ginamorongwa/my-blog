import React from 'react';

    
export function CommentsList({ comments }){
    try{
        return(
            <>
            <h3>Comments:</h3>
            {comments.map((comment, key) => (
                <div className="comment" key={key}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
            </>
        );
    }catch(error){
        console.log('Error in CommentsList');
        return(
            <h1>Error in CommentsList</h1>
        );
    }

}