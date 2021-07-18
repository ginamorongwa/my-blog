import React, { useState, useEffect } from "react";
import { articles as articleContent} from './article-content'
import { ArticlesList } from "../components/ArticlesList";
import { AddCommentForm } from "../components/AddCommentForm";
import { CommentsList } from "../components/CommentsList";
import { UpvoteSection } from "../components/UpvoteSection";
import { Whoops404 } from "./Whoops404";
import { useParams } from "react-router-dom"


export function Article() {
  const params = useParams();
  const name = params.name;
  
  const article = articleContent.find( article => article.name === name );
  
  const [articleInfo, setArticleInfo] = useState({upvotes:0, comments: []}); //({_id:"",name:"", upvotes:0, comments: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/article/${name}`)
      const body = await result.json();
      console.log('body1:', body);
      //setArticleInfo(body);
      setArticleInfo({upvotes:body.upvotes, comments:body.comments});

      
    }
    fetchData();
    //setArticleInfo({upvotes: Math.ceil(Math.random() * 10)})
  }, [name]);


  if (!article) return <Whoops404 />

  const otherArticles = articleContent.filter(article => article.name !== name)
  console.log('articleInfo.comments:', articleInfo.comments)
  console.log('name:', name)
  console.log('upvotes:', articleInfo.upvotes)

  return (
    <>
      <h1>{article.title}</h1>
      <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3> Other Articles:</h3>
      <ArticlesList articles={otherArticles}/>
    </>
  )
}