/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:22.12.0-alpine3.21' } }
    stages {
        stage('prerequesties') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('packages') {
            steps {
                steps {
                    sh 'npm install'  
                }
            }
        }
        stage('build') {
            steps {
                sh 'node index.js'
            }
        }
    }
}