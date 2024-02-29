/** @type {import('next').NextConfig} */
const nextConfig = {
   /*  images: {
        domains: ['www.google.com','img-cdn.tnwcdn.com'],
      } */
      images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
      }      
};

export default nextConfig;
