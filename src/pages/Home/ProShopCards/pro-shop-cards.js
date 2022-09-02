import proLogos from '../../../assets/images/pro-shop/pro-logos.webp';
import proGaming from '../../../assets/images/pro-shop/pro-gaming.webp';
import proGraphics from '../../../assets/images/pro-shop/pro-graphics.webp';
import proAudio from '../../../assets/images/pro-shop/pro-audio.webp';
import proVideo from '../../../assets/images/pro-shop/pro-video.webp';
import proSignage from '../../../assets/images/pro-shop/pro-signage.webp';
import proAi from '../../../assets/images/pro-shop/pro-ai.webp';

const cards = [
  {
    logo: proLogos,
    image: proGaming,
    logoPosition: '-170px',
    description: `The fastest gaming PCs - plus a huge range of peripherals for
      the ultimate gaming experience.`,
    linkText: 'Visit Gaming Store',
    url: '',
  },
  {
    logo: proLogos,
    image: proGraphics,
    logoPosition: '-510px',
    description: `Workstations and servers for graphics-intensive workflows such
      as AEC & BIM, CAD & CAE and M & E.`,
    linkText: 'Visit Graphics Store',
    url: '',
  },
  {
    logo: proLogos,
    image: proAudio,
    logoPosition: '0',
    description: `Computer based music and audio production - plus the best in
      music technology and instruments.`,
    linkText: 'Visit Audio Store',
    url: '',
  },
  {
    logo: proLogos,
    image: proVideo,
    logoPosition: '-340px',
    description: `Film and broadcast equipment, workstations for professional
      video and media production workflows.`,
    linkText: 'Visit Video Store',
    url: '',
  },
  {
    image: proSignage,
    heading: 'Digital Signage Solutions',
    description: `Reinvent the way you engage with customers with solutions that
      provide invaluable insights and customer data.`,
    linkText: 'View Signage Solutions',
    url: '',
  },
  {
    image: proAi,
    heading: 'Deep Learning & AI',
    description: `Desktop, datacentre and cloud solutions for developing and
      deploying deep learning and AI models.`,
    linkText: 'Find Out More',
    url: '',
  },
];

export default cards;
