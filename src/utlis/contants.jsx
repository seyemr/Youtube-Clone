import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';

// Kategoriler
export const categories = [
  { name: 'New',
    icon: <AiFillHome />, 
    type: 'home' 
  },
  {
    name: 'Trend',
    icon: <MdLocalFireDepartment />,
    type: 'category',
  },
  {
    name: 'Müzik',
    icon: <CgMusicNote />,
    type: 'category',
  },
  {
     name: 'Filmler', 
    icon: <FiFilm />, 
    type: 'category' 
  },
  {
     name: 'Canlı', 
    icon: <MdLiveTv />, 
    type: 'category' },
  {
    name: 'Oyun',
    icon: <IoGameControllerSharp />,
    type: 'category',
  },
  {
    name: 'Haberler',
    icon: <ImNewspaper />,
    type: 'category',
  },
  {
    name: 'Spor',
    icon: <GiDiamondTrophy />,
    type: 'category',
  },
  {
    name: 'Eğitici',
    icon: <RiLightbulbLine />,
    type: 'category',
  },
  {
    name: 'Güzellik & Kozmetik',
    icon: <GiEclipse />,
    type: 'category',
    divider: true,
  },
  { 
    name: 'Ayarlar', 
    icon: <FiSettings />, 
    type: 'menu'
  },
  {
    name: 'Report History',
    icon: <AiOutlineFlag />,
    type: 'menu',
  },
  {
     name: 'Yardım', 
     icon: <FiHelpCircle />, 
     type: 'menu' },
  {
    name: 'Send feedback',
    icon: <RiFeedbackLine />,
    type: 'menu',
  },
];

// API 'a istek atarken gerkeli olan veriler
export const options = {
  params: {
    hl: 'tr',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key': '2821677ac3msh034de3d28fe3c5ap19a069jsn0fc701ff2da9',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

// detayı isterken gönderilecek ayarlar
