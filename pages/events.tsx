import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();

  return {
    props: {
      eventList: data,
    },
  };
};

type Event = {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
};

export default function EventList({ eventList }: { eventList: Event[] }) {
  const [events, setevents] = useState<Event[]>(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const res = await fetch("http://localhost:4000/events?category=sports");
    const data = await res.json();
    setevents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
