import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white text-gray-900">
      {/* SEO */}
      <Helmet>
        <title>Page Not Found | WhatNext Online</title>
        <meta
          name="description"
          content="The page you're looking for doesn’t exist on WhatNext Online. Explore treks, winter adventures, or Auli events instead."
        />
        <meta property="og:title" content="Page Not Found | WhatNext Online" />
        <meta
          property="og:description"
          content="This page does not exist. Explore Himalayan treks, Auli events, and winter adventures curated by WhatNext Online."
        />
        <meta property="og:url" content="https://www.whatnextonline.in/404" />
        <link rel="canonical" href="https://www.whatnextonline.in/404" />
      </Helmet>

      {/* UI */}
      <h1 className="text-5xl md:text-6xl font-ubuntu font-bold text-brand mb-4">
        404
      </h1>

      <p className="text-lg text-gray-700 max-w-sm mb-6">
        Oops! The page you’re searching for isn’t here. Let’s get you back to
        exploring.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-brand text-white rounded-full font-medium shadow hover:bg-brand/90 transition"
      >
        Go Back Home
      </Link>

      <p className="mt-4 text-sm text-gray-500">
        Or explore our{" "}
        <Link to="/destinations" className="underline text-brand">
          Destinations
        </Link>
      </p>
    </div>
  );
}
