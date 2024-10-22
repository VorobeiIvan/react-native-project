<!-- cSpell:ignore Vorobei -->

# React Native Project

Цей проект є прикладом застосування React Native з використанням Expo та TypeScript.

## Системні вимоги

Перед початком переконайтеся, що на вашому комп'ютері встановлено:

- **Node.js** (рекомендована версія: 14.x або 16.x)
- **npm** (встановлюється разом з Node.js)
- **Git** (для управління версіями)
- **Homebrew** (для macOS) або **Chocolatey** (для Windows)

## Встановлення необхідного програмного забезпечення

### 1. Встановлення Node.js

Зайдіть на [офіційний сайт Node.js](https://nodejs.org/) та завантажте останню LTS версію.

Для macOS можна також використовувати Homebrew:

```bash
brew install node
```

### 2. Встановлення Git

#### macOS

```bash
brew install git
```

#### Windows

Завантажте та встановіть Git з [офіційного сайту Git](https://git-scm.com/downloads).

### 3. Встановлення Expo CLI

```bash
npm install -g expo-cli
```

### 4. Встановлення GitHub CLI

#### macOS GitHub CLI

```bash
brew install gh
```

#### Windows GitHub CLI

Завантажте з [офіційного сайту GitHub CLI](https://cli.github.com/).

## Створення нового проекту

### 1. Створення каталогу проекту

```bash
cd ~/Documents/GitHub
mkdir react-native-project
cd react-native-project
git init
```

### 2. Ініціалізація нового проекту Expo

```bash
npx create-expo-app . --template blank-typescript
```

## Додавання та фіксація файлів

```bash
git add .
git commit -m "init new project"
```

## Налаштування GitHub репозиторію

### 1. Створення нового репозиторію на GitHub

```bash
gh repo create YourGitHubAccount/react-native-project --private
```

### 2. Додавання віддаленого репозиторію

```bash
git remote add origin https://github.com/YourGitHubAccount/react-native-project.git
```

## Перейменування гілки та фіксація файлів

```bash
git branch -m master main
git push -u origin main
```

## Встановлення необхідних пакетів

```bash
yarn add expo-font
yarn add react-native-svg
```

## Запуск проекту

```bash
npx expo start
```

## Додаткові налаштування (необов'язково)

### 1. Використання Visual Studio Code

```bash
code .
```

### 2. Налаштування ESLint та Prettier

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

## Реєстрація в Expo

1. Зайдіть на [сайт Expo](https://expo.dev/).
2. Створіть обліковий запис та виконайте вхід у вашому терміналі:

```bash
npx expo login
```

## Підсумок

Ця інструкція допоможе вам налаштувати проект React Native з використанням Expo та TypeScript. Якщо у вас виникнуть питання, не соромтеся запитувати!

Виконайте наступні команди в терміналі:

```bash
cd ~/Documents/GitHub  # Змініть Documents/GitHub вкажіть ваш шлях до проекту на вашому ПК
mkdir react-native-project # Назва вашого проекту
cd react-native-project
git init
npx create-expo-app . --template blank-typescript # (розписати інші можливі варіанти !!)
git add .
git commit -m "init new project"
gh repo create VorobeiIvan/react-native-project --private # Змініть 'VorobeiIvan' на ваше ім'я користувача # (розписати інші можливі варіанти --private !!)
git remote add origin https://github.com/VorobeiIvan/react-native-project.git # Змініть 'VorobeiIvan' на ваше ім'я користувача
git branch -m master main
git push -u origin main
code .
yarn add expo-font
yarn add react-native-svg
#розширити перелік базових бібліотек та пакетів на вибір, прописати коментарі до кожної та посилання на опис
npx expo start

#(Відкрийте файл конфігурації cspell.json або створіть його, якщо він відсутній, у кореневій директорії проекту.
Додайте підтримку української мови:
json
Копіювати код
{
"language": "en,uk",
"dictionaries": ["ukrainian"]
}
Встановити відповідний словник:

Використайте команду для встановлення українського словника:
bash
Копіювати код
npm install -D cspell-dict-uk-ua
Оновити конфігурацію cSpell:

Додайте словник до списку конфігурацій:
json
Копіювати код
{
"language": "uk,en",
"dictionaryDefinitions": [
{
"name": "ukrainian",
"path": "./node_modules/cspell-dict-uk-ua/uk-ua.txt"
}
],
"dictionaries": ["ukrainian", "en"]
}
Після цих змін cSpell почне розпізнавати українські слова.)
```

## Документація
[React](https://react.dev/)
[Expo](https://docs.expo.dev/)
[Expo Font](https://www.npmjs.com/package/expo-font?activeTab=readme)
[Expo Status Bar](https://www.npmjs.com/package/expo-status-bar)
[React Native](https://reactnative.dev/docs/getting-started)
[TypeScript](https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage)
[Babel](https://babeljs.io/docs/)
[ESLint](https://eslint.org/docs/latest/)
[Prettier](https://prettier.io/docs/en/)
[react-native-svg](https://www.npmjs.com/package/react-native-svg)



# Ресурси для розробки мобільних додатків

## 1. Інструменти для розробки та налаштування
- [Expo](https://expo.dev): Платформа для створення нативних мобільних застосунків за допомогою JavaScript та React Native.
- [Expo Build (EAS)](https://docs.expo.dev/build/introduction/): Документація для налаштування Expo Application Services (EAS), зокрема eas.json, що використовується для автоматизації процесів збірки додатків.
- [Xcode на App Store](https://apps.apple.com/us/app/xcode/id497799835): Інструмент для створення iOS-додатків.
- [Brew](https://brew.sh): Менеджер пакетів для macOS та Linux.
- [Chocolatey](https://chocolatey.org): Менеджер пакетів для Windows.

## 2. Фреймворки для мобільної розробки
- [React Native](https://reactnative.dev/docs/getting-started): Офіційна документація для React Native.
- [Flutter](https://flutter.dev/docs): Фреймворк від Google для створення нативних застосунків на Android та iOS.
- [Xamarin (архів)](https://docs.microsoft.com/en-us/xamarin/): Документація для Xamarin — платформи для кросплатформної розробки на C#.
- [Firebase](https://firebase.google.com/docs): Документація для налаштування проектів з Firebase — платформи для бекенд-інфраструктури.

## 3. Кросплатформна розробка на Kotlin та інші підходи
- [Kotlin Multiplatform](https://kotlinlang.org/docs/multiplatform-overview.html): Документація для Kotlin Multiplatform — платформи для спільного використання коду на Android та iOS.
- [X-Team Blog (Kotlin Multiplatform)](https://x-team.com/blog/using-kotlin-multiplatform/): Стаття про використання Kotlin Multiplatform.
- [Medium: Kotlin Multiplatform](https://medium.com/@denis.mokhov/kotlin-multiplatform-mobile-share-code-between-android-and-ios-81b5c5d9c9e): Стаття про кодшерінг між Android та iOS за допомогою Kotlin.
- [Xamarin Development](https://www.xamarin.com/develop): Стаття про кросплатформену розробку за допомогою Xamarin.
- [LANARS: Flutter](https://lanars.com/blog/flutter): Огляд платформи Flutter для розробки мобільних застосунків.
- [Web4U: Гібридні мобільні додатки](https://web4u.com.ua/): Українська стаття про переваги та недоліки гібридних мобільних додатків.

## 4. Навігація в React Native та Expo
- [React Navigation](https://reactnavigation.org/docs/getting-started): Документація для налаштування навігації в React Native.
- [React Navigation Prop](https://reactnavigation.org/docs/navigation-prop): Опис об’єкта navigation, який використовується для навігації між екранами.
- [React Navigation: Tabs](https://reactnavigation.org/docs/bottom-tab-navigator): Пакет для роботи з нижніми вкладками навігації.
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/): Бібліотека для роботи з жестами.
- [Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context): Пакет для коректного відображення контенту в безпечних зонах екрана.
- [Expo Map View](https://docs.expo.dev/versions/latest/sdk/mapview/): Компонент для роботи з картами у Expo-додатках.

## 5. Інтеграція з Firebase
- [Firebase Auth (веб)](https://firebase.google.com/docs/auth/web/start): Як налаштувати аутентифікацію в веб-додатках за допомогою Firebase.
- [Firebase Firestore Quickstart](https://firebase.google.com/docs/firestore/quickstart): Як почати використовувати базу даних Firestore у веб-додатках.
- [Документація Expo для Firebase](https://docs.expo.dev/guides/using-firebase/): Інструкції для інтеграції Firebase з Expo.
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/): API для доступу до місцезнаходження пристрою в Expo-додатках.
- [Redux Persist](https://github.com/rt2zz/redux-persist): Пакет для збереження стану в додатках на Redux.

## 6. Оптимізація, тестування та публікація
- [Apple App Store Previews](https://developer.apple.com/app-store/previews/): Офіційна документація для створення відео-прев’ю додатків для App Store.
- [Google Play Screenshots Guide](https://developer.android.com/distribute/best-practices/launch/screenshot): Офіційна документація щодо завантаження скріншотів для Google Play.
- [ASO Trends](https://www.apptentive.com/blog/app-store-optimization-trends-2021/): Огляд трендів візуальної оптимізації додатків в App Store у 2021 році.
- [EAS Build Plugin](https://docs.expo.dev/build/plugin/): Плагін для локальної збірки додатків на платформі EAS.
- [Expo Dev Client](https://docs.expo.dev/clients/introduction/): Клієнт для розробки та тестування додатків на Expo.

## 7. Медіа та карти
- [Expo Media Library](https://docs.expo.dev/versions/latest/sdk/media-library/): Компонент для роботи з медіабібліотекою пристрою.
- [React Native Maps](https://github.com/react-native-maps/react-native-maps): Пакет для роботи з картами в React Native.
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/): Пакет для доступу до камери на мобільних пристроях через Expo.

Ці ресурси допоможуть організувати роботу з мобільними додатками на основі різних платформ, включаючи Expo, React Native, Kotlin Multiplatform, та Flutter.
"""

