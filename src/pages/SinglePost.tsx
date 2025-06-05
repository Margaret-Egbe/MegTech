import { useParams } from "react-router-dom";
import blogPosts from "@/data/blogPosts";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

const SinglePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-600 py-20">Blog post not found.</div>
    );
  }

  return (
    <>
      {/* Hero Section with Background Image */}
      <FadeInWhenVisible>
        <div
          style={{ backgroundImage: `url(${post.image})` }}
          className="bg-cover md:h-[60vh] h-[40vh] flex items-center justify-center text-white"
        >
          <div className="bg-black/50 w-full h-full flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-center px-4">
              {post.title}
            </h1>
          </div>
        </div>
      </FadeInWhenVisible>

      <div className="flex flex-col py-8 px-4 md:px-16 justify-between items-center gap-7">
        {/* Excerpt */}
        <FadeInWhenVisible direction="up">
          <h1 className="text-pink-400 text-center text-lg md:text-2xl font-medium mb-4">
            {post.excerpt}
          </h1>
        </FadeInWhenVisible>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Post Image */}
          <FadeInWhenVisible direction="left">
            <img
              className="md:h-[100vh] h-[40vh] rounded-tl-[50px] rounded-br-[50px]"
              src={post.image}
              alt={post.title}
            />
          </FadeInWhenVisible>

          {/* Article Content */}
          <FadeInWhenVisible direction="right">
            <div className="bg-white mt-10 px-6 md:px-16 py-16 max-w-3xl mx-auto text-[#1D1D4E] mb-24 shadow-xl rounded-3xl border border-gray-200">
              <p className="text-sm text-gray-500 mb-10 text-center italic">
                Published on {post.date}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {post.title}
              </h1>

              {/* 1. Introduction */}
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p className="mb-6">{post.introduction}</p>

              {/* 2. Key Takeaways */}
              <h2 className="text-2xl font-semibold mb-2">Key Takeaways</h2>

              {post.takeaways && (
                <ul className="list-disc pl-5">
                  {post.takeaways.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="prose prose-lg prose-p:text-gray-700 prose-h2:text-[#261C82] prose-h2:font-semibold mt-10 prose-h2:mb-4 max-w-none leading-5 space-y-5">
                {post.content.map((block, idx) =>
                  block.type === "heading" ? (
                    <h2
                      className="text-xl font-semibold text-[#261C82]"
                      key={idx}
                    >
                      {block.text}
                    </h2>
                  ) : (
                    <p key={idx}>{block.text}</p>
                  )
                )}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
