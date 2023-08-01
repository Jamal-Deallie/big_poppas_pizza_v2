import Marquee from '@/containers/Marquee';
import styles from '@/styles/containers/Delivery.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import PizzaCutter from '@/svgs/PizzaCutter';

export default function Delivery() {
  return (
    <div className={cn(styles['delivery'], 'bg-secondary')}>
      <div className={cn(styles['marquee-cont'], 'bg-primary')}>
        <Marquee repeat={10} reverse={true} />
        <Marquee repeat={10} />
        <Marquee repeat={10} reverse={true} />
        <Marquee repeat={10} />
        <Marquee repeat={10} reverse={true} />
        <Marquee repeat={10} />
   
      </div>
      <div
        className={cn(
          styles['content'],
          'pb-lg-128 bg-secondary clr-tertiary'
        )}>
        <div className={cn(styles['doodle'], 'py-lg-32 py-sm-16')}>
          <PizzaCutter />
        </div>
        <div className={cn( styles['text-cont'], 'px-lg-40 px-sm-16 pb-sm-64' )}>
          <h1 className='title-lg tac'>Online delivery</h1>
          <p className='txt-md mt-lg-24 mt-sm-16 sm-tac'>
            Hungry for a delicious meal without leaving your home? Order food
            online from your favorite restaurants through popular delivery apps
            like DoorDash, Uber Eats, and Postmates! With just a few taps on
            your phone, you can explore a diverse range of cuisines, view menus,
            and have your food delivered straight to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}
