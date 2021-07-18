import React from 'react';

export function UpvoteSection({ articleName, upvotes, setArticleInfo }){
    const upvoteArticle = async () => {
        const result = await fetch(`/api/article/${articleName}/upvote`, {
            method: "post",
        });
        const body = await result.json();
        console.log('body2:', body);
        //setArticleInfo(body);
        setArticleInfo({upvotes:body.upvotes, comments:body.comments});
    }
    return (
        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}>Add Upvote</button>
            <p>This post has been upvoted {upvotes} times</p>
        </div>
    );
};