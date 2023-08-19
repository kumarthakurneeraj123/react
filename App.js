import React from "react";
import ReactDOM from "react-dom/client";
import farmerLogo from "./resources/images/heart.png";
import userIcon from "./resources/images/userIcon.png";
// 1 task
const heading = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "React from H1 tag"),
  React.createElement("h2", {}, "React from H2 tag"),
  React.createElement("h3", {}, "React from H3 tag"),
]);

// 2nd task
const headingJSX = (
  <div className="title" tabIndex={1}>
    <h1>React from JSX h1</h1>
    <h2>React from JSX h2</h2>
    <h3>React from JSX h3</h3>
  </div>
);

// 3rd task
const headingJSXComponent = () => (
  <div className="title" tabIndex={1}>
    <Title />
    <h1>React from JSX h1</h1>
    <h2>React from JSX h2</h2>
    <h3>React from JSX h3</h3>
  </div>
);

function Title() {
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
}

const HeaderComponent = () => {
  return (
    <div className="container">
      <div>
        <img className="img" alt="logo" src={farmerLogo} />
      </div>
      <div className="search">
        <input type="search" />
      </div>
      <div id="user-icon">
        <img className="img" src={userIcon} alt="user-icon" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
