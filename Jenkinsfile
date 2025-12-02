pipeline {
    agent any

    environment {
        REGISTRY = "index.docker.io"
        KUBE_NAMESPACE = "portfolio"

        FRONT_IMAGE = "joanisky/portfolio_v1"
        BACK_IMAGE  = "joanisky/portfolio_api"

        FRONT_DEPLOY = "portfolio"
        BACK_DEPLOY  = "portfolio-api"

		// Définir un tag unique basé sur le numéro de build Jenkins
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'jenkins-dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                            docker login -u $DOCKER_USER -p $DOCKER_PASS

                            echo "=== Build Front ==="
                            docker build -t ${FRONT_IMAGE}:${IMAGE_TAG} .
                            docker push ${FRONT_IMAGE}:${IMAGE_TAG}

                            echo "=== Build Backend ==="
                            docker build -f k8s/backend/Dockerfile -t ${BACK_IMAGE}:${IMAGE_TAG} .
                            docker push ${BACK_IMAGE}:${IMAGE_TAG}
                        '''
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            when { expression { env.GIT_BRANCH == 'origin/main' } }
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_FILE')]) {
                        sh '''
                            # Copier le kubeconfig
							mkdir -p ~/.kube
							cp $KUBECONFIG_FILE ~/.kube/config
							chmod 600 ~/.kube/config

							# Appliquer les fichiers K8s depuis le workspace
							kubectl apply -k k8s/
							echo "Updating images with unique tag ${IMAGE_TAG}..."
							# Utiliser le tag unique pour forcer le changement
							kubectl set image deployment/${FRONT_DEPLOY} portfolio=${FRONT_IMAGE}:${IMAGE_TAG} -n ${KUBE_NAMESPACE}
							kubectl set image deployment/${BACK_DEPLOY}  portfolio-api=${BACK_IMAGE}:${IMAGE_TAG} -n ${KUBE_NAMESPACE}

							# Le rollout est garanti de se produire
							kubectl rollout status deployment/${FRONT_DEPLOY} -n ${KUBE_NAMESPACE}
							kubectl rollout status deployment/${BACK_DEPLOY}  -n ${KUBE_NAMESPACE}
                        '''
                    }
                }
            }
        }

        stage('Verify Deployment') {
			when {
			   expression { env.GIT_BRANCH == 'origin/main' }
			}
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_FILE')]) {
                        sh '''
                            cp $KUBECONFIG_FILE ~/.kube/config

                            echo "=== Pods ==="
                            kubectl get pods -n ${KUBE_NAMESPACE}

                            echo ""
                            echo "=== Services ==="
                            kubectl get svc -n ${KUBE_NAMESPACE}

                            echo ""
                            echo "=== Ingress ==="
                            kubectl get ingress -n ${KUBE_NAMESPACE}
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo "✓ Pipeline completed successfully"
        }
        failure {
            echo "✗ Pipeline failed"
        }
    }
}