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
                    sh 'rm -rf node_modules package-lock.json'  // Clean up any previous installs or lock files
                    sh 'mkdir -p ~/.npm'  // Ensure the npm cache folder exists
                    sh 'chown -R node:node ~/.npm'  // Change ownership to the node user in the container
                    sh 'npm install'  // Reinstall dependencies
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