const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function ToursPage() {
  const tours = await fetchTours();
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {tours.map((tour) => {
        return (
          <h2 key={tour.id} className="mt-2">
            {tour.name}
          </h2>
        );
      })}
    </section>
  );
}

export default ToursPage;
