import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATS Resume Checker — Test If Your Resume Passes ATS Systems",
  description: "Scan your resume against real ATS parsing engines. See exactly what gets filtered out and get actionable fixes to improve your pass rate."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4b908ab8-1b0f-4b7e-ae5f-bdcf4788d475"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
