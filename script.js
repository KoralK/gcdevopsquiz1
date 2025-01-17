const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const quizQuestions = [
    {
        question: "What is the primary purpose of VPC Peering?",
        options: [
            "To connect an on-premises network to Google Cloud.",
            "To provide a secure connection over the public internet.",
            "To enable private connectivity between two VPC networks.",
            "To establish high-speed, dedicated connections to Google Cloud."
        ],
        answer: "To enable private connectivity between two VPC networks."
    },
    {
        question: "Which of the following is a key requirement for VPC Peering?",
        options: [
            "Overlapping subnet ranges between the peered VPCs.",
            "Using public IP addresses for communication.",
            "Non-overlapping subnet ranges between the peered VPCs.",
            "Establishing a VPN tunnel between peered VPCs."
        ],
        answer: "Non-overlapping subnet ranges between the peered VPCs."
    },
    {
      question: "Which of the following does Cloud VPN use to secure the connection?",
      options: [
          "TLS encryption.",
          "SSH encryption.",
          "IPsec encryption.",
          "BGP routing."
      ],
      answer: "IPsec encryption."
    },
    {
      question: "What are the two main types of Cloud VPN gateways?",
      options: [
          "Dedicated and Partner.",
          "Classic and HA.",
          "Direct and Indirect.",
          "Public and Private."
      ],
      answer: "Classic and HA."
    },
    {
        question: "Which of the following is the SLA uptime for Classic VPN and HA VPN?",
        options: [
            "99.9% for Classic VPN and 99.99% for HA VPN",
            "99.99% for Classic VPN and 99.9% for HA VPN",
            "99.0% for Classic VPN and 99.9% for HA VPN",
            "99.9% for both Classic and HA VPN"
        ],
        answer: "99.9% for Classic VPN and 99.99% for HA VPN"
    },
    {
      question: "What is the maximum transmission unit (MTU) size that should be used on an on-premises VPN gateway connecting to Cloud VPN, as suggested in the document?",
      options: [
          "1500 bytes.",
          "1460 bytes.",
          "9000 bytes.",
          "No specific MTU is required."
        ],
      answer: "1460 bytes."
    },
    {
        question: "What are the two flavors of Cloud Interconnect?",
        options: [
            "Classic and HA.",
            "Dedicated and Partner.",
            "Direct and Indirect.",
            "Public and Private."
        ],
        answer: "Dedicated and Partner."
    },
    {
      question: "What is the minimum bandwidth for the Partner Interconnect according to the document?",
      options: [
          "10 Gbps",
          "100 Gbps",
          "50 Mbps",
          "1 Gbps"
      ],
      answer: "50 Mbps"
    },
    {
        question: "Which routing protocol is primarily used for Cloud Interconnect?",
        options: [
            "Static Routing",
            "BGP",
            "OSPF",
            "RIP"
        ],
        answer: "BGP"
    },
     {
        question: "Which scenario best describes a use case for HA VPN?",
        options: [
            "Connecting two subnets in the same VPC network.",
            "Connecting two VPC networks in different organizations.",
             "Ensuring a highly available connection between a corporate network and Google Cloud.",
             "Establishing a low-bandwidth connection to an external partner."
        ],
        answer: "Ensuring a highly available connection between a corporate network and Google Cloud."
    },
    {
        question: "For full redundancy, how many tunnels are required for HA VPN?",
        options: [
            "1",
            "2 or 4",
            "3",
            "5"
        ],
        answer: "2 or 4"
    }

];

function generateQuiz() {
    let quizHTML = "";
    quizQuestions.forEach((question, index) => {
        quizHTML += `<div class="question">
                       <p>${index + 1}. ${question.question}</p>
                       <ul>`;
        question.options.forEach((option, optionIndex) => {
            quizHTML += `<li><input type="radio" name="question-${index}" value="${option}" id="q${index}-opt${optionIndex}">
                          <label for="q${index}-opt${optionIndex}">${option}</label></li>`;
        });
        quizHTML += `</ul></div>`;
    });
    quizContainer.innerHTML = quizHTML;
}

function calculateResults() {
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });
    resultsContainer.innerHTML = `Your Score: ${score} out of ${quizQuestions.length}`;
}


generateQuiz();

submitButton.addEventListener('click', calculateResults);