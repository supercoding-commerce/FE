import Category, { CategoryProps } from '@/components/common/Category/Category';

const CategoryTest = () => {
  const test = () => {
    //필요하신 추가 로직을 넣어주세요
    alert('되나용?');
  };

  const topOptions: CategoryProps[] = [
    {
      icon: 'IconBag',
      title: 'bag',
      /** 이렇게 함수로 로직을 전달해주셔도 될 것 같습니다. */
      // options: [{ onclick: test }],
      onClick: test,
      options: [
        {
          icon: 'IconPaper',
          title: 'paper',
          onClick: () => alert('IconPaper'),
        },
        {
          icon: 'IconCreditCard',
          title: 'creditCard',
          onClick: () => alert('IconCreditCard'),
        },
      ],
    },
    {
      icon: 'IconHeart',
      title: 'heart',
      onClick: () => alert('IconBag'),
      options: [
        {
          icon: 'IconClear',
          title: 'clear',
          onClick: () => alert('IconClear'),
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
            onClick={item.onClick}
            options={item.options}
          />
        );
      })}
    </div>
  );
};

export default CategoryTest;
