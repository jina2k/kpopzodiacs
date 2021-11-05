# kpopzodiacs
finding similar birthdays to kpop celebs

## How to Run

- git clone "https://github.com/jina2k/kpopzodiacs"
- Install Docker
- cd /<directory where you cloned repository>
- docker-compose up
- Go to localhost:8080
- Input birthday

## Changes
  
Implemented Docker instead of XAMPP. Mostly referenced http://geekyplatypus.com/making-your-dockerised-php-application-even-better/ and https://github.com/mikechernev/dockerised-php. Used PHP, MySQL, and NGINX.
  
## Notes

This project is discontinued until further notice, as mentioned in the other html pages due to copyright issues regarding images when using og:images from the mentioned kpop website. I didn't see a point in using the Google search API for Creative Commons license pictures of kpop celebrities, even though this was feasible, as it seemed there were only pictures available for very well-known kpop celebrities (this project contains around 1.4k celebrities). Regardless, this project is now open-source and the csv files can be used to expand on this project (probably the most important info). You can look at the license text file for some information regarding fair use.


The main purpose behind this project was to understand how scraping from websites worked, but the scraping code is excluded from the files as I didn't want to release it. Essentially all I used was BS4 + Selenium with a bit of browsing to collect the data. This project as a whole revolved around the data, not so much the website.
