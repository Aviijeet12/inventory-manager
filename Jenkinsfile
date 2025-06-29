pipeline {
    agent any
    tools {
        maven 'Default'
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Docker Build & Run') {
            steps {
                sh 'docker build -t inventory-manager .'
                sh 'docker stop inventory || true'
                sh 'docker rm inventory || true'
                sh 'docker run -d -p 8080:8080 --name inventory inventory-manager'
            }
        }
    }
}
