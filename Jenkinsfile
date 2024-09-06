pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reUseNode: true
                }
            }
            steps {
                sh '''
                    ls -la 
                    node --version
                    npm --version
                    npm cli
                    npm run build
                    ls -la
                '''
            }
        }
    }
}