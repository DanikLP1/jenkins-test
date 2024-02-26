pipeline{
    agent any
    
    stages{
        stage('install tests') {
            steps{
                sh """ #!/bin/bash
                    npm i"""
                sh """ #!/bin/bash
                npm test"""
            }
        }
    }
}