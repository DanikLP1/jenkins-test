pipeline{
    agent any
    
    stages{
        stage('install tests') {
            steps{
                sh """ #!/bin/bash
                    git pull origin main"""
                sh """ #!/bin/bash
                    npm i"""
                sh """ #!/bin/bash
                npm test || exit 1"""
            }
        }
    }
}