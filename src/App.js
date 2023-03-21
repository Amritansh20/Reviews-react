import Review from "./Reviews";
import React from "react";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title" style={{ marginTop: "2rem" }}>
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          <Review></Review>
        </div>
      </section>
    </main>
  );
}

export default App;
