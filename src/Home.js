import React, { useState } from "react";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    setError("");
    setShortUrl("");

    if (!longUrl.trim()) {
      setError("Please enter a valid URL!");
      return;
    }

    try {
      const proxyUrl = "https://api.allorigins.win/get?url=";

      const targetUrl = `https://is.gd/create.php?format=simple&url=${encodeURIComponent(
        longUrl
      )}${alias ? `&shorturl=${encodeURIComponent(alias)}` : ""}`;

      const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
      if (!response.ok) throw new Error("Failed to shorten URL");

      const data = await response.json();
      const short = data.contents.trim();
      setShortUrl(short);
    } catch (err) {
      console.error(err);
      setError("Error shortening URL. Please try again later.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Link Shortener</h2>

      <input
        type="text"
        placeholder="Enter a long URL..."
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{
          width: "60%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />

      <input
        type="text"
        placeholder="Custom alias (optional)"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        style={{
          width: "60%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginTop: "10px",
        }}
      />
      <br />

      <button
        onClick={handleShorten}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Shorten
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>✅ Shortened URL:</h3>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;
