// constants.ts

// Заголовки
const TITLE = {
  MAIN_TITLE_REGISTRATION: "Реєстрація",
  MAIN_TITLE_AUTHORIZATION: "Авторизація",
  SCREEN_PUBLICATION_NAVIGATION_TITLE: "Публікації",
  SCREEN_CREATE_PUBLICATION_NAVIGATION_TITLE: "Створити публікацію",
  SCREEN_COMMENTS_NAVIGATION_TITLE: "Коментарі",
};

// Плейсхолдери для введення
const PLACEHOLDER = {
  LOGIN: "Логін",
  PASSWORD: "Пароль",
  EMAIL: "Адреса електронної пошти",
  NAME_PUBLICATION: "Назва...",
  LOCATION_PUBLICATION: "Місцевість...",
};

// Текст кнопок
const BUTTON = {
  PASSWORD_SHOW: "Показати",
  PASSWORD_HIDE: "Приховати",
  REGISTRATION: "Зареєстуватися",
  AUTHORIZATION: "Увійти",
  CREATE_PUBLICATION: "Опубліковати",
};

// Тексти для повідомлень
const MESSAGE = {
  ACCOUNT_EXISTS: "Вже є акаунт?",
  ACCOUNT_NOT_EXISTS: "Немає акаунту?",
  UPLOAD_PHOTO: "Завантажте фото",
  EDIT_PHOTO: "Редагувати фото",
};

export default {
  TITLE,
  PLACEHOLDER,
  BUTTON,
  MESSAGE,
  ...TITLE,
  ...PLACEHOLDER,
  ...BUTTON,
  ...MESSAGE,
};
