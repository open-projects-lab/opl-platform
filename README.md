
# Open Project Lab

This project includes the constantly evolving OPL platform.


**REQUIRED FILES**
(The files have been pinned in various  Slack Channels)
After cloning the project, make sure that you have the added the files containing the secret keys and passwords to their respective locations.

See the directory structure below.

![Directory Structure](https://i.ibb.co/VCQH7Mg/OPL.png)

  

**OPL Project Development Setup**

Steps to setup project on your local machine:

- Install Pipenv [See Installation](https://realpython.com/pipenv-guide/).

- Install npm (version 6.8.0 or higher)[See Installation](https://www.npmjs.com/get-npm).

- Install node.js (verson v11.10.0 or higher)[See Installation](https://nodejs.org/en/download/).

- Make sure you have python 3.7.2 installed [See Installation](https://www.python.org/downloads/).

Once the above packages are installed goto the project root folder and use the command below:

    $pipenv install

(this installs all the required django packages for the project)

Now enter the virtual environment using:

    $pipenv shell

(this will be the environment under which the project will run locally)

Switch to frontend directory inside the project folder(Contains the frontend React code).

Install React dependencies for frontend Development. Use command :

    $npm install

Run the react server locally:

- Switch to frontend directory and use the following command :

    $npm start

- React server runs locally at http://localhost:8000 or http://127.0.0.1:8000

  

Run the django server locally:

- Switch to opl directory (Contains the backend code) and run the following command:

$python manage.py collectstatic --noinput && python manage.py makemigrations && python manage.py migrate && python manage.py runserver"

- Django runs locally at http://localhost:8000 or http://127.0.0.1:8000

  

**Be in sync with package updates during development**

It often happens that a developer installs a new third-party package(for react or django).

In such case, others must be in sync with these package updates.

  

To make sure you are up-to-date with the packages.After pulling the repo from github server, run the following commands (Inside the pipenv environment):

1 - `$pipenv sync`

2 - (Inside frontend directory): `$npm install`

  

**Production Setup**
This project uses Docker for Containerization and deployment.
*(This section will be updated soon)*

  
  

**How to contribute**
Go through the list of open issues. Pick the one you are interested in, ask questions if you are unclear, check your code in and submit a pull request.
