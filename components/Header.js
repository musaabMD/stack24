// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import ButtonSignin from "./ButtonSignin";
// import logo from "@/app/icon.png";
// import config from "@/config";

// const links = [
//   {
//     href: "/#pricing",
//     label: "Pricing",
//   },
//   {
//     href: "/#testimonials",
//     label: "Reviews",
//   },
//   {
//     href: "/#faq",
//     label: "FAQ",
//   },
// ];

// const cta = <ButtonSignin extraStyle="btn-primary" />;

// // A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// // The header is responsive, and on mobile, the links are hidden behind a burger button.
// const Header = () => {
//   const searchParams = useSearchParams();
//   const [isOpen, setIsOpen] = useState(false);

//   // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
//   useEffect(() => {
//     setIsOpen(false);
//   }, [searchParams]);

//   return (
//     <header className="bg-base-200">
//       <nav
//         className="container flex items-center justify-between px-8 py-4 mx-auto"
//         aria-label="Global"
//       >
//         {/* Your logo/name on large screens */}
//         <div className="flex lg:flex-1">
//           <Link
//             className="flex items-center gap-2 shrink-0 "
//             href="/"
//             title={`${config.appName} hompage`}
//           >
//             <Image
//               src={logo}
//               alt={`${config.appName} logo`}
//               className="w-8"
//               placeholder="blur"
//               priority={true}
//               width={32}
//               height={32}
//             />
//             <span className="font-extrabold text-lg">{config.appName}</span>
//           </Link>
//         </div>
//         {/* Burger button to open menu on mobile */}
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
//             onClick={() => setIsOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6 text-base-content"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Your links on large screens */}
//         <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
//           {links.map((link) => (
//             <Link
//               href={link.href}
//               key={link.href}
//               className="link link-hover"
//               title={link.label}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* CTA on large screens */}
//         <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div>
//       </nav>

//       {/* Mobile menu, show/hide based on menu state. */}
//       <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
//         <div
//           className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
//         >
//           {/* Your logo/name on small screens */}
//           <div className="flex items-center justify-between">
//             <Link
//               className="flex items-center gap-2 shrink-0 "
//               title={`${config.appName} hompage`}
//               href="/"
//             >
//               <Image
//                 src={logo}
//                 alt={`${config.appName} logo`}
//                 className="w-8"
//                 placeholder="blur"
//                 priority={true}
//                 width={32}
//                 height={32}
//               />
//               <span className="font-extrabold text-lg">{config.appName}</span>
//             </Link>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5"
//               onClick={() => setIsOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Your links on small screens */}
//           <div className="flow-root mt-6">
//             <div className="py-4">
//               <div className="flex flex-col gap-y-4 items-start">
//                 {links.map((link) => (
//                   <Link
//                     href={link.href}
//                     key={link.href}
//                     className="link link-hover"
//                     title={link.label}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="divider"></div>
//             {/* Your CTA on small screens */}
//             <div className="flex flex-col">{cta}</div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart2, PieChart, PlusCircle } from 'lucide-react'; // Icons for the navigation bar

export default function Header() {
  const pathname = usePathname();

  const navigationLinks = [
    { name: 'Home', href: '/', icon: <Home /> },
    { name: 'Markets', href: '/markets', icon: <BarChart2 /> },
    { name: 'Stats', href: '/stats', icon: <PieChart /> },
    { name: 'Plus', href: '/plus', icon: <PlusCircle /> },

  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden sm:flex items-center justify-between bg-black py-4 px-6">
        <div className="text-white text-3xl font-bold">99Makers</div>
        <nav className="flex space-x-10 justify-center flex-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xl font-medium ${
                pathname === link.href ? 'text-white underline' : 'text-white/80'
              } hover:text-white`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Tab Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <ul className="flex justify-around py-2">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`flex flex-col items-center ${
                  pathname === link.href ? 'text-[#FF395C]' : 'text-gray-600'
                }`}
              >
                <div className="w-6 h-6">{link.icon}</div>
                <span className="text-xs mt-1">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
