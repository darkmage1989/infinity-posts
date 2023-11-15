
import style from "./Main.module.css"
import Posts from "./components/Posts/Posts";
const Main = () => {
  return ( <main className={style.posts__box}>
    <h1 style={{textAlign: 'center', margin:'50px'}}>Главная страница</h1>
    <Posts/>
    </main> );
}
export default Main;