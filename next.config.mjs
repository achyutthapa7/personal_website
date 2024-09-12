/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // env: {
  //   MAIN_USER: "achyut777thapa@gmail.com",
  //   PASS: "heor espd mojh wwqn",
  //   MONGO_URI:
  //     "mongodb+srv://achyut777thapa:4olOO5Ri53W5Xd2T@cluster0.e2quq.mongodb.net/my_website?retryWrites=true&w=majority",
  // },
};

export default nextConfig;
