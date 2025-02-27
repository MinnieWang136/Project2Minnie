
        // Array of images
        // DIRECTIONS: UPDATE THE URLS WITH THE RELATIVE LINKS OF YOUR IMAGES
        const images = [
            "A.png", //A
            "B.png", //B
            "C.png", //C
            "D.png",
            "E.png",
            "F.png",
            "G.png",
            "H.png",
            "I.png",
            "J.png",
            "K.png",
            "L.png",
            "M.png",
            "N.png",
            "O.png",
            "P.png",
            "Q.png",
            "R.png",
            "S.png",
            "T.png",
            "U.png",
            "V.png",
            "W.png",
            "X.png",
            "Y.png",
            "Z.png",
            
        ];

        function displayImage() {
            const input = document.getElementById("charInput").value.toUpperCase();
            const imgElement = document.getElementById("displayedImage");
            
            // Assign an image based on character (A-Z)
            const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
            if (index >= 0 && index < images.length) {
                imgElement.src = images[index];
                imgElement.style.display = "block";
            } else {
                /* 
                alert("Please enter a letter between A and Z.");
                imgElement.style.display = "none";
                */

                // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
                imgElement.src = ""
                imgElement.style.display = "block";
            }
        }
