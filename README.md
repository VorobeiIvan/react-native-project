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
