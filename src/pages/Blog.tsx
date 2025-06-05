import { Link } from "react-router-dom";
import b_website from "../assets/b_website.jpg";
import workspace from "../assets/workspace.jpg";
import e_comerce from "../assets/e-comerce.jpg";
import branding from "../assets/branding.webp";
import speed from "../assets/speed.webp";
import security from "../assets/security.webp";
import StaggeredList from "@/components/animations/StaggeredList";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

const blogPosts = [
  {
    id: 1,
    image: b_website,
    title: "Why Every Business Needs a Website in 2025",
    excerpt:
      "Explore how a modern website builds trust, improves visibility, and drives sales — especially in today’s digital-first world.",
    date: "📅 June 5, 2025",
    slug: "why-every-business-needs-a-website",
  },
  {
    id: 2,
    image: workspace,
    title: "Our Web Design Process at MegTech",
    excerpt:
      "Take a behind-the-scenes look at how we plan, design, and launch beautiful websites that convert.",
    date: "📅 May 22, 2025",
    slug: "megtech-web-design-process",
  },
  {
    id: 3,
    image: e_comerce,
    title: "Top 5 Features Your Ecommerce Website Must Have",
    excerpt:
      "From mobile optimization to secure checkouts, here’s what separates high-converting online stores from the rest.",
    date: "📅 May 10, 2025",
    slug: "top-ecommerce-website-features",
  },
  {
    id: 4,
    image: branding,
    title: "How to Build a Memorable Online Brand",
    excerpt:
      "Learn the essential ingredients of building a digital brand that sticks in customers’ minds..",
    date: "📅 April 25, 2025",
    slug: "build-memorable-brand",
  },
  {
    id: 5,
    image: speed,
    title: "Why Website Speed Impacts Your Business",
    excerpt:
      "From SEO to sales, page load time directly affects user satisfaction and bottom-line results.",
    date: "📅 April 12, 2025",
    slug: "website-speed-impact",
  },
  {
    id: 6,
    image: security,
    title: "The Importance of Website Security in 2025",
    excerpt:
      "Protect your users and your reputation with these essential security practices.",
    date: "📅 March 30, 2025",
    slug: "importance-of-website-security",
  },
];

const Blog = () => {
  return (
    <section
      className="relative bg-[#0F0F1A] py-24 overflow-hidden mb-16"
      id="blog"
    >
      {/* Glowing blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500 opacity-40 rounded-full blur-[120px] z-0"></div>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-[140px] z-0"></div>
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-fuchsia-600 opacity-70 rounded-full blur-[130px] z-0"></div>

      <div className="relative z-10 px-6 md:px-20 text-white">
        <FadeInWhenVisible direction="left">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Blog</h2>
          <p className="mt-4 max-w-xl mx-auto">
            Insights, tips, and stories from the MegTech team to help you grow
            online, stay inspired, and succeed digitally.
          </p>
        </div>
       </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <StaggeredList>
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <p className="text-sm text-white/70 mb-1">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-white/90 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-pink-400 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>
    </section>
  );
};

export default Blog;
