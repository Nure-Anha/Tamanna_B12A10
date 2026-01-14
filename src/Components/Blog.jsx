import React from "react";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 p-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Pet Blog</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our pet blog! Here we share stories, tips, and guides for pet lovers.
      </p>

      <div className="space-y-6">
        <article className="p-4 border rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Top 5 Dog Training Tips</h2>
          <p className="text-gray-600">
            Learn how to train your dog effectively and build a strong bond...
          </p>
        </article>

        <article className="p-4 border rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Healthy Nutrition for Cats</h2>
          <p className="text-gray-600">
            Feeding your cat right is crucial for their health and happiness...
          </p>
        </article>

        <article className="p-4 border rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Why Adopt Instead of Buy</h2>
          <p className="text-gray-600">
            Discover why adoption can save lives and how it benefits both pets and humans...
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
