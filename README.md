# reactnative
what is react native?
react native is open source framework for building thr native and ios android app using react 

js to to access plateform-specific aPI (such as camara and push notification) 
React components to define the appearance and behavior pf your user interface itself is a library designed  for building UI

react-dom for web apps and react -native for native mobile app

why react native?
Ios apps require Swift or kotlin
android apps require java or kotlin

with approximately 31% om ios and 68% on android  you  would typically need to develop to sepearte apps using diff tech

with react native you can create app that work seamlessly on both platforms

Expo vs React native
React native -> React native is an open-source framework  maintain by facebook designed for building the cross platform apps
Expo -> Expo is an open-source framework  maintain by Expo itself designed for building the cross platform apps

Unlike plain RN(React native) which can be challenging  and time consuming to set up, Expo provide a streamline  experience 

Expo has suite of tools and serive built around react native which gratky simplest  the development  process

with plain react native we cannot build ios apps on windows or linus machine native ios apps can only be buit on macos machine

Expo
Expo has  evolved significantly  over the years and now supporrt nearly all the features necessary  for building  mobile  apps

core coponents
when we use  react to create web interface  we often use html tags such as like div h1 p tags like react native not support this because incorporated concepts  of DOM React Native doesn't support the react-dom package because the react-dom package contains methods that are only supported for web applications.
 in react native ios and android suport so employ the fundamentals  development use the building block we call it as view 

 view is small rectangular elements on screen that can display txt images or response the user input

view wriitten  for
android -> java or kotlin
ios ->swfit or objective c
react native -> this process become simpler thorugh javascript 
at run time generate the correcsponding for building our native react app

view ->
ScrollView-> wrap the platform secefiect functionality 
button->button will allow the user to trigger the component 
the button component is platform specific rendering the ios and android 

pressable = it is wrapper component that detecte various stage of press  interactions and its defined children 
we can create custom button using pressable:
    onPressIn is called when a press is activated
    onLongPress is triggred when press is held for longer than 500 millisecond 
    onPressOut is called when  the press gesture is deactivated

Modal=> modal is a screen that overlays the app content  to provide  the important  information  or prompt  the user for a decision 

Since they are purposefully interuptive make sure them use only when necessary 

Status Bar
    components control over the application the staus bar zone typically top of the screen they indicates diplay the current time wifi network infor and battry percentage 
