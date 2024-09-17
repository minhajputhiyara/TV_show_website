# Money Heist Episode Viewer
A web application to view and interact with episodes from the Money Heist series. This project includes a Django backend API for managing episodes, comments, and cast information, and a React frontend for displaying this data.

Table of Contents
Prerequisites
Backend Setup
Frontend Setup
Running the Project
Contributing
License
Prerequisites
Before you begin, ensure you have met the following requirements:

Python 3.8+
Node.js 14+
npm (Node Package Manager)
PostgreSQL (or other database, if configured)
Backend Setup
Clone the repository:

bash
 
git clone <repository-url>
cd <repository-name>
Create and activate a virtual environment:

bash
 
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
Install Django and other dependencies:

bash
 
pip install -r requirements.txt
Configure the database:

Update the DATABASES setting in show/settings.py with your database configuration.
Apply migrations:

bash
 
python manage.py makemigrations
python manage.py migrate
Create a superuser (admin):

bash
 
python manage.py createsuperuser
Load initial data:

You can use the Django shell to add initial data:
bash
 
python manage.py shell
python
 
from show.models import Episode, Cast, Comment

# Example data for Episodes
Episode.objects.create(title='Episode 1', description='Description of Episode 1', image='https://m.media-amazon.com/images/M/MV5BMmVmZGVkMTMtOWM0NC00MzJjLWI4NWYtOGZjYTM3ZDJlYzY3XkEyXkFqcGc@._V1_QL75_UX820_.jpg', air_date='2024-01-01')
# Add other episodes similarly

# Example data for Cast
Cast.objects.create(name='Álvaro Morte', profile_pic='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Alvaro_Morte_%28200x290%29.jpg/85px-Alvaro_Morte_%28200x290%29.jpg', bio='Actor playing The Professor')
# Add other cast members similarly
Run the server:

bash
 
python manage.py runserver
Frontend Setup
Navigate to the frontend directory:

bash
 
cd frontend
Install dependencies:

bash
 
npm install
Start the React development server:

bash
 
npm start
This will start the React application and open it in your default browser at http://localhost:3000.

Running the Project
Ensure the backend server is running:

bash
 
python manage.py runserver
Ensure the frontend server is running:

bash
 
npm start
Navigate to the frontend in your browser:

Open http://localhost:3000 to view the application.
