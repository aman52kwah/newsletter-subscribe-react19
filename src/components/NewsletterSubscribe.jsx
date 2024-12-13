import { useState } from "react";
import "./newsletter.css";

const fakeSendEmail = async () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const NewsletterSubscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      if (!name || !email) {
        return {
          type: "error",
          message: `Please fill in your name and email.`,
        };
      }

      fakeSendEmail().then(() => {
        return {
          type: "success",
          message: `You have succesfully subscribed!`,
        };
        setName("");
        setEmail("");
      });
    },
    null
  );

  return (
    <>
      {result && <p className={`message ${result.type}`}>{result.message}</p>}
      {isPending && <p className="message loading">Loading ...</p>}
      <form action={submitAction}>
        <h3>Join the newsletter</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </>
  );
};

export default NewsletterSubscribe;
