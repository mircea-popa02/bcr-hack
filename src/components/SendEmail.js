// Your imports...
import UseEmail from "../hooks/useEmail";

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
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ margin: "1rem 0", fontSize: "2rem" }}>
          {submitted && "Done, email was sent!"}
          {error ? `Unexpected error: ${error}` : null}
          {loading && "Email is being sent now..."}
        </div>
        <div style={{ margin: "1rem 0" }}>
          <button onClick={sendExample}>Send test data</button>
        </div>
      </header>
    </div>
  );
}

export default SendEmail;
