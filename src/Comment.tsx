import { useMemo } from 'react';
import { User } from './_userMock';
import { ThumbsUp, Trash } from 'phosphor-react';
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
export const Comment = ({ body, user, createdAt, likes }: ICommentProps) => {
  const dateFormatter = useMemo(
    () =>
      Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'medium',
      }).format(createdAt),
    [createdAt]
  );

  return (
    <div className="comment">
      <img src={user.photo} alt={user.name} />
      <div className="content_post">
        <div className="info">
          <strong>
            {user.name} <span>{user.name === User.name && '(voce)'}</span>
          </strong>

          <Trash size={32} weight="thin" />

          <span className="created_at">{dateFormatter}</span>
        </div>
        <div className="body">alalalal</div>
      </div>
      <div className="options_post">
        <ThumbsUp size={24} weight="thin" />
        <span>Aplaudir</span>
        <span>{likes}</span>
      </div>
    </div>
  );
};
