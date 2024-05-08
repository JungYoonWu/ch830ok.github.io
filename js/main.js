document.getElementById('generate-voice').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    if (!textInput.trim()) {
        alert('Please enter a script.');
        return;
    }
    const selectedVoices = document.querySelectorAll('input[name="voice"]:checked');
    if (selectedVoices.length === 0) {
        alert('Please select at least one voice.');
        return;
    }
    
    let voices = [];
    selectedVoices.forEach((voice) => {
        voices.push(voice.value);
    });
    
    alert(`Generating voice for: "${textInput}" with voice(s): ${voices.join(', ')}`);
    // Here, you would typically make an API call to your TTS service
});
