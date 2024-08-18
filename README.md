

Machine Learning can be time consuming to learn fully from scratch. But if want to build some proejects on ML without having to learn it into deep, you can use [ml5.js](https://ml5js.org/) library which is build on top of tensorflow.js library. ml5.js makes it easier to write and understand the code. It also has some great features like creating our own model, training it, using pre build model, etc. all in browser. 

>**Note**: These projects are part of a course that is available on [freeCodeCamp](https://www.freecodecamp.org/news/learn-ml5js-for-machine-learning-in-javascript/) 

# ml5.js Projects

This repository contains a collection of projects I have created using the [ml5.js](https://ml5js.org/) library, which makes machine learning accessible and easy to use in web applications.

## 1. Rock Paper Scissors Game

### Overview
This project is a Rock Paper Scissors game that uses a machine learning model to predict hand gestures in real-time via webcam. The model is trained to recognize gestures for rock, paper, and scissors, allowing users to play against the computer.

### Features
- **Teachable Machine Integration:** The model is trained using [Teachable Machine](https://teachablemachine.withgoogle.com), making it easy to retrain and update.
- **Data Sources:** The model is trained on high-quality data from the [Rock Paper Scissors dataset on Kaggle](https://www.kaggle.com/datasets/drgfreeman/rockpaperscissors) and some of my own data.
- **Score System:** The game includes a score-based system where users can play multiple rounds against the computer.

### Technologies Used
- **ml5.js**
- **Teachable Machine**
- **Webcam Integration**

### How to Run
1. Clone the repository.
2. Open `index.html` in your web browser.
3. Allow access to your webcam and start playing!

---

## 2. Pretrained Model Project

### Overview
This project leverages the 'MobileNet' pretrained model to predict the content of images with high accuracy. For example, given an image of a dog, the model will not only identify it as a dog but also predict its breed with 100% accuracy.

### Features
- **MobileNet Integration:** Utilizes the MobileNet model to perform image classification tasks.
- **High Accuracy:** Capable of predicting detailed characteristics such as the breed of a dog.

### Technologies Used
- **ml5.js**
- **MobileNet**

### How to Run
1. Clone the repository.
2. Place any image in the specified directory.
3. Open `index.html` in your web browser.
4. Upload the image and see the predictions.

---

## 3. Transfer Learning Model Project

### Overview
This project applies transfer learning to the MobileNet model to train it on new data for specific predictions. For example, if MobileNet cannot recognize a dinosaur, you can train it with dinosaur images, and the model will then predict dinosaurs with 100% accuracy.

### Features
- **Custom Training:** Allows users to train the MobileNet model on new datasets.
- **Transfer Learning:** Enhances the base MobileNet model to recognize new classes of objects.

### Technologies Used
- **ml5.js**
- **MobileNet**
- **Custom Data Integration**

### How to Run
1. Clone the repository.
2. Prepare your dataset.
3. Follow the instructions to train the model with your custom data.
4. Open `index.html` in your web browser and see the predictions.

---

## 4. Neural Network Project

### Overview
In this project, I created a custom neural network using the ml5.js library to predict a student's StateGrade based on study-related factors. The model uses regression to predict the StateGrade based on inputs such as studyHourPerWeek, AttendancePercentage, and SchoolGrade.

### Features
- **Custom Neural Network:** Built from scratch using ml5.js, allowing for flexibility in model design.
- **Data Normalization:** The model is trained on normalized data for better accuracy.
- **Regression Model:** Uses regression to predict continuous output (StateGrade).

### Technologies Used
- **ml5.js**
- **Custom Neural Network**
- **webGl**

### How to Run
1. Clone the repository.
2. Prepare your data and normalize it as needed.
3. Open `index.html` in your web browser.
4. Input study-related factors and get the predicted StateGrade.

## Acknowledgments
- [ml5.js](https://ml5js.org/)
- [Teachable Machine](https://teachablemachine.withgoogle.com)
- [Kaggle Rock Paper Scissors Dataset](https://www.kaggle.com/datasets/drgfreeman/rockpaperscissors)
- The developers and community behind the ml5.js library

## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🔗 Profile Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hardikchawhan)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ChawhanHardik)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/hardik_chawhan_10/)

