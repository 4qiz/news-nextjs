"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const SearchFormReset = (props: Props) => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X />
      </Link>
    </button>
  );
};

export default SearchFormReset;
