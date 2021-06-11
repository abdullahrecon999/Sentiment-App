# Description
The sentiment Application is developed as the part of the SEC course final implementation of project. The Application is developed in **React-native** using javascript with **Expo client** to run applicaton on phone. 
The application connects with a custom **Django Server** which contains the python ML library called **Text2Emotion** and **REST API** to connect to React-native client.

# Important Guidelines
The **Django server** does not runs on Local host ip but the System's Ip at port 8000. And the React-native code also needs to connect to the Same django server ip for proper Rest api calls.
Its better to create a virtual python enviroment in another directory besides the backend directory by:
```
> pip install virtualenv
> virtualenv localPythonEnv
```
##### To execute to Virtual enviroment
Execute the following in comand line / terminal
```
Windows/> localPythonEnv\Scripts\activate
Linux/> source localPythonEnv/bin/activate
```

# Requirements
To run the application successfully following are the required softwares.
+ Expo Client installed on Pc
+ Expo Go app for ios or Android (used to run app directly on phone)
+ Django
+ python 3.7.x or up
+ Python Requirements

# Project Layout
The Following Layout of project file is best suited
SentimentAppBackend
![The layout](https://github.com/abdullahrecon999/Sentiment-App/blob/main/assets/Screenshot%20from%202021-06-11%2016-39-29.png)
