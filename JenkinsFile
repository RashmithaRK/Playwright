pipeline {
    agent any

    tools {
        nodejs "Node 18"
    }

    environment {
        HOME = "${env.WORKSPACE}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=html'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*.*', allowEmptyArchive: true

            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report',
                keepAll: true
            ])
        }
    }
}
