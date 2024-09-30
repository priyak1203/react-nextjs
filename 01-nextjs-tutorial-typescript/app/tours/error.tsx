'use client';

function Error({ error }: { error: Error }) {
  console.log(error);
  return <span className="text-2xl capitalize">there was an error...</span>;
}

export default Error;
