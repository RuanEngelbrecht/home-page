import Image from 'next/image';
import profile from '@/assets/images/profile.jpg';
import { Github, Twitter } from 'lucide-react';
import SocialButton from '@/components/SocialButton';

export default function Home() {
  return (
    <main className="h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col justify-start items-center gap-12">
        <Image
          className="rounded-2xl ring-2 ring-white shadow-xl shadow-white/20 h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
          src={profile}
          width={250}
          height={250}
          alt="Profile image"
          placeholder="blur"
          quality={60}
          sizes="(max-width: 640px) 150px, 250px"
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Ruan Engelbrecht
          </h1>
          <p className="text-lg font-mono text-center text-white/40 md:text-xl">
            {'<Software Engineer />'}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
          <SocialButton
            icon={Github}
            href="https://github.com/RuanEngelbrecht"
          />
          <SocialButton
            icon={Twitter}
            href="https://twitter.com/ruanglebrackets"
          />
        </div>
      </div>
    </main>
  );
}
