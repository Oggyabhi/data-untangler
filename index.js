function processData() {
    let source1 = document.getElementById('source1').value;
    let source2 = document.getElementById('source2').value;
    let resultDiv = document.getElementById('result');

    // यहाँ हम सरल नियम लागू करेंगे (आपका मुख्य विचार)
    let source1Trust = 0;
    let source2Trust = 0;

    // उदाहरण नियम: यदि स्रोत में "विशेषज्ञ" शब्द है, तो उसे अधिक विश्वसनीय मानें
    if (source1.includes("विशेषज्ञ")) {
        source1Trust += 1;
    }
    if (source2.includes("विशेषज्ञ")) {
        source2Trust += 1;
    }

    // उदाहरण नियम: यदि स्रोत लंबा है, तो उसे थोड़ा अधिक विश्वसनीय मानें
    if (source1.length > 100) {
        source1Trust += 0.5;
    }
    if (source2.length > 100) {
        source2Trust += 0.5;
    }

    // उदाहरण नियम: यदि स्रोत में विरोधाभासी जानकारी है, तो कम विश्वसनीय स्रोत को फ़्लैग करें
    if (source1.includes("नहीं") && source2.includes("हाँ")) {
        if (source1Trust < source2Trust) {
            source1Trust -= 1; // कम विश्वसनीय
        } else {
            source2Trust -= 1; // कम विश्वसनीय
        }
    }

    let conclusion = "";
    if (source1Trust > source2Trust) {
        conclusion = "स्रोत 1 अधिक विश्वसनीय लगता है।";
    } else if (source2Trust > source1Trust) {
        conclusion = "स्रोत 2 अधिक विश्वसनीय लगता है।";
    } else {
        conclusion = "दोनों स्रोत समान रूप से विश्वसनीय लगते हैं।";
    }

    resultDiv.innerHTML = "<p>स्रोत 1 विश्वसनीयता: " + source1Trust + "</p><p>स्रोत 2 विश्वसनीयता: " + source2Trust + "</p><p>निष्कर्ष: " + conclusion + "</p>";
}