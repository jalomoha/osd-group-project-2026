const members = [
    {
        name: "Abubakar Yahaya Zimit",
        username: "ayarzamit",
        role: "Group Leader",
        contribution: "Project Setup & Coordination"
    },
    // ================= ADD YOUR DETAILS BELOW =================
    // Copy the format below and add your info before the last ];

    {
        name: "Member Full Name 2",
        username: "githubusername2",
        role: "Group Member",
        contribution: "Added my profile card"
    },
    {
        name: "Member Full Name 3",
        username: "githubusername3",
        role: "Group Member",
        contribution: "Added my profile card"
    }
    // Add more members here...
];

function displayMembers() {
    const grid = document.getElementById('membersGrid');
    grid.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>${member.role}</strong></p>
            <p>${member.contribution}</p>
            <a href="https://github.com/${member.username}" target="_blank" class="github-link">
                @${member.username}
            </a>
        `;
        grid.appendChild(card);
    });
}

window.onload = displayMembers;
