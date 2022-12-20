import accessoriesAd1 from '../../../../../public/images/dropdown-ads/accessories-ad1.webp';
import accessoriesAd2 from '../../../../../public/images/dropdown-ads/accessories-ad2.webp';
import componentsAd1 from '../../../../../public/images/dropdown-ads/components-ad1.webp';
import componentsAd2 from '../../../../../public/images/dropdown-ads/components-ad2.webp';
import componentsAd3 from '../../../../../public/images/dropdown-ads/components-ad3.webp';

export const ADVERTS = {
  components: [componentsAd1, componentsAd2, componentsAd3],
  accessories: [accessoriesAd1, accessoriesAd2],
};

export const DROPDOWN_MENUS = {
  components: [
    [
      {
        category: 'Processors',
        links: [
          { text: 'AMD', href: '/shop/components/processors/amd' },
          { text: 'Intel', href: '/shop/components/processors/intel' },
        ],
      },
      {
        category: 'Memory',
        links: [
          { text: 'DDR5', href: '/shop/components/memory/ddr5' },
          { text: 'DDR4', href: '/shop/components/memory/ddr4' },
        ],
      },
      {
        category: 'Motherboards',
        links: [
          {
            text: 'AMD Motherboards',
            href: '/shop/components/motherboards/amd',
          },
          {
            text: 'Intel Motherboards',
            href: '/shop/components/motherboards/intel',
          },
        ],
      },
    ],
    [
      {
        category: 'Graphics Cards',
        links: [
          {
            text: 'NVIDIA Graphics Cards',
            href: '/shop/components/graphics-cards/nvidia',
          },
          {
            text: 'AMD Graphics Cards',
            href: '/shop/components/graphics-cards/amd',
          },
        ],
      },
      {
        category: 'Power Supplies',
        links: [
          {
            text: 'Fully Wired',
            href: '/shop/components/power-supplies/wired',
          },
          {
            text: 'Fully Modular',
            href: '/shop/components/power-supplies/modular',
          },
        ],
      },
    ],
    [
      {
        category: 'Cases',
        links: [
          { text: 'Full Tower', href: '/shop/components/cases/full-tower' },
          { text: 'Midi Tower', href: '/shop/components/cases/midi-tower' },
          { text: 'ITX', href: '/shop/components/cases/itx' },
        ],
      },
      {
        category: 'Storage',
        links: [
          {
            text: 'Solid State Drives',
            href: '/shop/components/storage/solid-state-drives',
          },
        ],
      },
    ],
  ],
  accessories: [
    [
      {
        category: 'Keyboards',
        links: [
          {
            text: 'Wired Keyboards',
            href: '/shop/accessories/keyboards/wired',
          },
          {
            text: 'Wireless Keyboards',
            href: '/shop/accessories/keyboards/wireless',
          },
          {
            text: 'Gaming Keyboards',
            href: '/shop/accessories/keyboards/gaming',
          },
        ],
      },
      {
        category: 'Mice',
        links: [
          { text: 'Wired Mice', href: '/shop/accessories/mice/wired' },
          { text: 'Wireless Mice', href: '/shop/accessories/mice/wireless' },
        ],
      },
    ],
    [
      {
        category: 'Audio',
        links: [
          { text: 'Microphones', href: '/shop/accessories/audio/microphones' },
          { text: 'Speakers', href: '/shop/accessories/audio/speakers' },
        ],
      },
    ],
    [
      {
        category: 'Monitors',
        links: [
          {
            text: 'Gaming Monitors',
            href: '/shop/accessories/monitors/gaming',
          },
          {
            text: 'Ultrawide Monitors',
            href: '/shop/accessories/monitors/ultrawide',
          },
          { text: 'OLED Monitors', href: '/shop/accessories/monitors/oled' },
        ],
      },
    ],
  ],
};
