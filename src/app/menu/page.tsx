import React from 'react';
import Card from '@/components/Card';
import GridLayout from '@/components/GridLayout';
import { getProducts } from '@/lib/database';
import SearchBar from '@/components/SearchBar';
import cn from 'classnames';
import { LinkButton } from '@/components/Button';

export const metadata = {
  title: 'Delicious Pizza Menu - Big Poppas Pizza',
  description:
    "Explore  our diverse menu, inspired by Notorious B.I.G's legacy",
};

export default async function MenuPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10;

  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined;
  const products = await getProducts({ page, limit, query: search });

  return (
    <section className='bg-primary min-height'>
      <div className='main-cont'>
        <div className='py-lg-128 py-sm-64'>
          <div className='title-max-w m-lg-auto m-sm-auto'>
            <h1 className='title-lg tac'>Ready to Pie</h1>
          </div>
          {products.length === 0 ? (
            <h1 className='title-lg tac'>{`Something went wrong`}</h1>
          ) : (
            <>
              <SearchBar />
              <GridLayout layoutCn={'mt-lg-96 mt-sm-64'}>
                {products.map(({ name, image, price, _id }) => {
                  return (
                    <Card key={_id} name={name} src={image} price={price} />
                  );
                })}
              </GridLayout>
            </>
          )}
          {page > 1 && (
            <div className='flex-center mt-lg-64 mt-sm-48'>
              <LinkButton
                size='sm'
                variant='secondary'
                classes='mr-lg-32 mr-sm-16'
                href={{
                  pathname: '/menu',
                  query: {
                    ...(search ? { search } : {}),
                    page: page > 1 ? page - 1 : 1,
                  },
                }}>
                Previous
              </LinkButton>
              <LinkButton
                classes={cn('ml-lg-32 ml-sm-16')}
                size='sm'
                variant={products.length < limit ? 'disabled' : 'secondary'}
                href={{
                  pathname: '/menu',
                  query: {
                    ...(search ? { search } : {}),
                    page: page + 1,
                  },
                }}>
                Next
              </LinkButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
