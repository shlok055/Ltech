import ClientOnly from './../ClientOnly';
import Container from './Container';
import EmptyState from './EmptyState';
import getListings, { IListingsParams } from './../actions/getListings';
import ListingCard from './listings/ListingCard';
import getCurrentUser from './../actions/getCurrentUser';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 60;


interface HomeProps {
  searchParams: IListingsParams;
}

const services = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default services;