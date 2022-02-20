import React from "react";
import OneBookmark from "../components/OneBookmark";

const BookmarkPage = () => {
  return (
    <section className="max-w-xl mx-auto p-3 my-3 bg-white border rounded border-gray-200 shadow-md">
      <h1 className="pb-3 font-semibold text-lg">Bookmarks</h1>
        <OneBookmark/>
        <OneBookmark/>
        <OneBookmark/>
        <OneBookmark/>
        <OneBookmark/>
        <OneBookmark/>
        <OneBookmark/>
    </section>
  );
};

export default BookmarkPage;
