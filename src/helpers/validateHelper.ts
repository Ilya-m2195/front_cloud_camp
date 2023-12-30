export const validateHelper = () => {
  return {
    phone: (value: string) =>
      /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(
        value
      )
        ? null
        : 'Invalid phone',
    email: (value: string) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value) ? null : 'Invalid email',
    name: (value: string) =>
      value.length > 50 ? 'Name must contain no more than 50 letters' : null,
    surname: (value: string) =>
      value.length > 50 ? 'Name must contain no more than 50 letters' : null,
    nickname: (value: string) =>
      value.length > 30 ? 'Name must contain no more than 30 letters' : null,
    about: (value: string) =>
      value.split(' ').join('').length > 200 ? 'about must contain no more than 200 letters' : null
  };
};
