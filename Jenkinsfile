pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo "BuildNo: ${currentBuild.result}"
                sh '''
                    ls -la 
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                sh '''
                    test -f dist/index.html
                    #npm test
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application'
                // Add deployment steps here
            }
        }
    }
}
