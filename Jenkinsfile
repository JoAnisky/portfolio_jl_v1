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
		stage('Deploy to Production') {
            steps {
                // Utilisation du plugin SSH Agent pour injecter la clé SSH
                sshagent(['ssh-toor']) {
                    withCredentials([
                        string(credentialsId: 'SSH_USER', variable: 'SSH_USER'),
                        string(credentialsId: 'SSH_URL', variable: 'SSH_URL'),
                        string(credentialsId: 'HOME_DIR', variable: 'HOME_DIR')
                    ]) {
                        // Commandes SSH avec les variables d'environnement sécurisées
                        sh """
                            ssh -o StrictHostKeyChecking=no \$SSH_USER@\$SSH_URL
                            scp -r * \$SSH_USER@\$SSH_URL:\$APP_DIR
							ssh ${SSH_USER}@${SSH_URL} '${HOME_DIR}/scripts/deploy-docker.sh ${APP_DIR} ${DOCKER_IMAGE} ${DOCKER_TAG}'
                        """
                    }
                }
            }
        }
    }
}
