const CommentCard = ({ 
    postID, id, name, email, comment
 }) => {
    return (
       <div className="bg-white rounded-md max-w-lg h-64 hover:scale-105">
         <div className="text-start p-5 flex">
           <div className="pr-5 pt-2">
            <div className="text-sm text-white bg-blue-800 rounded-2xl w-20 h-12 flex items-center">
               <p className="mx-auto px-2">{postID}-{id}</p>
            </div>
           </div>
           <div className="flex flex-col gap-2">
            <h3 className="text-2xl leading-7 font-semibold text-gray-800">{name}</h3>
            <p className="text-md italic text-blue-700 font-light">{email}</p>
           </div>
         </div>
         <div className="text-start px-5 pb-8">
            <p className="text-black font-semibold">Comment :
               <br />
               <span className="text-gray-500 font-light">{comment}</span>
            </p>
         </div>
       </div>
    )

}

export default CommentCard;