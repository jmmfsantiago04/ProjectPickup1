import React from 'react';
import Image from 'next/image';

const ExpressTable: React.FC = () => {
  return (
    <section className="w-full max-w-[80rem] h-auto py-24 px-8 sm:px-16 md:px-32 gap-[3.375rem] mx-auto">
      <h2 className="text-left text-4xl md:text-5xl font-bold leading-tight mb-[3.375rem]">
        Express Rate Table (Unit: KRW)
      </h2>
      <article className="relative">
        <Image 
          src="/express-table.png"
          alt="Express Rate Table (Unit : KRW)"
          layout="responsive"
          width={1102}
          height={1087}
          className="block mx-auto"
        />
      </article>
    </section>
  );
};

export default ExpressTable;