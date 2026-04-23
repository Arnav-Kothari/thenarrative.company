import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/score": ["./knowledge/**/*"],
    "/api/angles": ["./knowledge/**/*"],
  },
};

export default nextConfig;
