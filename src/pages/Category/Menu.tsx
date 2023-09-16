import { useNavigate } from 'react-router-dom';

import Category, { CategoryProps } from '@/components/common/Category/Category';
import CategoryHeader from '@/components/common/Header/CategoryHeader';
const Menu = () => {
  const navigate = useNavigate();

  const topOptions: CategoryProps[] = [
    {
      icon: 'IconTop',
      title: 'TOP',
      options: [
        {
          icon: 'IconSweat',
          title: 'SWEAT',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=SWEAT');
          },
        },
        {
          icon: 'IconHood',
          title: 'HOOD',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=HOOD');
          },
        },
        {
          icon: 'IconKnit',
          title: 'KNIT',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=KNIT');
          },
        },
        {
          icon: 'IconSleeveless',
          title: 'SLEEVELESS',
          onClick: () => {
            navigate('/search/category?category=Top&subcategory=SLEEVELESS');
          },
        },
      ],
    },
    {
      icon: 'IconPants',
      title: 'PANTS',
      options: [
        {
          icon: 'IconJeans',
          title: 'JEANS',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=JEANS');
          },
        },
        {
          icon: 'IconShorts',
          title: 'SHORTS',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=SHORTS');
          },
        },
        {
          icon: 'IconTraining',
          title: 'TRAINING',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=TRAINING');
          },
        },
        {
          icon: 'IconLeggings',
          title: 'LEGGINGS',
          onClick: () => {
            navigate('/search/category?category=Pants&subcategory=LEGGINGS');
          },
        },
      ],
    },
    {
      icon: 'IconDress',
      title: 'DRESS',
      options: [
        {
          icon: 'IconShortDress',
          title: 'SHORTDRESS',
          onClick: () => {
            navigate('/search/category?category=Dress&subcategory=SHORTDRESS');
          },
        },
        {
          icon: 'IconLongDress',
          title: 'LONGDRESS',
          onClick: () => {
            navigate('/search/category?category=Dress&subcategory=LONGDRESS');
          },
        },
      ],
    },

    {
      icon: 'IconAccessories',
      title: 'ACCESSORIES',
      options: [
        {
          icon: 'IconShoes',
          title: 'SHOES',
          onClick: () => {
            navigate('/search/category?category=Accessories&subcategory=SHOES');
          },
        },
        {
          icon: 'IconMuffler',
          title: 'MUFFLER',
          onClick: () => {
            navigate('/search/category?category=Accessories&subcategory=MUFFLER');
          },
        },
        {
          icon: 'IconGloves',
          title: 'GLOVES',
          onClick: () => {
            navigate('/search/category?category=Accessories&subcategory=GLOVES');
          },
        },
        {
          icon: 'IconCap',
          title: 'CAP',
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
