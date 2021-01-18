# kpopzodiacs
finding similar birthdays to kpop celebs

Steps to use:
1. Setup XAMPP or similar client.
1a. For XAMPP, turn on Apache and MySQL after running XAMPP Control client. (Make sure the files are all in xampp/htdocs directory. Then, go to 127.0.0.1/phpmyadmin, make a new database called kpop, then select the kpop database and go to the import tab on the top. Select Choose File and select the setup.sql in the database folder.
2. Use setup.sql in the database folder to setup the database (the csv has already been compiled with all the birthdays, might need to reformat it to YYYY-MM-DD format)
2a. When reformatting, just open Excel and open the kpop.csv file, then right click column B and select Format cells... choose Date and then choose the appropriate YYYY-MM-DD format.

tldr; XAMPP -> phpmyadmin -> create database kpop -> import setup.sql -> if it yields errors then reformat csv file and re-import.

3. Now that the database is setup, go to 127.0.0.1/"your folder that you put in htdocs"/frontend/front_page.html

ie; 127.0.0.1/kpopzodiac/frontend/front_page.html
your kpopzodiac folder should be in \\xampp\htdocs\kpopzodiac like so

4. Put in your birthday and see the results. Enjoy.

This project was discontinued, as mentioned in the other html pages due to copyright issues regarding images when using og:images from the mentioned kpop website. I didn't see a point in using the Google search API for Creative Commons license pictures of kpop celebrities, even though this was feasible, as it seemed there were only pictures available for very well-known kpop celebrities (this project contains around 1.4k celebrities). Regardless, this project is now open-source and the csv files can be used to expand on this project (probably the most important info). You can look at the license text file for some information regarding fair use.

With regards to the scraper used in this project, I might or might not release it depending on the circumstances.
