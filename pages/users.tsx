import { GetStaticProps } from "next";

type User = {
  id: string;
  name: string;
  email: string;
};

export default function UserList({ users }: { users: User[] }) {
  return (
    <>
      <h1>List of Users</h1>;
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
};
