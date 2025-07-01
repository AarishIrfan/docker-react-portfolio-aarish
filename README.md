## Project Objective

To build and deploy a production-grade React portfolio application using Docker and NGINX, following modern software engineering and deployment practices.

## Technology Stack

- ReactJS
- HTML, CSS, Bootstrap
- Docker
- NGINX
- Git and GitHub

## Features

- Responsive design
- Modular component architecture
- Dedicated sections: About, Projects, Certifications, Articles
- Production-ready build process
- Dockerized deployment
- NGINX-based static file hosting

## Folder Structure

```

docker-react-portfolio-aarish/
│
├── build/                   # Production build output
├── public/                  # Static files (index.html, favicon, manifest)
├── src/                     # Source code (components, assets, styles)
├── Dockerfile               # Docker image configuration
├── .dockerignore            # Docker build exclusions
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation

````

## Local Development

```bash
git clone https://github.com/AarishIrfan/docker-react-portfolio-aarish.git
cd docker-react-portfolio-aarish
npm install
npm start
````

The application will run locally at: [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
```

This command generates a static production build inside the `build/` directory.

## Docker Instructions

### Build Docker Image

```bash
docker build -t aarish-portfolio .
```

### Run Docker Container

```bash
docker run -d -p 8080:80 aarish-portfolio
```

Open your browser and visit: [http://localhost:8080](http://localhost:8080)

## Git Version Control Process

* Repository initialized with `git init`
* Remote repository connected via `git remote add origin`
* Full project committed and pushed using:

```bash
git add .
git commit -m "Initial commit: Dockerized React portfolio"
git branch -M main
git push -u origin main --force
```

* Merge conflicts were resolved manually in `README.md` using `git pull`, followed by conflict resolution and final push.

## Learning Outcomes

* End-to-end React project setup and folder structuring
* Differentiating between `public/` and `build/`
* Creating a production-ready React build
* Writing a Dockerfile for NGINX-based static site hosting
* Building and running containers using Docker CLI
* Handling port binding and networking issues
* Creating and using `.dockerignore` effectively
* Managing Git operations including conflict resolution, commits, force pushes, and rebases
* Writing professional documentation for open-source repositories
