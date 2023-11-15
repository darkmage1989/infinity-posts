import { useNavigate, useParams } from "react-router-dom";
import style from "./PostPage.module.css";
import { useGetPostByIdApiQuery } from "../../app/shared/apis/postsApi";
import Button from '../../app/shared/ui/Button/Button';
const UserPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useGetPostByIdApiQuery({ id });
  const handleClick = () => {
    navigate(`/`);
  };

  if (isLoading) {
    return <div className={style.post__box}>Загрузка</div>;
  }

  if (error) {
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div className={style.post__box}>
          <div>An error has occurred:</div>
          <div>{message}</div>
        </div>
      );
    } else {
      return <div className={style.post__box}>{error.message}</div>;
    }
  }

  return (
    <div className={style.post__box}>
      <h2>{`№${data.id}  ${data.title}`}</h2>
      <span>{data.body}</span>
      <Button onClick={handleClick} name={"Назад"} />
    </div>
  );
};

export default UserPage;
