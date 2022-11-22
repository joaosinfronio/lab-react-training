import { useState } from 'react';
const LikeButton = () => {
  const [like, likeChange] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleLikeClick = () => {
    likeChange(like + 1);
  };
  return (
    <div>
      <button
        onClick={handleLikeClick}
        style={{
          backgroundColor: colors[like % 5],
          margin: '10px',
          padding: '20px',
          fontSize: '20px',
        }}
      >
        {like === 0 ? like + ' Like' : like + ' Likes'}
      </button>
    </div>
  );
};

export default LikeButton;
