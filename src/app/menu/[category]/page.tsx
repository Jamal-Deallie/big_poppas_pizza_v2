import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Card from '@/components/Card';
import GridLayout from '@/components/GridLayout';
import { getCategoryProducts } from '@/lib/database';

// export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = await getCategoryProducts(params.category);

  if (!category) return notFound();

  return {
    title: params.category,
    description: `Big Poppas ${params.category}s`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: {
    category: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const products = await getCategoryProducts(params.category);
 
  return (
    <section className='bg-primary py-lg-128 py-sm-64 min-heigh'>
      <div className='main-cont'>
        <div className='title-max-w m-lg-auto m-sm-auto'>
          <h1 className='title-lg tac'>{`Big Poppas ${params.category}`}</h1>
        </div>
        {products.length === 0 ? (
          <h1 className='title-lg tac'>{`Something went wrong`}</h1>
        ) : (
          <GridLayout layoutCn={'mt-sm-64 mt-lg-96'}>
            {products.map(({ name, image, price, _id }) => {
              return <Card key={_id} name={name} src={image} price={price} />;
            })}
          </GridLayout>
        )}
      </div>
    </section>
  );
}
