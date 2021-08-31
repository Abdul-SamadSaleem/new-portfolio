import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'TRVL',
    desc: 'A website that could possibly be used for a REAL holiday company 🏖',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Attendance (Web and App)',
    desc:
      'An application used to store and track when employees start and end their shift.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Music Player',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
];

export default projects;
