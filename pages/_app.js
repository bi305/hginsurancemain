import "antd/dist/antd.css";
import "./index.css";
import Nav from "../components/Nav";
// import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

// const progress = new ProgressBar({
//   size: 3,
//   color: "#B9C3CC",
//   className: "bar-of-progress",
//   delay: 100,
// });

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Nav>
      <Component {...pageProps} />
    </Nav>
  );
}

export default MyApp;
