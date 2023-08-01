import Intro from '@/containers/Intro';
import Hero from '@/containers/Hero';
import Feature from '@/containers/Feature';
import Flavors from '@/containers/Flavors';
import Reviews from '@/containers/Reviews';
import TenCommandments from '@/containers/TenCommandments';
import Video from '@/containers/Delivery';
import FollowUs from '@/containers/FollowUs';

export default function Home() {
  return (
    <div className='of-hidden'>
      <Hero />
      <Feature />
      <Intro />
      <TenCommandments />
      <Video />
      {/* <Video src='https://res.cloudinary.com/dtwk4dm3g/video/upload/v1688349711/bp_pizza-vid_lfw5d3.mp4' /> */}
      <Flavors />
      <Reviews />
      <FollowUs />
    </div>
  );
}
