pipeline{
    agent {
        docker {
          image 'node:21-alpine3.18'
        }
    }
    
    stages{
        stage ("Build") {
           steps {
              sh "npm install"
           }
        }
        stage("Run tests")
            steps{
                sh "npm test || exit 1"
            }
    }
}