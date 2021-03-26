
// scope global
(function () {
  // scope local
  const sentences = ["I am a brand new developer", "I am a wonderful girl", "I am looking for an alternation contract!"];
  // let i = 0;
  setInterval(function () {
    const sentenceIndex = Math.floor(Math.random() * sentences.length);
    const el = document.getElementById("subtitle");

    el.innerText = sentences[sentenceIndex];
    // document.getElementById("subtitle").innerText = sentences[i];
    // i = (i + 1)%sentences.length;
  }, 1000)
})();

(function () {
  // scope local
  const sentences = ["Let's meet!", "Let's chat!", "Let's share!"];
  // let i = 0;
  setInterval(function () {
    const sentenceIndex = Math.floor(Math.random() * sentences.length);
    const el = document.getElementById("subtitleContact");

    el.innerText = sentences[sentenceIndex];
    // document.getElementById("subtitle").innerText = sentences[i];
    // i = (i + 1)%sentences.length;
  }, 1000)
})();

function showMeaning(idArg) {
  // Etape 1. Selection de la div
  let div = document.getElementById(idArg);

  // Etape 2. Test si display est égale à none
  if (div.style.display === "none"){
    // a. Si display égale none alors mettre à display la valeur block
    div.style.display = "block";
  } else {
    // b. sinon mettre à display la valeur none
    div.style.display = "none";
  }
}


//To filter the project list and show the selected one.
function hideProject(el) {
  return el.classList.add('hidden');
}

function showProject(el) {
  return el.classList.remove('hidden');
}

function filterProjectsByTag(tag) {
  const projects = document.querySelectorAll('#project-list .project');

  if (tag === null || tag === undefined || tag === '') {
    return projects.forEach(showProject);
  }

  projects.forEach((projectEl) => {
    const tags = projectEl.dataset.tags.split(',');
    return (!tags.includes(tag)) ? hideProject(projectEl) : showProject(projectEl);
  });
}


