import "./styles.css";

import React, { useState } from "react";

function UsernameForm() {
  const usernameInputRef = React.useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = usernameInputRef.current?.value || "";
    alert(`You entered: ${username}`);
    // Additional logic can be added here
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameInputRef} // Attach the ref to the input
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UsernameForm;
