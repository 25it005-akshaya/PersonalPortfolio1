fetch("http://localhost:5000/projects")
.then(response => response.json())
.then(data => {

    const projectDiv = document.getElementById("projects");

    projectDiv.innerHTML = "";

    data.forEach(project => {

        projectDiv.innerHTML += `
            <div class="project">
                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <p>
                    <a href="${project.github}" target="_blank">GitHub</a>
                </p>

                <p>
                    <a href="${project.demo}" target="_blank">Live Demo</a>
                </p>

            </div>
        `;

    });

})
.catch(error => {

    console.log(error);

});