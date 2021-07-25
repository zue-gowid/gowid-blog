import { Link } from "gatsby";
import * as React from "react";
import "../css/tailwind.css";
import NewContents from "./NewContents";

const IndexPage = () => {
  return (
    <main>
      <nav className="fixed top-4 left-0 h-16 w-full">
        <div className="w-11/12 h-full ml-auto mr-auto rounded-md shadow-sm bg-white">
          gowid blog
        </div>
      </nav>
      <section>
        <article className="h-64 bg-gradient-to-r from-green-400 to-blue-500"></article>
      </section>
      <section>
        <article className="flex">
          <div className="w-32 h-32 bg-green-200 mr-16">img</div>
          <div>
            <div className="text-green-400">#tags #test #test2</div>
            <h1 className="text-xl font-bold mt-4 mb-4">
              두려움 없이 성장하는
            </h1>
            <p>테크 리드로 성장하며 경험한 문화를 소개합니다.</p>
          </div>
        </article>
        <article className="flex">
          <div className="w-32 h-32 bg-green-200 mr-16">img</div>
          <div>
            <div className="text-green-400">#tags #test #test2</div>
            <h1 className="text-xl font-bold mt-4 mb-4">
              두려움 없이 성장하는
            </h1>
            <p>테크 리드로 성장하며 경험한 문화를 소개합니다.</p>
          </div>
        </article>
        <article className="flex">
          <div className="w-32 h-32 bg-green-200 mr-16">img</div>
          <div>
            <div className="text-green-400">#tags #test #test2</div>
            <h1 className="text-xl font-bold mt-4 mb-4">
              두려움 없이 성장하는
            </h1>
            <p>테크 리드로 성장하며 경험한 문화를 소개합니다.</p>
          </div>
        </article>
        <NewContents />
      </section>
      <Link to="/contents">Contents</Link>
      <footer>gowid 257-12-121344</footer>
    </main>
  );
};

export default IndexPage;
