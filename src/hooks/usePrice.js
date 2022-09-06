import { useMemo } from 'react';

function formatPrice({ locale, currencyCode, price, salePrice }) {
  const currency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });

  if (salePrice) {
    return {
      price: currency.format(price),
      salePrice: currency.format(salePrice),
    };
  }

  return { price: currency.format(price) };
}

export default function usePrice(product) {
  const { price, salePrice } = product ?? {};
  const locale = 'en-GB';
  const currencyCode = 'GBP';

  const value = useMemo(() => {
    if (typeof price !== 'number') return '';

    return formatPrice({ locale, currencyCode, price, salePrice });
  }, [locale, currencyCode, price, salePrice]);

  return value;
}
