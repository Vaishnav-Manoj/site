import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCloud,
  faCalendarDay
} from "@fortawesome/free-solid-svg-icons";
import Time from '@/components/Time.jsx'
import Weather from '@/components/Weather.jsx'
import Link from 'next/link';
import NowPlaying from '@/components/NowPlaying.jsx'
export default function Hero() {
return (
<div className="mb-20">
   <h1 className="mt-5 mb-4">{hero.title}</h1>
   <p className="text-lg"><FontAwesomeIcon icon={faCloud}/> {hero.desc}</p>
  <p className="text-lg"><FontAwesomeIcon icon={faClock}/> {Time()}</p>
  <p><FontAwesomeIcon icon={faCloud}/> It's currently [weather] in xxxxx</p>
  <p><FontAwesomeIcon icon={faCloud}/> Currently listening to: []!</p>
  <p><FontAwesomeIcon icon={faCalendarDay}/> 69 Years old</p>
</div>
);
}