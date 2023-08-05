const shape = document.getElementById("shape");
const topLeftInput = document.getElementById("topLeft");
const topRightInput = document.getElementById("topRight");
const bottomLeftInput = document.getElementById("bottomLeft");
const bottomRightInput = document.getElementById("bottomRight");
const copyBtn = document.getElementById("copyBtn");
const showcss = document.getElementById("showcss");

// Fonction pour mettre à jour la forme
function updateShape() 
{
  const topLeft = topLeftInput.value + "%";
  shape.style.borderTopLeftRadius = topLeft;


  const topRight = topRightInput.value + "%";
  shape.style.borderTopRightRadius = topRight;

  const bottomLeft = bottomLeftInput.value + "%";
  shape.style.borderBottomLeftRadius = bottomLeft;

  const bottomRight = bottomRightInput.value + "%";
  shape.style.borderBottomRightRadius = bottomRight;
  
  

  const borderRadius = shape.style.borderTopLeftRadius + " " + shape.style.borderTopRightRadius + " " + shape.style.borderBottomRightRadius + " " + shape.style.borderBottomLeftRadius;
  const cssCode = `border-radius: ${borderRadius};`;
  //console.log(cssCode);

 
  showcss.textContent =cssCode;
}

// Écouteurs d'événement pour les entrées de contrôle
topLeftInput.addEventListener("input", updateShape);
topRightInput.addEventListener("input", updateShape);
bottomLeftInput.addEventListener("input", updateShape);
bottomRightInput.addEventListener("input", updateShape);

// Écouteur d'événement pour le bouton "Copier le CSS"
copyBtn.addEventListener("click", function () 
{
    updateShape();
    const borderRadius = shape.style.borderTopLeftRadius + " " + shape.style.borderTopRightRadius + " " + shape.style.borderBottomRightRadius + " " + shape.style.borderBottomLeftRadius;
    const cssCode = `border-radius: ${borderRadius};`;
    navigator.clipboard.writeText(cssCode);
});
