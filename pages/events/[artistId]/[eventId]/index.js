import { getArtistDetails, getEvent } from '../../../../data';
import classes from './index.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import EventsList from '../../../../components/events/EventsList';
import ArtistBio from '../../../../components/artists/ArtistBio';
import { useQuery } from 'react-query';
import { getEventDates, getTickets } from '../../../../utils/db';

export default function EventPage(props) {
  const { event, artistDetails } = props;

  const router = useRouter();
  const eventsPage = !router.asPath.match('#bio');

  const { data, isLoading, isError } = useQuery(
    ['eventDates', event.id],
    () => {
      return getEventDates(event);
    }
  );

  if (isLoading) return <div>React Skelleton should be here</div>;
  if (isError) return <div>Error component should be here</div>;

  return (
    <div className={classes.cont}>
      <div className={classes.title}>
        <h1>{event.artist.name}</h1>
        <h2>{event.title}</h2>
        <div className={classes.nav}>
          <Link href='#'>Events</Link>
          <Link href='#bio'>Bio</Link>
        </div>
      </div>
      {eventsPage ? (
        <EventsList eventDates={data} />
      ) : (
        <ArtistBio artistDetails={artistDetails} />
      )}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { artistId, eventId } = ctx.query;
  const event = await getEvent(artistId, eventId);
  const artistDetails = (await getArtistDetails(artistId)) || null;
  return {
    props: { event, artistDetails },
  };
}
