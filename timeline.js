/* =========================================
   ECHOES TIMELINE
========================================= */


/* =========================================
   GET SAVED MEMORIES
========================================= */

let memories =
    JSON.parse(
        localStorage.getItem("echoesMemories")
    ) || [];


/* =========================================
   TIMELINE CONTAINER
========================================= */

const timeline =
    document.querySelector(".timeline");


/* =========================================
   DISPLAY UPLOADED MEMORIES
========================================= */

function displayUploadedMemories() {

    if (memories.length === 0) {

        return;

    }


    memories.forEach(memory => {

        const item =
            document.createElement("div");


        item.className =
            "timeline-item uploaded-memory";

        item.dataset.year =
            memory.year;


        item.innerHTML = `

            <div class="timeline-dot">
                📸
            </div>


            <div class="timeline-card glass-card">

                <span class="timeline-year">
                    ${memory.year}
                </span>


                <h2>
                    ${memory.title}
                </h2>


                <p class="memory-author">
                    Shared by <strong>
                    ${memory.student}
                    </strong>
                </p>


                ${
                    memory.image
                    ?
                    `
                    <img
                        src="${memory.image}"
                        class="uploaded-memory-image"
                        alt="${memory.title}">
                    `
                    :
                    ""
                }


                <p>
                    ${memory.description}
                </p>


                <div class="timeline-tags">

                    <span>
                        ${memory.category}
                    </span>

                    <span>
                        ❤️ Student Memory
                    </span>

                </div>


                <small class="memory-date">

                    Added on ${memory.date}

                </small>

            </div>

        `;


        timeline.appendChild(item);


        /* Animate */

        setTimeout(() => {

            item.classList.add("show");

        }, 100);

    });

}


/* Display saved memories */

displayUploadedMemories();



/* =========================================
   MEMORY BUTTONS
========================================= */

const memoryButtons =
    document.querySelectorAll(".view-memory");


memoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.getAttribute("data-target");

        const panel =
            document.getElementById(targetId);


        panel.classList.toggle("open");


        if (panel.classList.contains("open")) {

            button.innerText =
                "Hide Memories ↑";

        } else {

            button.innerText =
                "View Memories →";

        }

    });

});



/* =========================================
   YEAR FILTER
========================================= */

const yearButtons =
    document.querySelectorAll(".year-btn");


function filterTimeline(year) {

    const items =
        document.querySelectorAll(".timeline-item");


    items.forEach(item => {

        const itemYear =
            item.dataset.year;


        if (
            year === "all" ||
            itemYear === year
        ) {

            item.classList.remove("hidden");

        } else {

            item.classList.add("hidden");

        }

    });

}


yearButtons.forEach(button => {

    button.addEventListener("click", () => {

        yearButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedYear =
            button.dataset.year;


        filterTimeline(selectedYear);

    });

});



/* =========================================
   SCROLL ANIMATION
========================================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(".timeline-item")
    .forEach(item => {

        observer.observe(item);

    });