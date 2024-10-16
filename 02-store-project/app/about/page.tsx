import db from '@/utils/db';

async function AboutPage() {
  const profile = await db.testProfile.create({
    data: {
      name: 'random name',
    },
  });

  const users = await db.testProfile.findMany();

  return (
    <div>
      <h2 className="text-2xl">About Page</h2>
      {users.map((user) => {
        return <h3 key={user.id}>{user.name}</h3>;
      })}
    </div>
  );
}

export default AboutPage;
