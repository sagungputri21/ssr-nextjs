const CommentCard = ({ 
    postID, id, name, email, comment
 }) => {
    return (
       <div className="bg-white rounded-md max-w-md hover:scale-105">
         <div className="text-start p-5">
           <div className="text-sm text-white bg-blue-800 rounded-full">
            <p>{postID}-{id}</p>
           </div>
           <div className="flex flex-col gap-2 mb-5">
            <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
            <p className="text-md italic text-blue-700 font-light">{email}</p>
           </div>
           <p className="text-black font-semibold">Comment :
              <br />
              <span className="text-gray-500 font-light">{comment}</span>
            </p>
         </div>
       </div>
    )

}

export default CommentCard;