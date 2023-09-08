import Category, { CategoryProps } from '@/components/common/Category/Category';
import CategoryHeader from '@/components/common/Header/CategoryHeader';

const Menu = () => {
  const test = () => {
    alert('되나용?');
  };

  const topOptions: CategoryProps[] = [
    {
      icon: 'IconTop',
      title: 'Top',
      onClick: test,
      options: [
        {
          icon: 'IconSweat',
          title: 'Sweat',
          onClick: () => alert('IconPaper'),
        },
        {
          icon: 'IconHood',
          title: 'Hood',
          onClick: () => alert('IconCreditCard'),
        },
        {
          icon: 'IconKnit',
          title: 'Knit',
          onClick: () => alert('IconCreditCard'),
        },
        {
          icon: 'IconSleeveless',
          title: 'Sleeveless',
          onClick: () => alert('IconCreditCard'),
        },
      ],
    },
    {
      icon: 'IconPants',
      title: 'Pants',
      onClick: () => alert('IconBag'),
      options: [
        {
          icon: 'IconJeans',
          title: 'Jeans',
          onClick: () => alert('IconClear'),
        },
        {
          icon: 'IconShorts',
          title: 'Shorts',
          onClick: () => alert('IconClear'),
        },
        {
          icon: 'IconTraining',
          title: 'Training',
          onClick: () => alert('IconClear'),
        },
        {
          icon: 'IconLeggings',
          title: 'Leggings',
        },
      ],
    },
    {
      icon: 'IconDress',
      title: 'Dress',
      options: [
        {
          icon: 'IconShortDress',
          title: 'ShortDress',
        },
        {
          icon: 'IconLongDress',
          title: 'LongDress',
        },
      ],
    },

    {
      icon: 'IconAccessories',
      title: 'Accessories',
      options: [
        {
          icon: 'IconShoes',
          title: 'Shoes',
        },
        {
          icon: 'IconMuffler',
          title: 'Muffler',
        },
        {
          icon: 'IconGloves',
          title: 'Gloves',
        },
        {
          icon: 'IconCap',
          title: 'Cap',
        },
      ],
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <CategoryHeader />
      {topOptions?.map((item, idx) => {
        return (
          <Category
            key={idx}
            icon={item.icon}
            title={item.title}
            onClick={item.onClick}
            options={item.options}
          />
        );
      })}
    </div>
  );
};

export default Menu;
