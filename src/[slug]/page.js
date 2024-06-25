// import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from 'react'
// import fs from 'fs'
// import matter from "gray-matter"



export default function RecipePage(props) {

    const slug = props.params.slug
    const post = getPostMetadata(slug)
    console.log(post)
    return (
        <main>
            <article>
                {post.content}
            </article>
        </main>
    )
}