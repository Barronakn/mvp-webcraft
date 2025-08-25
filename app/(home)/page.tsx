'use client'
import Logo from "@/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center max-w-3xl mx-auto my-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Logo />
      <h1 className="text-sand-600 text-6xl">Hello world</h1>
      <h2 className="text-midnight-600 text-center text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</h2>

      <p className="text-terracotta-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-cream-700 text-base">Beatae dolores,</span> assumenda modi explicabo repudiandae quibusdam cupiditate deleniti et ipsa aspernatur possimus officia necessitatibus voluptas illum, sit temporibus quod quaerat, obcaecati ratione accusamus! Repellendus hic explicabo ad, corrupti soluta dolorum iure tenetur aspernatur laudantium similique cupiditate, recusandae quaerat temporibus sequi? Ducimus?</p>

      <button className="bg-sage-800 text-lg cursor-pointer text-white py-2 px-4 rounded-lg">Next</button>
    </div>
  );
}
