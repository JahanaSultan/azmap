const pathes = [...document.querySelectorAll("path")]
        pathes.map(path => {
           
            path.addEventListener("click", (e) => { 
                pathes.map(a=>a.classList.remove('green'))
                document.querySelector("div")?.remove();
                let name = path.getAttribute("name");
                let div = document.createElement("div");
                div.innerHTML = `<p>Şəhər: ${name}</p>`;
                div.style.top = `${e.clientY}px`;
                div.style.left = `${e.clientX}px`;
                document.body.append(div);
                div.classList.add("modal")
                path.classList.add('green')
            })
        })