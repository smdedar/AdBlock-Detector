var modalDesign = '<!-- The Modal --><div id="myModal" class="modal" style="display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4);" > <!-- Modal content --> <div class="modal-content" style="background-color:#fefefe;margin-top:auto;margin-bottom:auto;margin-right:auto;margin-left:auto;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;border-width:1px;border-style:solid;border-color:#888;width:80%;" > <img src="https://www.seoclerks.com/files/user/images/adblock.png" style="display: block;margin-left: auto; margin-right: auto; width: 50%;" alt="" srcset=""> <p style="text-align:center;">Disable Adblock & Refresh Page</p> </div></div>';

//Pass Modal Design
document.getElementById("modalView").innerHTML = modalDesign;

// Get the modal
 var modal = document.getElementById("myModal");


//------------------------------------------------------//
//                                                      //
// Collect From: https://github.com/sitexw/FuckAdBlock  //
//                                                      //
//------------------------------------------------------//

// Function called if AdBlock is not detected
function adBlockNotDetected() {
    // alert('AdBlock is not enabled');
     
 }
 // Function called if AdBlock is detected
 function adBlockDetected() {
     //alert('AdBlock is enabled');
     modal.style.display = "block";   
 }
 
 // We look at whether FuckAdBlock already exists.
 if(typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
     // If this is the case, it means that something tries to usurp are identity
     // So, considering that it is a detection
     adBlockDetected();
 } else {
     // Otherwise, you import the script FuckAdBlock
     var importFAB = document.createElement('script');
     importFAB.onload = function() {
         // If all goes well, we configure FuckAdBlock
         fuckAdBlock.onDetected(adBlockDetected)
         fuckAdBlock.onNotDetected(adBlockNotDetected);
     };
     importFAB.onerror = function() {
         // If the script does not load (blocked, integrity error, ...)
         // Then a detection is triggered
         adBlockDetected(); 
     };
     importFAB.integrity = 'sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=';
     importFAB.crossOrigin = 'anonymous';
     importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js';
     document.head.appendChild(importFAB);
 }
 