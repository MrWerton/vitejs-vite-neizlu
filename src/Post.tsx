import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { Comment } from './Comment';
import { User } from './_userMock';

interface ICommentProps {
  user: {
    name: string;
    photo: string;
  };
  body: string;
  id: string;
  createdAt: Date;
  likes: number;
}
export const Post = () => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<ICommentProps[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  function handleAddComment(e: FormEvent): void {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments((prevState) => [
        ...prevState,
        {
          body: comment,
          user: User,
          id: v4(),
          createdAt: new Date(),
          likes: 0,
        },
      ]);
      setComment('');
    }
  }
  function handleComment(e: ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }
  const keyEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      handleAddComment(event);
    }
  };

  return (
    <div className="post">
      <div className="header">
        <div className="user">
          <img src="https://github.com/mrwerton.png" alt="photo_user" />
          <div>
            <strong>Jane Cooper</strong>
            <span>Design</span>
          </div>
        </div>
        <span>Publica 20 : 20</span>
      </div>
      <div className="content">
        <p>lorem Ipson</p>
        <p>
          Lorem ipson caj cja cdac acd a cdc ahcha cdah chadcad chad chad chadoc
          ad chad cjoa cd ad cadcb
        </p>
        <a href="">lalalaal</a>
        <a href="">#</a>
        <a href="">#</a>
        <a href="">#</a>
      </div>
      <form ref={formRef} onSubmit={handleAddComment} className="form_comment">
        <label>
          Deixar seu FeedBack
          <textarea
            onKeyUp={keyEnter}
            value={comment}
            onChange={handleComment}
            placeholder="Post a comment..."
          />
        </label>
        <button ref={buttonRef} type="submit">
          Post
        </button>
      </form>
      <div className="comments">
        {comments.map((item) => (
          <Comment {...item} />
        ))}
      </div>
    </div>
  );
};
