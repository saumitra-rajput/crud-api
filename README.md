# CRUD API with AWS DevOps Pipeline

A production-style CRUD REST API built with **Node.js**, **Express**, **Prisma**, and **PostgreSQL**, deployed on **AWS EC2** with **Docker**, provisioned using **Terraform**, configured using **Ansible**, and automatically deployed using **GitHub Actions**.

---

## Architecture

```
                 GitHub
                    │
        Push to main branch
                    │
                    ▼
             GitHub Actions
                    │
               SSH to EC2
                    │
     Build Docker Image & Restart
                    │
                    ▼
        Docker Container (Node.js)
                    │
               Prisma ORM
                    │
                    ▼
          Amazon RDS PostgreSQL
```

---

## Tech Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Docker
- GitHub Actions
- Terraform
- Ansible
- AWS EC2
- AWS RDS

---

## Features

- CRUD REST API
- Health Check Endpoint
- PostgreSQL Database
- Prisma ORM
- Dockerized Application
- Infrastructure as Code using Terraform
- Server Provisioning using Ansible
- Automated Deployment using GitHub Actions

---

## Project Structure

```
crud-api
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── ansible/
│
├── terraform/
│
├── prisma/
│
├── src/
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

---

## API Endpoints

### Health Check

```
GET /health
```

Response

```json
{
  "status": "healthy",
  "app": "running",
  "database": "connected"
}
```

---

### Create User

```
POST /users
```

---

### Get Users

```
GET /users
```

---

### Get User

```
GET /users/:id
```

---

### Update User

```
PUT /users/:id
```

---

### Delete User

```
DELETE /users/:id
```

---

## Local Development

Clone the repository

```bash
git clone https://github.com/saumitra-rajput/crud-api.git
cd crud-api
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm run dev
```

---

## Docker

Build

```bash
docker build -t crud-api .
```

Run

```bash
docker run \
--env-file .env \
-p 3000:3000 \
crud-api
```

---

## Terraform

```bash
terraform init

terraform plan

terraform apply
```

Terraform provisions

- EC2
- Security Groups
- Networking

---

## Ansible

```bash
ansible-playbook site.yml
```

Ansible installs

- Docker
- Node.js
- PM2
- Nginx
- Common Packages

---

## GitHub Actions Deployment

Every push to the **main** branch automatically

- Connects to EC2
- Pulls latest code
- Builds Docker image
- Restarts container

---

## AWS Services Used

- Amazon EC2
- Amazon RDS PostgreSQL
- Security Groups
- VPC
- GitHub Actions

---

## Future Improvements

- HTTPS with Let's Encrypt
- Nginx Reverse Proxy
- Amazon ECR
- Kubernetes Deployment
- Monitoring with Prometheus & Grafana

---

## Author

**Saumitra Rajput**

GitHub

https://github.com/saumitra-rajput
