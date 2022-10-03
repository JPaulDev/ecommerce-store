import ryzen5 from '../../public/images/products/processors/ryzen5.webp';
import ryzen7 from '../../public/images/products/processors/ryzen7.webp';
import ryzen9 from '../../public/images/products/processors/ryzen9.webp';
import inteli3 from '../../public/images/products/processors/intel-i3.webp';
import inteli5 from '../../public/images/products/processors/intel-i5.webp';
import inteli7 from '../../public/images/products/processors/intel-i7.webp';
import inteli9 from '../../public/images/products/processors/intel-i9.webp';
import asus3080 from '../../public/images/products/graphics-cards/asus-3080.webp';
import evga3080 from '../../public/images/products/graphics-cards/evga-3080.webp';
import msi3080 from '../../public/images/products/graphics-cards/msi-3080.webp';
import gigabyte3070 from '../../public/images/products/graphics-cards/gigabyte-3070.webp';
import zotac3060 from '../../public/images/products/graphics-cards/zotac-3060.webp';
import msi6800xt from '../../public/images/products/graphics-cards/msi-6800xt.webp';
import powercolor6800 from '../../public/images/products/graphics-cards/powercolor-6800.webp';
import asrock6750xt from '../../public/images/products/graphics-cards/asrock-6750xt.webp';
import corsair1Ddr5 from '../../public/images/products/memory/corsair1-ddr5.webp';
import corsair2Ddr5 from '../../public/images/products/memory/corsair2-ddr5.webp';
import corsair3Ddr5 from '../../public/images/products/memory/corsair3-ddr5.webp';
import teamgroupDdr5 from '../../public/images/products/memory/teamgroup-ddr5.webp';
import crucialDdr4 from '../../public/images/products/memory/crucial-ddr4.webp';
import patriotDdr4 from '../../public/images/products/memory/patriot-ddr4.webp';
import corsairDdr4 from '../../public/images/products/memory/corsair-ddr4.webp';
import kingstonDdr4 from '../../public/images/products/memory/kingston-ddr4.webp';
import asrockX570 from '../../public/images/products/motherboards/asrock-x570.webp';
import asusX570 from '../../public/images/products/motherboards/asus-x570.webp';
import gigabyteX570 from '../../public/images/products/motherboards/gigabyte-x570.webp';
import msiX570 from '../../public/images/products/motherboards/msi-x570.webp';
import gigabyteZ690 from '../../public/images/products/motherboards/gigabyte-z690.webp';
import asusHeroZ690 from '../../public/images/products/motherboards/asus-hero-z690.webp';
import asusZ690 from '../../public/images/products/motherboards/asus-z690.webp';
import msiZ690 from '../../public/images/products/motherboards/msi-z690.webp';
import wdGreen from '../../public/images/products/storage/wd-green.webp';
import wdBlue from '../../public/images/products/storage/wd-blue.webp';
import crucialBx500 from '../../public/images/products/storage/crucial-bx500.webp';
import crucialMx500 from '../../public/images/products/storage/crucial-mx500.webp';
import gigabyteSsd from '../../public/images/products/storage/gigabyte-ssd.webp';
import intelOptane from '../../public/images/products/storage/intel-optane.webp';
import kingstonSsd from '../../public/images/products/storage/kingston-ssd.webp';
import samsungSsd from '../../public/images/products/storage/samsung-ssd.webp';

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
  memory: [
    [
      {
        sku: 'MEM-COR-5200',
        stock: 50,
        name: 'Corsair Vengeance Black 32GB 5200MHz DDR5',
        image: corsair1Ddr5,
        price: 184.99,
        salePrice: 167.99,
        description: [
          '32GB (2x16GB)',
          'PC5-41600',
          'Non-ECC Unbuffered',
          'CAS 40',
        ],
      },
      {
        sku: 'MEM-CRU-3600',
        stock: 0,
        name: 'Crucial Ballistix 64GB 3200MHz DDR4',
        image: crucialDdr4,
        price: 349.99,
        salePrice: 299.99,
        description: [
          '64GB (2x32GB)',
          'PC4-28800',
          'Non-ECC Unbuffered',
          'CAS 16',
        ],
      },
      {
        sku: 'MEM-COR-5600',
        stock: 30,
        name: 'Corsair Vengeance RGB 32GB 5600MHz DDR5',
        image: corsair3Ddr5,
        price: 219.99,
        salePrice: 199.99,
        description: [
          '32GB (2x16GB)',
          'PC5-44800',
          'Non-ECC Unbuffered',
          'CAS 36',
        ],
      },
      {
        sku: 'MEM-KIN-3200',
        stock: 50,
        name: 'Kingston Fury 16GB 3200MHz DDR4',
        image: kingstonDdr4,
        price: 99.99,
        salePrice: 89.99,
        description: [
          '16GB (2x8GB)',
          'PC4-25600',
          'Non-ECC Unbuffered',
          'CAS 14',
        ],
      },
    ],
    [
      {
        sku: 'MEM-PAT-3200',
        stock: 30,
        name: 'Patriot Viper Steel 32GB 3200MHz DDR4',
        image: patriotDdr4,
        price: 109.99,
        salePrice: 104.99,
        description: [
          '32GB (2x16GB)',
          'PC4-25600',
          'Non-ECC Unbuffered',
          'CAS 16',
        ],
      },
      {
        sku: 'MEM-COR-6000',
        stock: 50,
        name: 'Corsair Dominator 32GB 6000MHz DDR5',
        image: corsair2Ddr5,
        price: 289.99,
        salePrice: 249.99,
        description: [
          '32GB (2x16GB)',
          'PC5-48000',
          'Non-ECC Unbuffered',
          'CAS 40',
        ],
      },
      {
        sku: 'MEM-COR-3200',
        stock: 50,
        name: 'Corsair Vengeance 32GB 3200MHz DDR4',
        image: corsairDdr4,
        price: 139.99,
        salePrice: 114.99,
        description: [
          '32GB (2x16GB)',
          'PC4-25600',
          'Non-ECC Unbuffered',
          'CAS 14',
        ],
      },
      {
        sku: 'MEM-TEA-5200',
        stock: 50,
        name: 'Team Group Night Hawk 32GB 5200MHz DDR5',
        image: teamgroupDdr5,
        price: 178.99,
        salePrice: 169.99,
        description: [
          '32GB (2x16GB)',
          'PC5-41600',
          'Non-ECC Unbuffered',
          'CAS 38',
        ],
      },
    ],
  ],
  motherboards: [
    [
      {
        sku: 'MOT-ASR-570',
        stock: 50,
        name: 'ASRock AMD Ryzen X570 Phantom Gaming',
        image: asrockX570,
        price: 189.99,
        salePrice: 169.99,
        description: ['AMD X570', 'AM4', 'DDR4', 'PCIe 4.0', '2.5GbE', 'ATX'],
      },
      {
        sku: 'MOT-ASU-H690',
        stock: 50,
        name: 'ASUS Intel Z690 ROG Maximus Hero',
        image: asusHeroZ690,
        price: 509.99,
        salePrice: 399.99,
        description: [
          'Intel Z690',
          'S1700',
          'DDR5',
          'PCIe 5.0',
          '2.5GbE/ax WiFi',
          'ATX',
        ],
      },
      {
        sku: 'MOT-GIG-690',
        stock: 30,
        name: 'Gigabyte Intel Z690 AORUS Master',
        image: gigabyteZ690,
        price: 429.99,
        salePrice: 389.99,
        description: [
          'Intel Z690',
          'S1700',
          'DDR5',
          'PCIe 5.0',
          '2.5GbE/ax WiFi',
          'ATX',
        ],
      },
      {
        sku: 'MOT-MSI-570',
        stock: 30,
        name: 'MSI AMD Ryzen MPG X570 Gaming Plus',
        image: msiX570,
        price: 209.99,
        salePrice: 199.99,
        description: [
          'AMD X570',
          'AM4',
          'DDR4',
          'PCIe 4.0',
          'Realtek GbE',
          'ATX',
        ],
      },
    ],
    [
      {
        sku: 'MOT-MSI-690',
        stock: 0,
        name: 'MSI MPG Intel Z690 Carbon WiFi',
        image: msiZ690,
        price: 369.99,
        salePrice: 299.99,
        description: [
          'Intel Z690',
          'S1700',
          'DDR5',
          'PCIe 5.0',
          '2.5GbE/ax WiFi',
          'ATX',
        ],
      },
      {
        sku: 'MOT-ASU-690',
        stock: 50,
        name: 'ASUS ROG Strix Intel Z690-F Gaming',
        image: asusZ690,
        price: 379.99,
        salePrice: 329.99,
        description: [
          'Intel Z690',
          'S1700',
          'DDR5',
          'PCIe 5.0',
          '2.5GbE/ax WiFi',
          'ATX',
        ],
      },
      {
        sku: 'MOT-ASU-570',
        stock: 50,
        name: 'ASUS AMD Ryzen PRIME X570 Pro',
        image: asusX570,
        price: 259.99,
        salePrice: 229.99,
        description: [
          'AMD X570',
          'AM4',
          'DDR4',
          'PCIe 4.0',
          '2.5GbE/ax WiFi',
          'ATX',
        ],
      },
      {
        sku: 'MOT-GIG-570',
        stock: 50,
        name: 'Gigabyte AMD X570S Gaming X',
        image: gigabyteX570,
        price: 209.99,
        salePrice: 199.99,
        description: ['AMD X570', 'AM4', 'DDR4', 'PCIe 4.0', '2.5GbE', 'ATX'],
      },
    ],
  ],
  storage: [
    [
      {
        sku: 'STO-WDI-240',
        stock: 50,
        name: 'WD Green 240GB SATA Solid State Drive',
        image: wdGreen,
        price: 34.99,
        salePrice: 29.99,
        description: [
          '240GB',
          '2.5" 7mm',
          'SATA 3.0 (6Gb/s)',
          'Max Read 545MB/s',
        ],
      },
      {
        sku: 'STO-SAM-250',
        stock: 0,
        name: 'Samsung 870 EVO 250GB SATA Solid State Drive',
        image: samsungSsd,
        price: 49.99,
        salePrice: 39.99,
        description: [
          '250GB',
          '2.5" 7mm',
          'SATA 3.0 (6Gb/s)',
          'Read 560MB/s',
          'Write 530MB/s',
        ],
      },
      {
        sku: 'STO-INT-OPT',
        stock: 30,
        name: 'Intel Optane 375GB Enterprise Datacenter SSD',
        image: intelOptane,
        price: 1099.99,
        salePrice: 999.99,
        description: [
          '375GB',
          'PCIe 3.0 (x4)',
          'NVMe',
          '2400MB/s Read',
          '2000MB/s Write',
        ],
      },
      {
        sku: 'STO-GIG-120',
        stock: 50,
        name: 'Gigabyte 120GB Solid State Drive',
        image: gigabyteSsd,
        price: 19.99,
        salePrice: 14.99,
        description: [
          '240GB',
          '2.5"',
          'SATA 3.0 (6Gb/s)',
          'Max Read 500MB/s',
          'Max Write 380MB/s',
        ],
      },
    ],
    [
      {
        sku: 'STO-CRU-500',
        stock: 0,
        name: 'Crucial BX500 500GB Solid State Drive',
        image: crucialBx500,
        price: 59.99,
        salePrice: 54.99,
        description: [
          '500GB',
          '2.5" 7mm',
          'SATA 3.0 (6Gb/s)',
          '540MB/s Read',
          '500MB/s Write',
        ],
      },
      {
        sku: 'STO-WDI-250',
        stock: 50,
        name: 'WD Blue 250GB Solid State Drive',
        image: wdBlue,
        price: 39.99,
        salePrice: 34.99,
        description: [
          '250GB',
          '2.5" 7mm',
          'SATA 3.0 (6Gb/s)',
          'Read 555MB/s',
          'Write 440MB/s',
        ],
      },
      {
        sku: 'STO-KIN-480',
        stock: 50,
        name: 'Kingston 480GB A400 State Drive/SSD',
        image: kingstonSsd,
        price: 49.99,
        salePrice: 45.99,
        description: [
          '480GB',
          '2.5"',
          'SATA III - 6Gb/s',
          '500MB/s Read',
          '450MB/s Write',
        ],
      },
      {
        sku: 'STO-CRU-1TB',
        stock: 50,
        name: 'Crucial MX500 1TB Solid State Drive',
        image: crucialMx500,
        price: 109.99,
        salePrice: 99.99,
        description: [
          '1TB',
          '2.5"',
          'SATA III - 6Gb/s',
          'Read 560MB/s',
          'Write 510MB/s',
        ],
      },
    ],
  ],
};

export default todayOnlyOffers;
