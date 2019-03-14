**OPL**


This project includes the constantly evolving OPL platform.


**OPL Back-end**


The back-end is mainly developed, based on the Python and Django Framework.

This part requires the installation of **python** >= 3.5, **virtualenv**, and **postgres** >= 9.5.

To set this up for development, create a virtualenv with python3, activate it, clone the repo, pull the code and type the following commands:

    pip3 install -r requirements.txt

This will install the dependencies.

then create a empty database named **opl** by typing following in your terminal

`PGPASSWORD=postgres createdb opl -h localhost -U postgres`

Finally, type:

    python manage.py migrate

after this you need to type the following:

    python manage.py collectstatic --noinput

followed by:

    python manage.py runserver


**How to contribute**

Go through the list of open issues. Pick the one you are interested in, ask questions if you are unclear, check your code in and submit a pull request.