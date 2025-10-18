pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "joanisky/portfolio_v1"
        DOCKER_TAG = "latest"
        DOCKER_TAG_BUILD = "${BUILD_NUMBER}"
        REGISTRY = "index.docker.io"
        KUBE_NAMESPACE = "portfolio"
        KUBE_DEPLOYMENT = "portfolio"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    echo "Build: ${BUILD_NUMBER}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'jenkins-dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                            docker login -u $DOCKER_USER -p $DOCKER_PASS
                            docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                            docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                            docker push ${DOCKER_IMAGE}:${DOCKER_TAG_BUILD}
                        '''
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            when {
                expression { env.GIT_BRANCH == 'origin/main' }
            }
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_FILE')]) {
                        sh '''
                            # Copier le kubeconfig
                            mkdir -p ~/.kube
                            cp $KUBECONFIG_FILE ~/.kube/config
                            chmod 600 ~/.kube/config

                            # Vérifier la connexion K3s
                            kubectl cluster-info

                            # S'assurer que le namespace existe
                            kubectl create namespace ${KUBE_NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -

                            # Update l'image dans le deployment
                            kubectl set image deployment/${KUBE_DEPLOYMENT} \
                                ${KUBE_DEPLOYMENT}=${DOCKER_IMAGE}:${DOCKER_TAG} \
                                -n ${KUBE_NAMESPACE} \
                                --record

                            # Attendre que le rollout soit complet
                            kubectl rollout status deployment/${KUBE_DEPLOYMENT} -n ${KUBE_NAMESPACE}

                            echo "✓ Deployment successful!"
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