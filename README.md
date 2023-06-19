<h1 align="center">
  🐶 AdoptGram App 🐱
</h1>

Hi! My name is Pietro and I'm the proud developer of this app 

AdoptGram is a Fullstack, Instagram-like app that have the purpose of connecting people with their local animal shelters/non-governamental organizations, so they can adopt a new furry friend.

This is the project for my final thesis in order to receive the title of Information Systems Bachelor of Science at FURG. 

---

## 📦 Features

- NGOs (Non Governamental Organizations) can:
  - Create an account
  - Register available pets for adoption (with a lot of details)
  - Keep in touch with population around
  - Share pictures and videos of available pets
  - Tag pets on posts
  - Repost another NGO post
- Common Users can:
  - Create an account
  - Follow an NGO profile
  - See recent posts on a timeline (I don't plan a social media algorithm to display posts based on interests of the end-user for now)
  - Like posts
  - Comment on posts
  - Start the adoption process on the app
  - See donation details for donating to NGOs
- Admins can:
  - Change Common Users/NGOs data (e-mail and/or password only) in order to help with account recovery
  - Delete posts that seems malicious (for now, it won't have an automatic moderation tool/AI)

---

## ⚙ Techs used

### ⌨ Programming Languages

- JavaScript/TypeScript for Back-End, Front-End and Mobile
- Golang for specific Back-End services
- Rust for the Desktop application

### 📚 Documentation

- DBDiagram
- Astah UML

### 🧪 Testing

- Vitest
- Jest
- SuperTest

### 🗃 Back-End

- Node.js
  - Fastify
  - Prisma ORM
- Golang
  - Gin
  - sqlc
- Docker
- Docker Compose
- PostgreSQL
- Redis
- Apache Kafka
- gRPC

### 📱 Mobile App

- React Native
- Expo CLI
- Expo EAS

### 🌐 Web App

- Vite
- ReactJS
- Next.js
- TailwindCSS

### 🖥 Desktop App

- Tauri
- Same things from the Web App 😃

### 📡 Hosting

- Render (for Databases and Back-End Services)
- Vercel (for Web App and Serverless functions)
- Google Play Store (for Mobile App)

### ⚡ Serverless

- Vercel Edge Functions

### 🤝 Third-Party Services

- Resend (for sending e-mails)
- Google Cloud Storege (for blob storage)

---

## 📁 How is it structured?

- The `backend` contains all the Back-end service used by the client applications
- The `desktop`, `mobile` and `web` folders contain the client applications that consume Back-end services

---

## 📚 What about documentation?

Each part contains its own documentation:

- The `backend` folder itself have a link to the online DBDiagram documentation, containing the database schema;
- Each `backend` service contain individual `docs` folder with UML diagrams (such as Class Diagrams, Use Case Diagrams and others);
- Each `backend` service have its own Swagger documentation
- The [Figma project](https://www.figma.com/file/vs0Bxt35Hjy3zihhLlrGlV/AdoptGram?type=design&node-id=110%3A2&t=5t5vwjJEeWooY3C4-1) can be referred for UI documentation;
- Each React project will have its own `Storybook` documentation soon!
