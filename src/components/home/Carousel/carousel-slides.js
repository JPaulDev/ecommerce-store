import xsLogo from '../../../../public/images/carousel/3xs-logo.webp';
import nvidiaBackground from '../../../../public/images/carousel/nvidia-background.webp';
import intelBackground from '../../../../public/images/carousel/intel-background.webp';
import amdBackground from '../../../../public/images/carousel/amd-background.webp';
import monthBackground from '../../../../public/images/carousel/month-background.webp';
import nvidiaPc from '../../../../public/images/carousel/nvidia-pc.webp';
import intelPc from '../../../../public/images/carousel/intel-pc.webp';
import amdPc from '../../../../public/images/carousel/amd-pc.webp';
import monthPc from '../../../../public/images/carousel/month-pc.webp';
import nvidiaLogo from '../../../../public/images/carousel/nvidia-logo.webp';
import intelLogo from '../../../../public/images/carousel/intel-logo.webp';
import amdLogo from '../../../../public/images/carousel/amd-logo.webp';
import monthLogos from '../../../../public/images/carousel/month-logos.webp';

const slides = [
  {
    topNavText: '30 SERIES 3XS PCs',
    background: nvidiaBackground,
    centerImage: nvidiaPc,
    centerImageAlt: 'A PC with rainbow coloured LED case fans on the front.',
    leftLogo: xsLogo,
    leftLogoAlt: '3XS Systems.',
    leftHeading: 'RTX™ 30 Series PCs',
    leftText: `Custom built PCs built with NVIDIA's 2nd gen Ampere architecture,
      designed to deliver ultimate performance for gamers and creators.`,
    rightHeading: 'Powered by',
    rightLogo: nvidiaLogo,
    rightLogoAlt: 'Nvidia GeForce RTX.',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    topNavText: 'INTEL 3XS PCs',
    background: intelBackground,
    centerImage: intelPc,
    centerImageAlt: 'A PC with white LED fans and a custom water cooling loop.',
    leftLogo: xsLogo,
    leftLogoAlt: '3XS Systems.',
    leftHeading: 'Upgrade to 12\u1D57\u02B0 Gen Intel',
    leftText: `Level-up your PC for the maximum performance boost,
      powered by 12th Gen Intel® Core™ CPUs, with support for PCIe 5.0 graphics
      and DDR5 memory.`,
    rightHeading: 'Powered by',
    rightLogo: intelLogo,
    rightLogoAlt: 'Intel.',
    textColor: 'white',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    topNavText: 'AMD POWERED GAMING',
    background: amdBackground,
    centerImage: amdPc,
    centerImageAlt: 'A red themed PC with a custom water cooling loop.',
    leftLogo: xsLogo,
    leftLogoAlt: '3XS Systems.',
    leftHeading: 'AMD Powered Gaming',
    leftText: `3XS Gaming PCs powered by AMD Ryzen & Radeon, designed and built
      with zero compromises.`,
    rightHeading: 'Powered by',
    rightLogo: amdLogo,
    rightLogoAlt: 'AMD Ryzen 7000 series.',
    textColor: 'white',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    topNavText: 'PC OF THE MONTH',
    background: monthBackground,
    centerImage: monthPc,
    centerImageAlt: 'A custom built PC with minimal LED fans.',
    leftLogo: xsLogo,
    leftLogoAlt: '3XS Systems.',
    leftHeading: 'PC of the Month',
    leftText: `Our best deal this month, save £100 when you level-up your gaming
      with the 3XS Gamer PBA powered by RTX 3060 Ti.`,
    rightHeading: 'Powered by',
    rightLogo: monthLogos,
    rightLogoAlt: 'Nvidia GeForce RTX paired with an AMD or Intel processor.',
    rightText: [
      '8GB ASUS GeForce RTX 3060',
      'Intel Core i5 12400F or AMD Ryzen 5 5600X',
      'iCUE programmable RGB lighting',
      'Extensively tested',
      'Award-winning systems',
      '3 year warranty',
    ],
  },
];

export default slides;
