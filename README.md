# Personal Project 1: IchatU

## Service Objectives:
- First Objective: 
	- The users can communicate remotely using this service.

## Developement Objectives:
- Main Objective:
	- What?
		- To test which DBMS, NoSQL or MySQL is suitable for expanding SNS(Social Network Service) functionality.
			- Major points to keep in mind:
				1. Which one is easier to add new tables?
				2. Which one is easier to edit column properties and values of the pre-existing tables?
				3. Which one is easier to add relations between the new tables and pre-existing tables?
				4. Which one is faster to join(referring a row from a table to another table) the tables?
	- How?
		- I will develop the project using MySQL first, and with NoSQL after.
			1. Measure the number of lines added to add the same table. The one with less number of lines added is the better one.
			2. After the development, review the readability of the entity files, and the modules. The one with the better readability is the better one.
			3. Measure the average time that the database server and the server takes transfer the data. The one takes less time is the better one.
	- Why?
		- Data loading speed is the key aspect of the online services these days. When it comes to the social networking service, the importance of it increases tremendously. There are many points that the developers can consider to improve and shorten the data loading time, but I think the first point to start to do so is reducing communicating time between DBMS and the server. Hence, I want to make a valuable result that can prove which one is better.

## Functionalities:
- The users can join the service by providing their names, usernames, passwords, and nicknames.
- Once the users are registered, they can log in by providing their ids and passwords.
- The users can log out anytime by clicking the log out button on the header.
- The users can 
- 