````markdown
# Dockerized React Portfolio – Aarish Irfan

This is a personal portfolio website developed using ReactJS, containerized using Docker, and served using NGINX. The application highlights skills, projects, certifications, and experience in a clean, responsive user interface.

---

## Project Overview

The goal of this project is to provide a production-ready, portable portfolio application that can be run in any Docker-supported environment. It includes an optimized React frontend built using Create React App (CRA), served via an NGINX container.

---

## Tech Stack

- ReactJS (Frontend SPA)
- HTML5, CSS3
- Docker
- NGINX (Static file server)
- Git and GitHub for version control

---

## Features

- Responsive design with modern layout
- Multi-section pages: About, Projects, Certifications, Articles
- Optimized for production using React build tools
- Deployed and served via Docker containers
- Clean folder structure for maintainability

---

## Getting Started (Development)

```bash
# Clone the repository
git clone https://github.com/AarishIrfan/docker-react-portfolio-aarish.git
cd docker-react-portfolio-aarish

# Install dependencies
npm install

# Start the development server
npm start
````

---

## Build for Production

```bash
npm run build
```

This generates an optimized production build inside the `build/` directory.

---

## Docker Instructions

```bash
# Build the Docker image
docker build -t aarish-portfolio .

# Run the container on port 8080
docker run -d -p 8080:80 aarish-portfolio
```

Access the running portfolio at: `http://localhost:8080`

---

## What Was Learned and Implemented

This project was built from scratch, going through the complete development and deployment lifecycle:

* Setting up a React project with `create-react-app`
* Organizing components and assets
* Understanding `public/` vs `build/` directory usage
* Creating a `Dockerfile` for containerizing a static frontend
* Using NGINX to serve a React production build
* Resolving Git conflicts and managing branches
* Handling CLI-based Docker commands and image lifecycle
* Understanding container networking and port binding
* Managing environment configuration with `.dockerignore` and `package.json`

---

## Folder Structure

```
├── build/                  # Production build files
├── public/                 # Static files (index.html, manifest, favicon)
├── src/                    # Source code (React components, styles, assets)
├── Dockerfile              # Docker build configuration
├── .dockerignore           # Files to ignore in Docker context
├── package.json            # Project metadata and scripts
├── README.md               # Documentation
```

## Contact

**Aarish Irfan**
GitHub: [github.com/AarishIrfan](https://github.com/AarishIrfan)
LinkedIn: [linkedin.com/in/aarishirfan](https://www.linkedin.com/in/aarishirfan)
