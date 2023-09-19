import { useNavigate } from 'react-router-dom';

import Category, { CategoryProps } from '@/components/common/Category/Category';
import CategoryHeader from '@/components/common/Header/CategoryHeader';
const Menu = () => {
  const navigate = useNavigate();

  const topOptions: CategoryProps[] = [
    {
      icon: 'IconTop',
      title: 'Top',
      options: [
        {
          icon: 'IconSweat',
          title: 'Sweat',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=SWEAT');
          },
        },
        {
          icon: 'IconHood',
          title: 'Hood',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=HOOD');
          },
        },
        {
          icon: 'IconKnit',
          title: 'Knit',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=KNIT');
          },
        },
        {
          icon: 'IconSleeveless',
          title: 'Sleeveless',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=SLEEVELESS');
          },
        },
      ],
    },
    {
      icon: 'IconPants',
      title: 'Pants',
      options: [
        {
          icon: 'IconJeans',
          title: 'Jeans',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=JEANS');
          },
        },
        {
          icon: 'IconShorts',
          title: 'Shorts',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=SHORTS');
          },
        },
        {
          icon: 'IconTraining',
          title: 'Training',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=TRAINING');
          },
        },
        {
          icon: 'IconLeggings',
          title: 'Leggings',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=LEGGINGS');
          },
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
          onClick: () => {
            navigate('/search/category?category=Dress&subcategory=SHORTDRESS');
          },
        },
        {
          icon: 'IconLongDress',
          title: 'LongDress',
          onClick: () => {
            navigate('/search/category?category=Dress&subcategory=LONGDRESS');
          },
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
          onClick: () => {
            navigate('/search/category?category=Accessories&subcategory=SHOES');
          },
        },
        {
          icon: 'IconMuffler',
          title: 'Muffler',
          onClick: () => {
            navigate('/search/category?category=Accessories&subcategory=MUFFLER');
          },
        },
        {
          icon: 'IconGloves',
          title: 'Gloves',
          onClick: () => {
            navigate('/search/category?category=Accessories&subcategory=GLOVES');
          },
        },
        {
          icon: 'IconCap',
          title: 'Cap',
          onClick: () => {
            navigate('/search/category?category=Accessories&subcategory=CAP');
          },
        },
      ],
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <CategoryHeader />
      {topOptions?.map((item, idx) => {
        return <Category key={idx} icon={item.icon} title={item.title} options={item.options} />;
      })}
    </div>
  );
};

export default Menu;
