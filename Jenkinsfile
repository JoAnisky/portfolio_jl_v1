pipeline {
    agent {
        node {
            label 'docker-agent'
        }
    }

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
                    echo "Branch: ${BRANCH_NAME}"
                    echo "Build: ${BUILD_NUMBER}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}/v1/", 'joanisky-dockerhub') {
                        def image = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                        image.push()
                        image.push("${DOCKER_TAG_BUILD}")
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            when {
                branch 'main'
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
                branch 'main'
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