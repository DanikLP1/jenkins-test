pipeline{
    agent any
    
    stages{
        stage('install tests') {
            steps{
                sh """ 
                    git pull origin main"""
                sh """
                    /usr/bin/npm i"""
                sh """ 
                /usr/bin/npm test || exit 1"""
            }
        }
    }
}