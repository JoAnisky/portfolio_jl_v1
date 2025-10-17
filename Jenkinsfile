pipeline {
    agent {
        node {
            label 'node-agent'  // Utilisation du Node Docker Agent de mon repo Docker Hub
        }
    }

    environment {
        DOCKER_IMAGE = "joanisky/portfolio_v1"  // nom de l'image a pousser sur DockerHub
        DOCKER_TAG = "latest"
        APP_DIR = "${HOME_DIR}/portfolio_v1"  // Dossier où l'app sera stockée
    }

    stages {
        stage('Build Docker Image') {
            agent any
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'joanisky-dockerhub') {
                        def customImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                        customImage.push()
                    }
                }
            }
        }
		stage('Deploy to Kubernetes') {
            steps {
                sshagent(['ssh-toor']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no \$SSH_USER@\$SSH_URL '
                            kubectl apply -f \$HOME_DIR/portfolio_v1/k8s/portfolio/
                        '
                    """
                }
            }
        }
    }
}
