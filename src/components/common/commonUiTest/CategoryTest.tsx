import Category, { CategoryBoxProps } from '@/components/common/Category/Category';

const CategoryTest = () => {
  const test = () => {
    //필요하신 추가 로직을 넣어주세요
    alert('되나용?');
  };

  const topOptions: CategoryBoxProps[] = [
    {
      icon: 'IconBag',
      title: 'bag',
      /** 이렇게 함수로 로직을 전달해주셔도 될 것 같습니다. */
      options: [{ onclick: test }],
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
