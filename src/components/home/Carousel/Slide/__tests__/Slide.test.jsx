import renderer from 'react-test-renderer';
import Slide from '../index';

const slide = {
  topNavText: '30 SERIES 3XS PCs',
  background: '',
  centerImage: '',
  centerImageAlt: 'A PC with rainbow coloured LED case fans on the front',
  leftLogo: '',
  leftLogoAlt: '3XS Systems',
  leftHeading: 'RTX™ 30 Series PCs',
  leftText: `Custom built PCs built with NVIDIA's 2nd gen Ampere architecture,
      designed to deliver ultimate performance for gamers and creators.`,
  rightHeading: 'Powered by',
  rightLogo: '',
  rightLogoAlt: 'Nvidia GeForce RTX',
  rightText: [
    'Premium built to order systems',
    'Extensively tested',
    '7 day evening and weekend support',
    'Premium 3 year warranty',
    'Best in-class components',
    'Award-winning systems',
  ],
};

describe('Slide component', () => {
  it('renders a slide with all content present', () => {
    const tree = renderer
      .create(<Slide slide={slide} slideIndex={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
