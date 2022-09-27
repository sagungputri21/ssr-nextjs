import React from "react";
import CommentCard from "../components/CommentCard";

const Comments = () => {
    return (
     <section>
       <div className="flex flex-wrap gap-8">
        {props.comments?.map(data => (
          <div className="" key={data.postID}>
            <p>Comment of post {data.postID}</p>
            <div key={data.id}>
                <CommentCard 
                postID={data.postID}
                id={data.id}
                name={data.name}
                email={data.email}
                comment={data.body}
                />
            </div>
          </div>
        ))}
       </div>
     </section>
        
    )
}

export default Comments;

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await response.json();

    return { 
        props: {  comments } 
    }
}