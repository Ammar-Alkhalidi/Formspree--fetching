import React from "react";

const FormSpreeForm = () => {
  return (
    <main>
      <h1>Feedback Form</h1>
      <form
        action="https://formspree.io/f/mkgnavwj"
        target="_top"
        method="POST"
      >
        <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
          <div style={{ marginBottom: "1em" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "0.5em",
                fontWeight: "bold",
              }}
            >
              Title
            </label>
            <input
              id="name"
              name="name"
              required
              style={{
                width: "100%",
                padding: "0.5em",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "1em" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.5em",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              style={{
                width: "100%",
                padding: "0.5em",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "1em" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "0.5em",
                fontWeight: "bold",
              }}
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              style={{
                width: "100%",
                padding: "0.5em",
                border: "1px solid #ccc",
                borderRadius: "4px",
                resize: "none",
              }}
              rows="4"
            ></textarea>
          </div>
        </fieldset>
        <button
          type="submit"
          style={{
            /* display: "block",
            width: "100%",
            padding: "0.7em",
            border: "none",
            backgroundColor: "#4caf50",
            color: "white",
            fontSize: "1em",
            cursor: "pointer",
            borderRadius: "4px", */
          }}
        >
          Send
        </button>
      </form>
    </main>
  );
};

export default FormSpreeForm;
