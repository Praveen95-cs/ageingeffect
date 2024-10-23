document.addEventListener('DOMContentLoaded', () => {

    const currDate = new Date();
    document.getElementById('currDate').innerText = `Current Date: ${currDate.toLocaleDateString()}`;
    document.getElementById('CalcAge').addEventListener('click', calculateAge);
    document.getElementById('reset').addEventListener('click', resetForm);
    
    const ageingSideEffects = {
        "wrinkles": "As you age, your skin becomes less elastic and more prone to sagging and wrinkles due to the loss of collagen.",
        "weakened immunity": "Aging weakens the immune system, making older adults more susceptible to infections and diseases.",
        "bone density loss": "Bone density decreases with age, increasing the risk of fractures and conditions like osteoporosis.",
        "muscle loss": "Sarcopenia, or muscle loss, is common in older adults, leading to weakness and reduced mobility.",
        "cognitive decline": "Aging can bring cognitive changes such as memory loss, slower thinking, and an increased risk of dementia.",
        "slower metabolism": "Metabolism slows down with age, which can lead to weight gain even with the same calorie intake.",
        "vision changes": "Common age-related eye issues include presbyopia, cataracts, and glaucoma.",
        "hearing loss": "Hearing tends to decline as people age, often due to long-term exposure to loud sounds or natural wear of the inner ear.",
        "heart health": "The heart and blood vessels can stiffen with age, increasing the risk of cardiovascular diseases.",
        "digestive issues": "Aging can slow down digestion, leading to constipation and other gastrointestinal problems.",
        "joint pain": "Many older adults experience joint pain and stiffness due to conditions like arthritis.",
        "balance issues": "Balance problems increase with age, leading to a higher risk of falls and injuries.",
        "sleep disturbances": "Older adults often experience changes in sleep patterns, such as insomnia or difficulty staying asleep.",
        "dry skin": "Aging skin produces less oil, which can lead to dryness and irritation.",
        "fatigue": "Older adults may experience more fatigue and lower energy levels due to various age-related changes."
    };
    
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    sendButton.addEventListener('click', () => {
        handleChatInput();
    });

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleChatInput();
        }
    });

    function handleChatInput() {
        const input = userInput.value.toLowerCase();
        userInput.value = '';
        
        chatLog.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

        if (ageingSideEffects[input]) {
            chatLog.innerHTML += `<p><strong>Bot:</strong> ${ageingSideEffects[input]}</p>`;
        } else {
            chatLog.innerHTML += `<p><strong>Bot:</strong> I'm sorry, I can provide information about aging effects such as wrinkles, weakened immunity, bone density loss, muscle loss, cognitive decline, slower metabolism, vision changes, hearing loss, heart health, digestive issues, joint pain, balance issues, sleep disturbances, dry skin, and fatigue.</p>`;
        }

        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function calculateAge() {
        const dobInput = document.getElementById('DOB').value;
        
        if (!dobInput) {
            document.getElementById('age').innerText = "Please enter your date of birth.";
            return;
        }
    
        const dob = new Date(dobInput);
    
        if (isNaN(dob.getTime())) {
            document.getElementById('age').innerText = "Please enter a valid date in MM/DD/YYYY format.";
            return;
        }
    
        const today = new Date();
        let ageYears = today.getFullYear() - dob.getFullYear();
        let ageMonths = today.getMonth() - dob.getMonth();
        let ageDays = today.getDate() - dob.getDate();
    
        // Adjust for negative days/months
        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
    
        document.getElementById('age').innerText = `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    }
    
    
    function resetForm() {
        document.getElementById('DOB').value = '';
        document.getElementById('age').innerText = '';
        chatLog.innerHTML = ''; // Clear chat log
    }
});
