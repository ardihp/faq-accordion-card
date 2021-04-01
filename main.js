let questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {
  questions[i].onclick = function() {
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      questions[i].style.fontWeight = "lighter";
      console.log('tutup');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        questions[i].style.fontWeight = "bold";
        console.log('buka');
    }
  };
}
