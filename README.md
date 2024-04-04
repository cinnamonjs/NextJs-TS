
# Nextjs 14 typescript template

```
/src
├── /app
├── /components
├── /layout
├── /asset
├── /contexts
├── /hooks
├── /locales
├── /stories
├── /lib
├── /store
├── /utils
```
**app** - pages and page layout

**components** - reusable React components

**layout** - Layout components ex. Navbar, sidebar, footer

**asset** - static assets ex. image, svg

**contexts** - share data between components

**hooks** - reusable functions that contain logic

**locales** - localization files or translations

**stories** - using for story book template

**lib** - utility functions, helpers, or other modules

**store** -  state management ex. zustand, redux

**utils** - Similar to the `/lib`, used for utility functions




## Authors

- [@cinnamonjs](https://github.com/cinnamonjs)

## Tech Stack

**Develop Tool** Docker, StoryBook

**Framework** Next.js, TailwindCSS

**Library Extension** 
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [million](https://million.dev/docs/)
- [Tanstack's query](https://tanstack.com/query/latest)



## Installation & Develop

Clone the project

```bash
  git clone https://github.com/cinnamonjs/Nextjs-ts-14
```

Go to the project directory

```bash
  cd Nextjs-ts-14
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

### or

start with Docker compose

```bash
  docker compose up -d
```



## Deployment

To deploy this project with docker

```bash
  docker compose -f docker-compose-prod.yml up -d
```

