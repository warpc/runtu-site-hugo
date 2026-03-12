# Runtu Site Hugo

Сайт дистрибутива [Runtu](https://runtu.org), собранный на Hugo с визуальным редактором TinaCMS.

## Требования

- Hugo Extended >= 0.147.6
- Node.js >= 18
- Yarn (или npm)
- Git

## Установка на Ubuntu 24.04

### 1. Hugo Extended

Через apt (самый простой способ, но версия может быть не самой свежей):

```bash
sudo apt update
sudo apt install hugo

hugo version
```

> **Важно:** в репозитории Ubuntu может быть старая версия Hugo без extended-сборки.
> Если `hugo version` не показывает `extended` — используйте один из способов ниже.

Через snap (актуальная версия):

```bash
sudo snap install hugo

hugo version
```

Через `.deb` (конкретная версия 0.147.6):

```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.147.6/hugo_extended_0.147.6_linux-amd64.deb
sudo dpkg -i hugo_extended_0.147.6_linux-amd64.deb
```

### 2. Node.js

```bash
# Через NodeSource
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Проверить
node -v
npm -v
```

### 3. Yarn (опционально)

```bash
npm install -g yarn
```

## Клонирование и запуск

```bash
# Клонировать с подмодулями (тема Terrassa)
git clone --recurse-submodules https://github.com/warpc/runtu-site-hugo.git
cd runtu-site-hugo

# Установить зависимости TinaCMS
yarn install  # или npm install

# Запустить dev-сервер (Hugo + TinaCMS)
yarn dev  # или npm run dev
```

После запуска:

- Сайт: http://localhost:1313
- Админка TinaCMS: http://localhost:1313/admin

## Только Hugo (без TinaCMS)

```bash
hugo server
```

## Продакшен-сборка (локально)

```bash
hugo --minify --environment production
```

Результат в папке `public/`.
