import { useState } from 'react';
import Categories from './Categories';

export default function TodayOnlyOffers() {
  const [displayCategory, setDisplayCategory] = useState('processors');

  const handleChangeCategory = (category) => {
    const formattedCategory = category
      .toLowerCase()
      .replace(/ ./g, (str) => str[1].toUpperCase());

    setDisplayCategory(formattedCategory);
  };

  return (
    <section>
      <Categories onChangeCategory={handleChangeCategory} />
    </section>
  );
}
