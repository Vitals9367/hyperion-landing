import Image from "next/image";

export function ClientsSection() {
  return (
    <section className="overflow-hidden border-y border-gray-100 bg-gray-50 py-8">
      <div className="max-w-full px-4 sm:px-6">
        <div className="mb-6 text-center text-sm text-gray-500">
          Trusted by innovative companies
        </div>
        <div className="flex items-center justify-center gap-12 overflow-hidden opacity-70">
          <div className="flex animate-[scroll_25s_linear_infinite] items-center gap-12">
            <Image
              src="/images/partners/logo1.png"
              alt="Client 1"
              width={100}
              height={40}
            />
            <Image
              src="/images/partners/logo2.png"
              alt="Client 2"
              width={100}
              height={40}
            />
            <Image
              src="/images/partners/logo3.png"
              alt="Client 3"
              width={100}
              height={40}
            />
            <Image
              src="/images/partners/logo4.png"
              alt="Client 4"
              width={100}
              height={40}
            />
            <Image
              src="/images/partners/logo5.png"
              alt="Client 5"
              width={100}
              height={40}
            />
            <Image
              src="/images/partners/logo1.png"
              alt="Client 1"
              width={100}
              height={40}
            />
            <Image
              src="/images/partners/logo2.png"
              alt="Client 2"
              width={100}
              height={40}
            />
            <Image
              src="/images/partners/logo3.png"
              alt="Client 3"
              width={100}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
