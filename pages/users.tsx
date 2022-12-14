import { GetStaticProps } from "next";
import User from "../components/user";

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
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
