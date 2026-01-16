// import { Link } from "react-router-dom";

import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";

// export default function PasswordReset() {
//   return (
//     <div className="min-h-screen bg-gray-900">
//       <div className="relative min-h-screen">
//         <img
//           src="/images/banners/landing-p-hero-01.png"
//           alt="Boarding room"
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/45" />

//         <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
//           <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
//             <div className="flex items-center justify-between">
//               <Link
//                 to="/login"
//                 className="text-xs font-semibold text-gray-500 transition hover:text-gray-900"
//               >
//                 &larr; Go Back
//               </Link>
//               <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-xs font-semibold text-gray-500">
//                 ?
//               </span>
//             </div>

//             <div className="mt-4 text-center">
//               <h1 className="font-display text-2xl text-gray-900 sm:text-3xl">
//                 Forgot Your Password?
//               </h1>
//               <p className="mt-2 text-sm text-gray-500">
//                 Enter your phone number to reset your password.
//               </p>
//             </div>

//             <form className="mx-auto mt-6 w-full max-w-sm space-y-4">
//               <div className="space-y-2">
//                 <label className="text-xs font-semibold text-gray-500">
//                   Enter Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="0777123456"
//                   className="h-12 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="h-12 w-full rounded-lg bg-[#4a4966] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3d3c5a]"
//               >
//                 Confirm
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function PasswordReset() {
  return (
    <>
      <div className="mt-4 text-center">
        <h1 className="font-display text-2xl text-gray-900 sm:text-3xl">
          Forgot Your Password?
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter your phone number to reset your password.
        </p>
      </div>

      <form className="mx-auto mt-6 w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Enter Phone Number
          </label>
          <Input type="tel" name="phone" placeholder="0777123456" />
        </div>

        <Button type="submit">Confirm</Button>
      </form>
    </>
  );
}
