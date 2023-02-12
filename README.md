# Hi, I'm Tim! 👋

![image](https://user-images.githubusercontent.com/102727510/218339179-c7af7e50-be99-44a2-8e5e-24e0d6f8590a.png)

# Employee List

The objective of creating this Employee List is for a challenge I have been assigned to by Digital.NSW. Starting with some basic configuration, users will be able to retrieve a list of employees as well as edit or remove them. I have organised the file structure of my project in a way that is clear to understand - one half is for the client side (React) and the other half for the server (Java SpringBoot). Below I have provided a list of the tech I used and how to run this app effectively.


## The tech stack I used
This is a fullstack application. The languages & libraries I have used in this project include:
- Java Spring Boot
Java Spring Boot is a powerful Java framework that makes it easy to develop high-performing, production-ready applications. Spring Boot provides a variety of features that make it easy to build, test, and deploy applications.

- React
ReactJS is a popular JavaScript library for building user interfaces. It provides a virtual DOM that can update in real-time, making it an ideal choice for single-page applications.

- TypeScript
TypeScript provides strong typing, making it easier to catch errors before they make it to production. 

- SCSS
With its ability to easily nest styles and write complex selectors, SCSS was the ideal choice for styling this application.

- MySQL
MySQL provides robust data storage and retrieval capabilities


## How to run this app:
### Prerequisites

Before getting started, make sure you have the following software installed on your system:

    Node.js
    Google Chrome
    Visual Studio Code
    Java Development Kit - I use Eclipse with an embedded Maven dependency (I downloaded this from Spring Initializr at 'https://start.spring.io/')
    mySQL

### Front-end Installation

    Clone the repository to your local machine using 'git clone <repository-url>'
    Navigate to the front-end directory using cd employee-list
    Install the necessary dependencies using 'npm install'.
    Start the front-end server using npm run dev.
    Open your browser and navigate to http://localhost:5173 to view the application via vite

### Back-end Installation (With Eclipse)
######    Note that these instructions may differ depending on your JDK.

   Import the back-end project into Eclipse:
    Go to File -> Import -> Maven -> Existing Maven Projects
    Select the directory employeelistServer and click "Finish"
    Right-click on the project in the Project Explorer and select "Run As" -> "Spring Boot App"
    The back-end server will now be running on http://localhost:8080

### mySQL Configuration

    Create a new mySQL database for the application
    Update the application.properties file located in <repository-name>/backend/src/main/resources with the appropriate mySQL configuration, including the database name, username, and user password
    Run the application and mySQL will automatically create the necessary tables

Note: If you encounter any issues during the installation process, please refer to the repository's issue tracker for assistance.

That's it! You should now have a fully functioning version of the application running on your local machine. Enjoy!


## User Features

- Users can update, delete and retreive all employees.
- Responive on mobiles, tablets and higher.

## Technical Features

- Error handling (In Java )
- Logging (Using Java's default logger, The console will log messages for each appropriate CRUD method)
- React hooks 
- SCSS mixins (Preset variables for screen sizes and themes).
- API manipulation.
- Separation of domains/concerns
- React Testing Library
- Additionally, you can also test to make sure that the app is working by running 'npm run test' in the terminal of the client folder.

## Lessons Learned

- **What did you learn while building this project?**
Using Axios to write post, put and delete methods to an external database.

- **What challenges did you face and how did you overcome them?**
The methods mentioned before were a challenge. Additionally, I had challenges trying to setup Vitest with React Testing Library as TypeScript would often return errors in which I had ease using in React by itself.

## 🚀 About Me

I love solving problems and continuously teaching myself new concepts. I have great interpersonal skills and i'm ready to apply myself technically to become a well rounded professional.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Tim-Mclennan/My-Portfolio)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tim-mclennan-0563341aa/)

