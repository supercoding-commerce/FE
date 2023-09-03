import Category, { CategoryBoxProps } from '@/components/common/Category/Category';

const CategoryTest = () => {
  const topOptions: CategoryBoxProps[] = [
    {
      icon: 'IconBag',
      title: 'bag',
      options: [{ onclick: () => alert('IconBag') }],
      optionTitle: [
        {
          icon: 'IconPaper',
          title: 'paper',
          subOptions: [{ onclick: () => alert('IconPaper') }],
        },
        {
          icon: 'IconCreditCard',
          title: 'creditCard',
          subOptions: [{ onclick: () => alert('IconCreditCard') }],
        },
      ],
    },
    {
      icon: 'IconHeart',
      title: 'heart',
      options: [{ onclick: () => alert('IconBag') }],
      optionTitle: [
        {
          icon: 'IconClear',
          title: 'clear',
          subOptions: [{ onclick: () => alert('IconClear') }],
        },
      ],
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      {topOptions?.map((item, idx) => {
        return (
          <Category
            key={idx}
            icon={item.icon}
            title={item.title}
            optionTitle={item.optionTitle}
            options={item.options}
          />
        );
      })}
    </div>
  );
};

export default CategoryTest;
