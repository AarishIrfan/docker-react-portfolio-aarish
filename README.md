```markdown
# Dockerized React Portfolio

This repository contains a personal portfolio website developed using **ReactJS** and containerized with **Docker**, served via **NGINX**. The goal was to build, optimize, and deploy a modern, responsive, and maintainable portfolio application that showcases skills, projects, and experience using professional tools and practices.

---

## Objective

To create a fully responsive, production-grade personal portfolio using modern frontend technologies and deploy it within a Docker container using NGINX as the static file server. This setup is suitable for hosting on cloud platforms, local containers, or any CI/CD pipeline.

---

## 🛠 Tech Stack

| Layer         | Technology            |
|---------------|------------------------|
| Frontend      | ReactJS (CRA)          |
| Styling       | CSS3, Bootstrap        |
| Server        | NGINX (as static server)|
| Container     | Docker                 |
| Versioning    | Git, GitHub            |
| OS Base       | Alpine Linux (via nginx:alpine) |

---

## 🔍 Features

- Clean and modular ReactJS component architecture
- Sections: Home, About, Projects, Certifications, Articles, Contact
- Responsive design (mobile, tablet, desktop)
- Build optimized using `npm run build`
- Docker containerization with lightweight NGINX
- GitHub integration with version control and CI/CD readiness

---

##  Folder Structure

```

docker-react-portfolio-aarish/
│
├── build/                     # Production build after `npm run build`
├── public/                    # Static public assets (index.html, favicon, etc.)
├── src/                       # ReactJS components and assets
│   ├── Assets/
│   ├── components/
│   └── App.js, index.js, etc.
├── Dockerfile                 # Docker build config
├── .dockerignore              # Files excluded from Docker context
├── package.json               # Project metadata & dependencies
├── README.md                  # Documentation (this file)

````

---

## 🚀 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/AarishIrfan/docker-react-portfolio-aarish.git
cd docker-react-portfolio-aarish

# Install dependencies
npm install

# Start development server
npm start
````

---

## Building the App for Production

```bash
npm run build
```

This command generates optimized static files inside the `/build` folder.

---

## Docker Setup & Deployment

### Step 1: Build Docker Image

```bash
docker build -t aarish-portfolio .
```

### Step 2: Run Docker Container

```bash
docker run -d -p 8080:80 aarish-portfolio
```

Now visit: [http://localhost:8080](http://localhost:8080)

---

##  What I Learned

This project taught me the full development-to-deployment workflow, including:

* Setting up and managing a React project using `create-react-app`
* Understanding `public/` vs `build/` and how React compiles assets
* Writing a custom `Dockerfile` for React static apps using NGINX
* Managing `.dockerignore` and keeping Docker image size minimal
* Building and testing Docker containers locally
* Troubleshooting container networking and port conflicts
* Resolving Git merge conflicts professionally
* Using `git push`, `pull`, `merge`, `rebase`, and `force-push` with care
* Creating a meaningful, professional `README.md` for open-source sharing
* Publishing the full project to GitHub in a clean structure

---

##  Version Control & GitHub

After building the project locally:

```bash
git init
git remote add origin https://github.com/AarishIrfan/docker-react-portfolio-aarish.git
git add .
git commit -m "Initial commit: Dockerized React portfolio"
git branch -M main
git push -u origin main --force
```

Merge conflicts were handled using rebase, manual resolution, and clear commit messages.


##  Contributions

If you'd like to contribute, feel free to fork this repository and submit a pull request.


## Contact

**Aarish Irfan**
Email: [arishirfan98@gmail.com](mailto:arishirfan98@gmail.com)
GitHub: [github.com/AarishIrfan](https://github.com/AarishIrfan)
LinkedIn: [linkedin.com/in/aarishirfan](https://linkedin.com/in/aarishirfan)
