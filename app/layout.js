import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import TopNav from "@/components/TopNav/TopNav";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F1EEEE] p-[1rem]">
        <TopNav />
        <div className="flex gap-3">
          <div className="bg-[#FAFAFA] w-[20%] h-screen  rounded-lg">
            <Navbar />
          </div>
          <div className="w-[80%]">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
