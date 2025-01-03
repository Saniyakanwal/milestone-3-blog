const CommentsList = ({ comments }: { comments: string[] }) => {
    return (
      <div>
        <h3 className="font-semibold text-2xl md:ml-20 ml-7 mt-7">Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li  className="md:ml-24 ml-9 mt-3 text-lg"
            key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommentsList;
  