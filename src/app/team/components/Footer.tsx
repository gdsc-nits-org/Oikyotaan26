// src/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center">
      <Image
        src="/images/footer.png"
        alt="Oikyotaan Footer Design"
        width={1920}
        height={400}
        className="mx-auto"
      />
    </footer>
  );
}
