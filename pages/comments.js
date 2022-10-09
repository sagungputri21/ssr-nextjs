import React from "react";
import CommentCard from "../components/CommentCard";

const Comments = ({comments}) => {
    return (
    <div>
      <div>
        <h2 className="text-center text-3xl my-12 font-bold">There are comments of post 1-100
        <br/> from {" "}
        <a href="https://jsonplaceholder.typicode.com" 
          className="font-normal text-2xl underline underline-offset-4"
          target="_blank"
        >
          jsonplaceholder.typicode.com
        </a>
        </h2>
      </div>
        <section>
          <div className="flex flex-wrap gap-8 justify-center">
            {comments.map(data => (
              <div className="" key={data.postId}>
                {/* <p>Comment of post {data.postId}</p> */}
                <div key={data.id}>
                  <CommentCard
                    postID={data.postId}
                    id={data.id}
                    name={data.name}
                    email={data.email}
                    comment={data.body} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
}

export default Comments;

export async function getServerSideProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await response.json();

    return { 
        props: {  comments } 
    }
}