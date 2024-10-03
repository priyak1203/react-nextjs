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
          <Image
            src={mountainImg}
            alt="mountain"
            priority
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local Image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
