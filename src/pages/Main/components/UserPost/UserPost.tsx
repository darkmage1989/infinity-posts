
import { Data } from '../../../../../interfaces/DataInterface';
import Button from '../../../../shared/Button/Button';
import style from './UserPost.module.css'
interface UserPostProps {
  post: Data
}

const UserPost = ({post}:UserPostProps) => {
  return (
    <div className={style.post__box}>
      <span>{`№ ${post.id}`}</span>
      <strong >{` ${post.title}`}</strong>
      <span className={style.description}>{` ${post.body}`}</span>
      <Button name={'Просмотр'}/>
    </div>
  );
};

export default UserPost;
