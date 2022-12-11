// Your imports...
import UseEmail from "../hooks/useEmail";
import classes from "../components/SendEmail.module.css";
// Example component
function SendEmail(props) {
  // You don't need to manage state by yourself
  // use the variables below
  const { loading, submitted, error, sendEmail } = UseEmail(
    "https://public.herotofu.com/v1/93737000-787b-11ed-a126-b172cf164538"
  );

  const sendExample = () => {
    // Can be any data, static and dynamic
    sendEmail({
      nume: props.name,
      email: props.email,
      data: props.date,
      locatia: props.address,
    });
  };

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className={classes.msj}>
          {submitted && "Gata, e-mailul a fost trimis!"}
          {error ? `${error}` : null}
          {loading && "Se trimite..."}
        </div>
        <div >
          <button className={classes.sendButton} onClick={sendExample}>Confirmare</button>
        </div>
      </header>
    </div>
  );
}

export default SendEmail;
