import proAi from '../../../../public/images/pro-shop/pro-ai.webp';
import proAudio from '../../../../public/images/pro-shop/pro-audio.webp';
import proGaming from '../../../../public/images/pro-shop/pro-gaming.webp';
import proGraphics from '../../../../public/images/pro-shop/pro-graphics.webp';
import proLogos from '../../../../public/images/pro-shop/pro-logos.webp';
import proSignage from '../../../../public/images/pro-shop/pro-signage.webp';
import proVideo from '../../../../public/images/pro-shop/pro-video.webp';

const PRO_SHOP_CARDS = [
  {
    logo: proLogos,
    image: proGaming,
    logoPosition: '-170px',
    description: `The fastest gaming PCs - plus a huge range of peripherals for
      the ultimate gaming experience.`,
    linkText: 'Visit Gaming Store',
    href: '/',
  },
  {
    logo: proLogos,
    image: proGraphics,
    logoPosition: '-510px',
    description: `Workstations and servers for graphics-intensive workflows such
      as AEC & BIM, CAD & CAE and M & E.`,
    linkText: 'Visit Graphics Store',
    href: '/',
  },
  {
    logo: proLogos,
    image: proAudio,
    logoPosition: '0',
    description: `Computer based music and audio production - plus the best in
      music technology and instruments.`,
    linkText: 'Visit Audio Store',
    href: '/',
  },
  {
    logo: proLogos,
    image: proVideo,
    logoPosition: '-340px',
    description: `Film and broadcast equipment, workstations for professional
      video and media production workflows.`,
    linkText: 'Visit Video Store',
    href: '/',
  },
  {
    image: proSignage,
    heading: 'Digital Signage Solutions',
    description: `Reinvent the way you engage with customers with solutions that
      provide invaluable insights and customer data.`,
    linkText: 'View Signage Solutions',
    href: '/',
  },
  {
    image: proAi,
    heading: 'Deep Learning & AI',
    description: `Desktop, datacentre and cloud solutions for developing and
      deploying deep learning and AI models.`,
    linkText: 'Find Out More',
    href: '/',
  },
];

export default PRO_SHOP_CARDS;
