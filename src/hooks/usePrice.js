import { useMemo } from 'react';

function formatPrice({ locale, currencyCode, price, discount, isOnSale }) {
  const currency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });

  if (isOnSale) {
    return {
      price: currency.format(price),
      previousPrice: currency.format(price + discount),
    };
  }

  return { price: currency.format(price) };
}

export default function usePrice(data) {
  const { currencyCode, price, discount, isOnSale } = data ?? {};
  const locale = 'en-GB';

  const value = useMemo(() => {
    if (typeof price !== 'number') return '';

    return formatPrice({ locale, currencyCode, price, discount, isOnSale });
  }, [locale, currencyCode, price, discount, isOnSale]);

  return value;
}
