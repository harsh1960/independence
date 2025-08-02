document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const generateBtn = document.getElementById('generateBtn');
    const inputSection = document.getElementById('inputSection');
    const shareSection = document.getElementById('shareSection');
    const fromName = document.getElementById('fromName');
    const shareableLink = document.getElementById('shareableLink');
    const copyBtn = document.getElementById('copyBtn');
    const whatsappShareBtn = document.getElementById('whatsappShareBtn');

    // Function to handle URL parameters on page load
    const handlePageLoad = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');

        if (name) {
            // If a name is in the URL, display the personalized greeting
            document.title = `${name} की तरफ से स्वतंत्रता दिवस की शुभकामनाएं`;
            fromName.textContent = name;
            inputSection.classList.add('hidden');
            shareSection.classList.remove('hidden');

            const link = window.location.href;
            shareableLink.value = link;
            
            const personalizedMessage = `*${name}* की तरफ से आपको स्वतंत्रता दिवस की हार्दिक शुभकामनाएँ! 🇮🇳`;
            const whatsappMessage = `${personalizedMessage}\n\nयह शुभकामनाएं देखने के लिए लिंक पर क्लिक करें:\n${link}`;
            whatsappShareBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
        }
    };

    // Event listener for the generate button
    generateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            const baseUrl = window.location.origin + window.location.pathname;
            const newUrl = `${baseUrl}?name=${encodeURIComponent(name)}`;

            fromName.textContent = name;
            shareableLink.value = newUrl;

            const personalizedMessage = `*${name}* की तरफ से आपको स्वतंत्रता दिवस की हार्दिक शुभकामनाएँ! 🇮🇳`;
            const whatsappMessage = `${personalizedMessage}\n\nयह शुभकामनाएं देखने के लिए लिंक पर क्लिक करें:\n${newUrl}`;
            whatsappShareBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

            inputSection.classList.add('hidden');
            shareSection.classList.remove('hidden');
        } else {
            alert('कृपया अपना नाम दर्ज करें।');
        }
    });

    // Event listener for the copy button
    copyBtn.addEventListener('click', () => {
        shareableLink.select();
        document.execCommand('copy');
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        }, 2000);
    });

    // Run the page load handler
    handlePageLoad();
});