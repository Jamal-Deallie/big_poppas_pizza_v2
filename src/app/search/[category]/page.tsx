import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Card from '@/components/Card';
import GridLayout from '@/components/GridLayout';
import { getCategoryProducts } from '@/lib/database';

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
  console.log(products);
  return (
    <section className='bg-primary'>
      <div className='main-cont'>
        <div className='py-lg-128 py-sm-64'>
          <GridLayout title={'Ready to Pie'} titleCn={'title-lg tac'} layoutCn={'mt-sm-64'}>
            {products.map(({ name, image, price, _id }) => {
              return <Card key={_id} name={name} src={image} price={price} />;
            })}
          </GridLayout>
        </div>
      </div>
    </section>
  );
}
