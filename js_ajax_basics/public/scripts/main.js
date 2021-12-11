// Write chatr code here!

// fetch('http://localhost:3434/messages')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// const refreshMessages = () => {
//     fetch('http://localhost:3434/messages')
//         .then(res => res.json())
//         .then(data => {
//             const messagesContainer = document.querySelector("#messages");
//             let messagesHTML = "";
//             data.forEach(message => {
//                 messagesHTML += `
//                 <li>
//                     ${message.body}
//                     <i data-id=${message.id} class="delete-link">x</i>
//                 </li>
//             `;
//             });
//             messagesContainer.innerHTML = messagesHTML;
//         })
// }
// refreshMessages();


const Message = {
    index() {
        return fetch('http://localhost:3434/messages')
            .then(res => res.json())
    },
    create(params) {
        const headers = new Headers({
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        });
        return fetch("http://localhost:3434/messages", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(params)
        })
    },
    delete(id) {
        return fetch(`http://localhost:3434/messages/${id}`, { method: "DELETE" })
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const messageForm = document.getElementById("new-message");
    const messagesContainer = document.querySelector("#messages");

    //#region before refactory
    // POST with form data
    // messageForm.addEventListener("submit", event => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     fetch("http://localhost:3434/messages", {
    //         method: "POST",
    //         body: formData
    //     })
    // })

    // POST with JSON
    // messageForm.addEventListener("submit", event => {
    //     event.preventDefault();
    //     const { currentTarget } = event
    //     const headers = new Headers({
    //         "Accept": "application/json, text/plain, */*",
    //         "Content-Type": "application/json"
    //     });
    //     fetch("http://localhost:3434/messages", {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify({ body: "Hello World" })
    //     }).then(() => {
    //         console.log('Message created!');
    //         refreshMessages();
    //         currentTarget.reset();
    //     })
    // })


    // messagesContainer.addEventListener("click", event => {
    //     const { target } = event;
    //     console.log(target.dataset.id);
    //     if (target.matches('.delete-link')) {
    //         // if it has the class .delete-link then we will delete
    //         fetch(`http://localhost:3434/messages/${target.dataset.id}`, { method: "DELETE" })
    //             .then(() => {
    //                 refreshMessages();
    //             })
    //     }
    // })
    //#endregion

    //#region refactory
    const refreshMessages = (isFilter = false) => {
        Message.index()
            .then(data => {
                const messagesContainer = document.querySelector("#messages");
                let messagesHTML = "";
                console.log(data)
                // isFilter => true
                // check the flagged? 
                // isFilter => false
                // display all the messages
                if (isFilter) {
                    data.forEach(message => {
                        if (message.flagged) {
                            messagesHTML += `
                            <li style="background:${message.flagged ? "lightblue" : "lightpink"}">
                                <strong>${message.username}</strong> | 
                                ${message.body}
                                <button>
                                <i data-id=${message.id} data-flag=${message.flagged} class="flag-link">flag</i>
                                </button>
                                <i data-id=${message.id} class="delete-link">x</i>
                            </li>
                        `;
                        }
                    });
                } else {
                    data.forEach(message => {
                        messagesHTML += `
                        <li style="background:${message.flagged ? "lightblue" : "lightpink"}">
                            <strong>${message.username}</strong> | 
                            ${message.body}
                            <button>
                            <i data-id=${message.id} data-flag=${message.flagged} class="flag-link">flag</i>
                            </button>
                            <i data-id=${message.id} class="delete-link">x</i>            
                        </li>
                    `;
                    });
                }

                messagesContainer.innerHTML = messagesHTML;
            })
    }
    refreshMessages();

    messageForm.addEventListener("submit", event => {
        event.preventDefault();
        const { currentTarget } = event
        const formData = new FormData(currentTarget);
        Message.create({ body: formData.get('body'), username: formData.get('username') }).then(() => {
            console.log('Message created!');
            refreshMessages();
            currentTarget.reset();
        })
    })

    messagesContainer.addEventListener("click", event => {
        const { target } = event;
        if (target.matches('.delete-link')) {
            // if it has the class .delete-link then we will delete
            Message.delete(target.dataset.id)
                .then(() => {
                    refreshMessages();
                })
        }
        if (target.matches('.flag-link')) {
            // send the patch request
            const headers = new Headers({
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            });
            fetch(`http://localhost:3434/messages/${target.dataset.id}`,
                {
                    method: "PATCH",
                    headers: headers,
                    body: JSON.stringify({ flagged: target.dataset.flag === "false" ? true : false })
                }
            ).then(() => {
                refreshMessages();
            })
        }
    })
    //#endregion


    const filterButton = document.getElementById("flag-filter");
    filterButton.addEventListener("click", event => {
        refreshMessages(true);
    })
})

// 
// check the document of the apis 
// 
