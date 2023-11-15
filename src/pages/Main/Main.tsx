
import style from "./Main.module.css"
import Posts from "./components/Posts/Posts";
const Main = () => {
  return ( <main className={style.posts__box}>
    <h1 style={{marginTop: '60px'}}>Posts Page</h1>
    <Posts/>
    </main> );
}
export default Main;