export default function User({
  user,
}: {
  user: { name: string; email: string };
}) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}
