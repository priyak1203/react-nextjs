import mountainImg from '@/images/mountains.jpg';
import Image from 'next/image';

function page({ params }: { params: { id: string } }) {
  console.log(params);

  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="mt-4 flex gap-x-4">
        {/* local image */}
        <div>
          <Image src={mountainImg} alt="mountain" />
          <h2>Local Image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
