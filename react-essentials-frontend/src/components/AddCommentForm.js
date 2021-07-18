import React, { useState} from 'react';


export function AddCommentForm({ articleName, setArticleInfo}) {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");
    
    const addComment = async () => {
        const result = await fetch(`/api/article/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'content-Type': 'application/json'
            }
        });
        const body = await result.json();
        console.log('body2:', body);
        //setArticleInfo(body);
        setArticleInfo({upvotes:body.upvotes, comments:body.comments});
        setUsername("");
        setCommentText("");
    }

    return (
        <div id='add-comment-form'>
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows='4' cols='50' value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    );
}; 