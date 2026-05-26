export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-5">
      <div className="w-full max-w-xl rounded-[32px] bg-white p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-12">
        
        {/* ICON */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* TEXT */}
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black">
          Enquiry Sent Successfully
        </h1>

        <p className="mt-4 text-base leading-7 text-neutral-500">
          Thank you for reaching out to us. Our expedition team
          will contact you shortly with all the trek details.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          
          <a
            href="/"
            className="flex h-14 items-center justify-center rounded-2xl bg-black px-6 text-sm font-medium text-white transition hover:opacity-90"
          >
            Back To Home
          </a>

          <a
            href="https://wa.me/917017502703"
            target="_blank"
            rel="noreferrer"
            className="flex h-14 items-center justify-center rounded-2xl border border-black/10 bg-[#25D366] px-6 text-sm font-medium text-white transition hover:opacity-90"
          >
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}