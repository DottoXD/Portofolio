import Style from "../styles/Index.module.css";

function NotFound() {
  return (
    <div class={Style.App}>
      <h1 className={Style.background}>Dotto</h1>
      <div id={Style.main}>
        <h1 className={Style.title}>
          Page not <span className={Style.special}>found</span>.
        </h1>
        <div id={Style.cards}>
          <div className={Style.card}>
            <div /> Go back
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
