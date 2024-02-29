/** @type {import('next').NextConfig} */
const nextConfig = {
   /*  images: {
        domains: ['www.google.com','img-cdn.tnwcdn.com'],
      } */
      images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.britannica.com",
            },
            {
                protocol: "https",
                hostname: "img-cdn.tnwcdn.com",
            }
        ]/*  */
      }

      
};

export default nextConfig;
