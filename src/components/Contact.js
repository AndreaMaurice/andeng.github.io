import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tb8c55p",
        "template_2ahqswa",
        form.current,
        "I1wwAil3Kq5khDqmu"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('You have successfully sent your message!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-full mx-48 grid grid-cols-1 text-center place-content-center text-slate-400">
      <p className="text-5xl text-rose-500 mb-10 font-bold">
        Let's get in touch!
      </p>
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 text-left mx-auto w-6/12">
        <label>Name</label>
        <input type="text" name="user_name" className="h-10 px-4 bg-slate-800 border-slate-700 border-2 mb-3 mt-1"/>
        <label>Email</label>
        <input type="email" name="user_email" className="h-10 px-4 bg-slate-800 border-slate-700 border-2 mb-3 mt-1"/>
        <label>Message</label>
        <textarea name="message"  className="h-24 px-4 py-2 bg-slate-800 border-slate-700 border-2 mb-5 mt-1"/>
        <input type="submit" value="Send" className="border-2 border-rose-500 text-rose-500 w-1/2 mx-auto h-9 hover:bg-rose-400 hover:border-rose-400 hover:text-slate-100"/>
      </form>
    </div>
  );
};

export default Contact;

{
  /*

<p className="text-3xl">andreamauricedg@gmail.com</p>
</div> */
}
