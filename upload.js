/* =========================================
   ECHOES MEMORY UPLOAD
========================================= */


/* Get form elements */

const memoryForm =
    document.getElementById("memoryForm");

const imageInput =
    document.getElementById("memoryImage");

const imagePreview =
    document.getElementById("imagePreview");

const uploadMessage =
    document.getElementById("uploadMessage");


/* =========================================
   IMAGE PREVIEW
========================================= */

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {

        imagePreview.innerHTML = "";

        return;

    }


    const reader = new FileReader();


    reader.onload = function (event) {

        imagePreview.innerHTML = `

            <img
                src="${event.target.result}"
                alt="Memory preview">

        `;

    };


    reader.readAsDataURL(file);

});


/* =========================================
   SAVE MEMORY
========================================= */

memoryForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get values */

    const title =
        document.getElementById("memoryTitle").value.trim();

    const student =
        document.getElementById("studentName").value.trim();

    const year =
        document.getElementById("memoryYear").value;

    const category =
        document.getElementById("memoryCategory").value;

    const description =
        document.getElementById("memoryDescription").value.trim();


    const imageFile =
        imageInput.files[0];


    /* =========================================
       CREATE MEMORY
    ========================================= */

    const saveMemory = function (imageData) {

        const memory = {

            id: Date.now(),

            title: title,

            student: student,

            year: year,

            category: category,

            description: description,

            image: imageData || "",

            date: new Date().toLocaleDateString()

        };


        /* Get existing memories */

        let memories =
            JSON.parse(
                localStorage.getItem("echoesMemories")
            ) || [];


        /* Add new memory */

        memories.push(memory);


        /* Save */

        localStorage.setItem(
            "echoesMemories",
            JSON.stringify(memories)
        );


        /* Success message */

        uploadMessage.innerHTML = `
            
            <div class="success-box">

                🎉 Memory successfully added
                to ECHOES!

            </div>

        `;


        /* Reset form */

        memoryForm.reset();

        imagePreview.innerHTML = "";


        /* Automatically go to timeline */

        setTimeout(function () {

            window.location.href =
                "timeline.html";

        }, 1500);

    };


    /* =========================================
       HANDLE IMAGE
    ========================================= */

    if (imageFile) {

        const reader =
            new FileReader();


        reader.onload = function (event) {

            saveMemory(event.target.result);

        };


        reader.readAsDataURL(imageFile);

    } else {

        saveMemory("");

    }

});