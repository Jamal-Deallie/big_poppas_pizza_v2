import styles from '@/styles/components/NutritionCard.module.scss';
import cn from 'classnames';
import Meat from '@/svgs/Chicken';
import Cheese from '@/svgs/Cheese';
import Bread from '@/svgs/Bread';
import Vegetables from '@/svgs/Vegetables';

export default function NutritionCard({
  title,
  icon,
  commandment,
  reverse,
}: {
  title: string;
  icon: string;
  commandment: string;
  reverse?: boolean;
}) {
  function renderedIcon(icon: string) {
    switch (icon) {
      case 'meat':
        return <Meat />;
      case 'vegetables':
        return <Vegetables />;
      case 'cheese':
        return <Cheese />;
      case 'bread':
        return <Bread />;
    }
  }

  return (
    <div className={cn(reverse ? styles['card-reverse'] : styles['card'])}>
      <div className={cn(styles[`icon-${icon}`], styles['icon'])}>
        {renderedIcon(icon)}
      </div>
      <div className={styles['title-cont']}>
        <h1 className='title-sm clr-primary border mt-sm-16 mt-lg-32 tac'>{title}</h1>
        <p className='txt-md mt-lg-16 mt-sm-16 clr-secondary tac'>{commandment}</p>
      </div>
    </div>
  );
}
