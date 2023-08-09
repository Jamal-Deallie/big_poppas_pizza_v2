import styles from '@/styles/containers/TenCommandments.module.scss';
import cn from 'classnames';
import RandomDoodles from '@/svgs/RandomDoodles';
import { commandmentItems } from '@/data/commandmentsItems';
import NutritionCard from '@/components/NutritionCard';

type Props = {};

export default function TenCommandments({}: Props) {
  return (
    <section className={cn(styles['commandments'], 'tertiary-theme')}>
      <div className='main-cont'>
        <div className='py-sm-64 py-lg-128'>
          <div className={styles['title-cont']}>
            <div className={styles['doodle-cont']}>
              <RandomDoodles />
            </div>
            <h1 className='tac border title-lg'>
              {`IT’S`} ALL GOOD BABY BABY
            </h1>
          </div>
          <div className={cn(styles['card-cont'], 'mt-sm-48 mt-lg-96')}>
            <div className='grid-inner'>
              {commandmentItems.map(
                ({ id, title, icon, commandment, reverse }) => (
                  <div key={id} className={styles['card-wrap']}>
                    <NutritionCard
                      title={title}
                      icon={icon}
                      commandment={commandment}
                      reverse={reverse}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
