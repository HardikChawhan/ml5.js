let fileInput = document.getElementById("fileInput");
let imageContainer = document.getElementById("imageContainer");
let message = document.getElementById("message");
let labelInput = document.getElementById("labelInput");
let addButton = document.getElementById("addButton");
let trainButton = document.getElementById("trainButton");
let predictButton = document.getElementById("predictButton");

let featureExtractor;
let classifier;
let uploadedImages = [];

function loadImgFiles(event) {
  imageContainer.innerHTML = "";
  uploadedImages = [];
  const files = event.target.files;

  if (files.length === 0) {
    message.innerHTML = "No files selected. Please upload images.";
    addButton.disabled = true;
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.onload = () => URL.revokeObjectURL(img.src);
    imageContainer.appendChild(img);
    uploadedImages.push(img);
  }

  message.innerHTML = `${files.length} image(s) uploaded. You can now add labels and train.`;
  addButton.disabled = false;
}

function setupModel() {
  featureExtractor = ml5.featureExtractor('MobileNet',modelLoaded);
  classifier = featureExtractor.classification();
}

function modelLoaded() {
  message.innerHTML = "Model loaded. You can now add images and train.";
  addButton.addEventListener("click", addImages);
  trainButton.addEventListener("click", trainModel);
  predictButton.addEventListener("click", predict);
}

function addImages() {
  const label = labelInput.value;
  if (label.trim() === "") {
    alert("Please enter a label");
    return;
  }
  uploadedImages.forEach((img) => {
    classifier.addImage(img,label);
  });
  message.innerHTML = `Added ${uploadedImages.length} image(s) with label: ${label}`;
  trainButton.disabled = false;
}

function trainModel() {
  message.innerHTML = "Training model...";
  classifier.train((loss)=>{
    if(loss){
      message.innerText = `training.... loss: ${loss}`;
    }
    else{
      message.innerText = 'training complete';
      predictButton.disabled = false;
    }
  })
}

function predict() {
  if (uploadedImages.length === 0) {
    message.innerHTML = "Please upload an image to predict.";
    return;
  }

  classifier.classify(uploadedImages[0],(error,result)=>{
    if(error){
      console.error(error);
    }
    else{
      console.log(result);
      
      message.innerText = `prediction: ${result[0].label} ${result[0].confidence.toFixed(2)}`
    }
  })
}

fileInput.addEventListener("change", loadImgFiles);
setupModel();
