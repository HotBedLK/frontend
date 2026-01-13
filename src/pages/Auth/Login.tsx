import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="relative hidden w-1/2 md:block">
          <img
            src="/images/banners/landing-p-hero-01.png"
            alt="Boarding room"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <img
            src="/images/hotbedlk-logo.png"
            alt="Hotbed.lk"
            className="absolute left-6 top-6 h-8"
          />
        </div>

        <div className="flex w-full flex-col gap-6 p-6 sm:p-10 md:w-1/2">
          <Link
            to="/"
            className="w-fit text-xs font-semibold text-gray-500 transition hover:text-gray-900"
          >
            &larr; Go Back
          </Link>

          <div>
            <h1 className="font-display text-2xl text-gray-900">Welcome</h1>
            <p className="mt-1 text-sm text-gray-500">
              Create a account or login with hotbed.lk
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="0777123456"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="****************"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#4a4966] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3d3c5a]"
            >
              Login
            </button>

            <p className="text-center text-xs text-gray-500">
              Forget password?{" "}
              <button type="button" className="text-blue-600 hover:underline">
                Click here
              </button>
            </p>

            <p className="text-center text-xs text-gray-400">
              Terms of use | Privacy policy
            </p>
          </form>

          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <h2 className="font-display text-sm text-gray-900">
              How We Work ?
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              At Hotbed.lk, we make finding and managing boarding places simple
              and efficient. Seekers can quickly find properties with real-time
              availability and advanced filters, while owners can manage
              listings without repeated posts. Our platform saves time, reduces
              frustration, and ensures reliable, up-to-date information—creating
              a seamless experience for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
