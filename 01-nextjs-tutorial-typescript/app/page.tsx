import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl text-center">Home Page</h1>
      <Link
        href="/about"
        className="capitalize text-lg text-blue-700 inline-block mt-8 mx-4"
      >
        about page
      </Link>
      <Link
        href="/contact"
        className="capitalize text-lg text-blue-700 inline-block mt-8 mx-4"
      >
        contact page
      </Link>
    </div>
  );
}

export default HomePage;
