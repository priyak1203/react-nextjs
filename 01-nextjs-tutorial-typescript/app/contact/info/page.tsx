import Link from 'next/link';

function InfoPage() {
  return (
    <div>
      <h1 className="text-5xl text-center">Info Page</h1>
      <Link
        href="/"
        className="capitalize text-md text-blue-700 inline-block mt-8 mx-2"
      >
        go to homepage
      </Link>
    </div>
  );
}

export default InfoPage;
