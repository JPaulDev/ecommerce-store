import ryzen5 from '../assets/images/products/processors/ryzen5.webp';
import ryzen7 from '../assets/images/products/processors/ryzen7.webp';
import ryzen9 from '../assets/images/products/processors/ryzen9.webp';
import inteli3 from '../assets/images/products/processors/intel-i3.webp';
import inteli5 from '../assets/images/products/processors/intel-i5.webp';
import inteli7 from '../assets/images/products/processors/intel-i7.webp';
import inteli9 from '../assets/images/products/processors/intel-i9.webp';
import asus3080 from '../assets/images/products/graphics-cards/asus-3080.webp';
import evga3080 from '../assets/images/products/graphics-cards/evga-3080.webp';
import msi3080 from '../assets/images/products/graphics-cards/msi-3080.webp';
import gigabyte3070 from '../assets/images/products/graphics-cards/gigabyte-3070.webp';
import zotac3060 from '../assets/images/products/graphics-cards/zotac-3060.webp';
import msi6800xt from '../assets/images/products/graphics-cards/msi-6800xt.webp';
import powercolor6800 from '../assets/images/products/graphics-cards/powercolor-6800.webp';
import asrock6750xt from '../assets/images/products/graphics-cards/asrock-6750xt.webp';

const todayOnlyOffers = {
  processors: [
    [
      {
        sku: 'CPU-INT-10400F',
        stock: 50,
        name: 'Intel Core i5 10400F',
        image: inteli5,
        price: 129.99,
        salePrice: 114.99,
        description: [
          '6 Cores, 12 Threads',
          'S1200 Comet Lake',
          '2.9GHz, 4.3GHz Turbo',
          '12MB Cache',
        ],
      },
      {
        sku: 'CPU-AMD-4500',
        stock: 30,
        name: 'AMD Ryzen™ 5 4500',
        image: ryzen5,
        price: 124.99,
        salePrice: 104.99,
        description: [
          '6 Core, 12 Thread',
          'AM4 Zen 2',
          '3.6GHz, 4.1GHz Turbo',
          '11MB Cache',
        ],
      },
      {
        sku: 'CPU-INT-12900KS',
        stock: 50,
        name: 'Intel Core i9 12900KS',
        image: inteli9,
        price: 699.99,
        salePrice: 649.99,
        description: [
          '16 Cores, 24 Threads',
          'S1700 Alder Lake',
          '3.4GHz, 5.5GHz Turbo',
          '30MB Cache',
        ],
      },
      {
        sku: 'CPU-INT-12100',
        stock: 50,
        name: 'Intel Core i3 12100',
        image: inteli3,
        price: 131.99,
        salePrice: 125.99,
        description: [
          '4 Cores, 8 Threads',
          'S1700 Alder Lake',
          '3.3GHz, 4.3GHz Turbo',
          '12MB Cache',
        ],
      },
    ],
    [
      {
        sku: 'CPU-AMD-5900X',
        stock: 50,
        name: 'AMD Ryzen™ 9 5900X',
        image: ryzen9,
        price: 389.99,
        salePrice: 344.99,
        description: [
          '12 Core, 24 Thread',
          'AM4 Zen 3',
          '3.7GHz, 4.8GHz Turbo',
          '70MB Cache',
        ],
      },
      {
        sku: 'CPU-AMD-5700X',
        stock: 0,
        name: 'AMD Ryzen™ 7 5700X',
        image: ryzen7,
        price: 274.99,
        salePrice: 238.99,
        description: [
          '8 Core, 16 Thread',
          'AM4 Zen 3',
          '3.4GHz, 4.6GHz Turbo',
          '36MB Cache',
        ],
      },
      {
        sku: 'CPU-INT-12700K',
        stock: 50,
        name: 'Intel Core i7 12700K',
        image: inteli7,
        price: 434.99,
        salePrice: 419.99,
        description: [
          '12 Cores, 20 Threads',
          'S1700 Alder Lake',
          '3.6GHz, 4.9GHz Turbo',
          '25MB Cache',
        ],
      },
      {
        sku: 'CPU-AMD-5800X3D',
        stock: 30,
        name: 'AMD Ryzen 7 5800X3D',
        image: ryzen7,
        price: 439.99,
        salePrice: 399.99,
        description: [
          '8 Core, 16 Thread',
          'AM4 Zen 3',
          '3.4GHz, 4.5GHz Turbo',
          '100MB Cache',
        ],
      },
    ],
  ],
  graphicsCards: [
    [
      {
        sku: 'GFX-ASU-3080',
        stock: 30,
        name: 'ASUS ROG Strix GeForce RTX 3080 V2 OC',
        image: asus3080,
        price: 932.99,
        salePrice: 914.99,
        description: [
          '1440MHz, 1905MHz Boost',
          '8704 CUDA Cores',
          '10GB GDDR6X',
        ],
      },
      {
        sku: 'GFX-ASR-6750XT',
        stock: 0,
        name: 'Asrock Radeon RX 6750XT Phantom',
        image: asrock6750xt,
        price: 599.99,
        salePrice: 589.99,
        description: [
          '2554MHz, 2630MHz Boost',
          '2560 Stream Processors',
          '12GB GDDR6',
        ],
      },
      {
        sku: 'GFX-MSI-3080',
        stock: 50,
        name: 'MSI NVIDIA GeForce RTX 3080 GAMING',
        image: msi3080,
        price: 819.99,
        salePrice: 799.99,
        description: [
          '1440MHz, 1830MHz Boost',
          '8704 CUDA Cores',
          '10GB GDDR6X',
        ],
      },
      {
        sku: 'GFX-GIG-3070',
        stock: 50,
        name: 'Gigabyte AORUS NVIDIA GeForce RTX 3070',
        image: gigabyte3070,
        price: 749.99,
        salePrice: 709.99,
        description: ['1500MHz, 1845MHz Boost', '5888 CUDA Cores', '8GB GDDR6'],
      },
    ],
    [
      {
        sku: 'GFX-EVG-3080',
        stock: 30,
        name: 'EVGA NVIDIA GeForce RTX 3080 FTW3',
        image: evga3080,
        price: 898.99,
        salePrice: 849.99,
        description: [
          '1440MHz, 1800MHz Boost',
          '8704 CUDA Cores',
          '10GB GDDR6X',
        ],
      },
      {
        sku: 'GFX-ZOT-3060',
        stock: 50,
        name: 'ZOTAC NVIDIA GeForce RTX 3060',
        image: zotac3060,
        price: 435.99,
        salePrice: 409.99,
        description: [
          '1320MHz, 1837MHz Boost',
          '3584 CUDA Cores',
          '12GB GDDR6',
        ],
      },
      {
        sku: 'GFX-MSI-6800XT',
        stock: 50,
        name: 'MSI Radeon RX 6800XT GAMING',
        image: msi6800xt,
        price: 909.99,
        salePrice: 849.99,
        description: [
          '2065MHz, 2310MHz Boost',
          '4608 Stream Processors',
          '16GB GDDR6',
        ],
      },
      {
        sku: 'GFX-COL-6800',
        stock: 0,
        name: 'PowerColor Radeon RX 6800 Fighter',
        image: powercolor6800,
        price: 647.99,
        salePrice: 630.99,
        description: [
          '1815MHz, 2105MHz Boost',
          '3840 Stream Processors',
          '16GB GDDR6',
        ],
      },
    ],
  ],
};

export default todayOnlyOffers;
