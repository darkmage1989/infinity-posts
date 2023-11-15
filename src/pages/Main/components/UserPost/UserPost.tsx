import { useNavigate } from "react-router";
import { Data } from "../../../../../interfaces/DataInterface";
import Button from "../../../../app/shared/ui/Button/Button";
import style from "./UserPost.module.css";
interface UserPostProps {
  post: Data;
}

const UserPost = ({ post }: UserPostProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/postpage/${post.id}`);
  };
  return (
    <div className={style.post__box}>
      <div className={style.post__text__box}>
        <span>{`№ ${post.id}`}</span>
        <strong>{` ${post.title}`}</strong>
        <span className={style.description}>{` ${post.body}`}</span>
      </div>
      <Button onClick={handleClick} name={"Просмотр"} />
    </div>
  );
};

export default UserPost;
