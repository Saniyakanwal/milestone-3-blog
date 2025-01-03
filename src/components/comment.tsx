'use client'
import { useState } from 'react';

const CommentForm = ({ onSubmit }: { onSubmit: (comment: string) => void }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
        required
        className="md:w-[800px]  w-full p-2  md:ml-20 border border-b-gray-400 mt-6 rounded-md"
      />
           <button type="submit" className="mt-3 md:ml-96 hover:bg-blue-700 px-4 py-2 bg-blue-500 text-white rounded-md">
     Submit Comment
   </button>
    </form>
   </div>
  );
};

export default CommentForm;
