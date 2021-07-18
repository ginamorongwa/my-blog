import React from "react";
import { articles as articleContent} from './article-content'
import { ArticlesList  as List} from '../components/ArticlesList'


export function ArticlesList() {
    return (
      <>
        <h1>Articles</h1>
        <List articles={articleContent} />
      </>
    )
  }