import {useState} from "react";
import "./newsletter.css";

const fakeSendEmail = async () =>{
return new Promise((resolve)=> setTimeout(resolve,1000));
};

const NewsletterSubscribe = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [result,setResult]=useState(null);
  const [isPending,setIsPending]=useState(false);


 
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault();

  if (!name || !email) {
    setResult({
    type:"error",
    message:`please fill in your fullname and email address.`,
    });
    return;
  }
    setIsPending(true);
    fakeSendEmail().then(()=>{
      setResult({
        type:"success",
        message:`You have sucecessfully subscribed o my newsletter`
      });
      setName("");
      setEmail("");
      setIsPending(false);
    });
;
return (
  <>
  {result && <p className={`message ${result.type}`}>{result.message}</p>}
  {isPending && <p className="message loading">Loading..</p>}
  <form onSubmit={handleSubmit}>
    <h3>Join the newsletter</h3>
    <div>
      <label htmlFor="name">Name</label>
      <input 
      type="text"
      name="name"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      
      <input 
      type="email"
      name="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
  />
    </div>
    <div>
      <button type="submit">Subscribe</button>
    </div>

  </form>
  
  
  </>
)
}


};











export default NewsletterSubscribe;
