/* =========================================================
   SMARTOFFICE VISITOR MANAGEMENT SYSTEM
   MAIN JAVASCRIPT
   ========================================================= */

/* =========================================================
   API
   ========================================================= */

const API_BASE_URL = "http://localhost:5000/api/visitors";


/* =========================================================
   GENERAL NAVIGATION
   ========================================================= */

function goToPage(page) {
    if (!page) {
        return;
    }

    window.location.href = page;
}


function registerNewVisitor() {
    window.location.href = "visitor-registration.html";
}


function staffLogin() {
    window.location.href = "staff-login.html";
}


function goToDashboard() {
    window.location.href = "dashboard.html";
}


function goToVisitorRequests() {
    window.location.href = "visitor-requests.html";
}


function goToVisitorHistory() {
    window.location.href = "visitor-history.html";
}


function goToCheckIn() {
    window.location.href = "check-in.html";
}


function goToCheckOut() {
    window.location.href = "check-out.html";
}


function goToVisitorPass(visitorId) {

    if (visitorId) {
        window.location.href =
            `visitor-pass.html?id=${encodeURIComponent(visitorId)}`;
    } else {
        window.location.href = "visitor-pass.html";
    }
}


function goBack() {
    window.history.back();
}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    try {
        localStorage.removeItem("smartofficeLoggedIn");
        localStorage.removeItem("staffEmail");
        sessionStorage.removeItem("smartofficeLoggedIn");
        sessionStorage.removeItem("staffEmail");
    } catch (error) {
        console.log("Storage cleanup skipped.");
    }

    window.location.href = "staff-login.html";
}


/* =========================================================
   NAVIGATION ALIASES
   These support different button names that may already
   exist in dashboard.html or other pages.
   ========================================================= */

function openDashboard() {
    goToDashboard();
}


function openVisitorRequests() {
    goToVisitorRequests();
}


function openCheckIn() {
    goToCheckIn();
}


function openCheckOut() {
    goToCheckOut();
}


function openVisitorHistory() {
    goToVisitorHistory();
}


function openVisitorRegistration() {
    registerNewVisitor();
}


function openVisitorRegistrationPage() {
    registerNewVisitor();
}


function openVisitorPass(visitorId) {
    goToVisitorPass(visitorId);
}


/* =========================================================
   MAKE FUNCTIONS AVAILABLE TO INLINE HTML onclick=""
   ========================================================= */

window.goToPage = goToPage;
window.registerNewVisitor = registerNewVisitor;
window.staffLogin = staffLogin;
window.goToDashboard = goToDashboard;
window.goToVisitorRequests = goToVisitorRequests;
window.goToVisitorHistory = goToVisitorHistory;
window.goToCheckIn = goToCheckIn;
window.goToCheckOut = goToCheckOut;
window.goToVisitorPass = goToVisitorPass;
window.goBack = goBack;
window.logout = logout;

window.openDashboard = openDashboard;
window.openVisitorRequests = openVisitorRequests;
window.openCheckIn = openCheckIn;
window.openCheckOut = openCheckOut;
window.openVisitorHistory = openVisitorHistory;
window.openVisitorRegistration = openVisitorRegistration;
window.openVisitorRegistrationPage = openVisitorRegistrationPage;
window.openVisitorPass = openVisitorPass;


/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeNavigation();

    initializeLogin();

    initializeRegistration();

    initializeVisitorRequests();

    initializeVisitorPassButtons();

});


/* =========================================================
   NAVIGATION INITIALIZATION
   ========================================================= */

function initializeNavigation() {

    /*
     * ------------------------------------------------------
     * 1. DATA-PAGE BUTTONS
     *
     * Example:
     * <button data-page="visitor-requests.html">
     * ------------------------------------------------------
     */

    document
        .querySelectorAll("[data-page]")
        .forEach(function (element) {

            element.addEventListener("click", function (event) {

                const page =
                    element.getAttribute("data-page");

                if (page) {

                    event.preventDefault();

                    window.location.href = page;
                }

            });

        });


    /*
     * ------------------------------------------------------
     * 2. DATA-BACK BUTTONS
     * ------------------------------------------------------
     */

    document
        .querySelectorAll("[data-back]")
        .forEach(function (element) {

            element.addEventListener("click", function (event) {

                event.preventDefault();

                window.history.back();

            });

        });


    /*
     * ------------------------------------------------------
     * 3. BUTTONS WITH COMMON CLASS NAMES
     * ------------------------------------------------------
     */

    document
        .querySelectorAll(
            ".logout-btn, .logout-button, [data-logout]"
        )
        .forEach(function (element) {

            element.addEventListener("click", function (event) {

                event.preventDefault();

                logout();

            });

        });


    /*
     * ------------------------------------------------------
     * 4. DASHBOARD / SIDEBAR FALLBACK
     *
     * This handles buttons/links even when the HTML does
     * not contain the correct onclick or data-page.
     * ------------------------------------------------------
     */

    document.addEventListener("click", function (event) {

        const element =
            event.target.closest("button, a");

        if (!element) {
            return;
        }


        /*
         * Do not interfere with buttons that already have
         * explicit visitor actions.
         */

        if (
            element.classList.contains("approve-btn") ||
            element.classList.contains("reject-btn") ||
            element.classList.contains("request-action-btn")
        ) {
            return;
        }


        const text =
            element.textContent
                .trim()
                .replace(/\s+/g, " ")
                .toLowerCase();


        const href =
            element.getAttribute("href");


        /*
         * Logout
         */

        if (
            text === "logout" ||
            element.classList.contains("logout-btn") ||
            element.classList.contains("logout-button")
        ) {

            event.preventDefault();

            logout();

            return;
        }


        /*
         * Visitor Registration
         */

        if (
            text.includes("register a new visitor") ||
            text.includes("register new visitor") ||
            text === "visitor registration" ||
            text === "register visitor"
        ) {

            event.preventDefault();

            registerNewVisitor();

            return;
        }


        /*
         * Visitor Requests
         */

        if (
            text === "visitor requests" ||
            text.includes("visitor requests")
        ) {

            event.preventDefault();

            goToVisitorRequests();

            return;
        }


        /*
         * Check-in
         */

        if (
            text === "check-in" ||
            text === "check in" ||
            text.includes("check-in visitor") ||
            text.includes("check in visitor")
        ) {

            event.preventDefault();

            goToCheckIn();

            return;
        }


        /*
         * Check-out
         */

        if (
            text === "check-out" ||
            text === "check out" ||
            text.includes("check-out visitor") ||
            text.includes("check out visitor")
        ) {

            event.preventDefault();

            goToCheckOut();

            return;
        }


        /*
         * Visitor History
         */

        if (
            text === "visitor history" ||
            text.includes("visitor history")
        ) {

            event.preventDefault();

            goToVisitorHistory();

            return;
        }


        /*
         * Visitor Pass
         */

        if (
            text === "visitor pass" ||
            text.includes("visitor pass")
        ) {

            /*
             * Only redirect if the element does not already
             * contain its own valid href.
             */

            if (!href || href === "#") {

                event.preventDefault();

                goToVisitorPass();

            }

            return;
        }


        /*
         * Dashboard
         */

        if (
            text === "dashboard" ||
            text.includes("dashboard")
        ) {

            if (!href || href === "#") {

                event.preventDefault();

                goToDashboard();

            }

            return;
        }

    });


    /*
     * ------------------------------------------------------
     * 5. FIX EMPTY "#" NAVIGATION
     *
     * Do not allow accidental page jumps for known dashboard
     * actions.
     * ------------------------------------------------------
     */

    document
        .querySelectorAll("a[href='#']")
        .forEach(function (element) {

            const text =
                element.textContent
                    .trim()
                    .toLowerCase();

            if (
                text.includes("visitor request") ||
                text.includes("check-in") ||
                text.includes("check in") ||
                text.includes("check-out") ||
                text.includes("check out") ||
                text.includes("visitor history") ||
                text.includes("register")
            ) {

                element.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                    }
                );

            }

        });

}


/* =========================================================
   STAFF LOGIN
   ========================================================= */

function initializeLogin() {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }


    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const emailInput =
                document.getElementById("email");

            const passwordInput =
                document.getElementById("password");

            const message =
                document.getElementById("loginMessage");


            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";

            const password =
                passwordInput
                    ? passwordInput.value.trim()
                    : "";


            if (!email || !password) {

                if (message) {

                    message.textContent =
                        "Please enter your email and password.";

                }

                return;
            }


            /*
             * Current project login is frontend-only.
             *
             * Backend authentication can be added separately.
             */

            try {

                localStorage.setItem(
                    "smartofficeLoggedIn",
                    "true"
                );

                localStorage.setItem(
                    "staffEmail",
                    email
                );

            } catch (error) {

                console.log(
                    "Could not save login state."
                );

            }


            if (message) {

                message.textContent =
                    "Login successful. Redirecting...";

            }


            setTimeout(function () {

                window.location.href =
                    "dashboard.html";

            }, 500);

        }
    );

}


/* =========================================================
   SHOW / HIDE PASSWORD
   ========================================================= */

function togglePassword() {

    const password =
        document.getElementById("password");

    if (!password) {
        return;
    }


    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


window.togglePassword = togglePassword;


/* =========================================================
   FORGOT PASSWORD
   ========================================================= */

function forgotPassword(event) {

    if (event) {
        event.preventDefault();
    }


    alert(
        "Password recovery will be implemented with staff authentication."
    );

}


window.forgotPassword = forgotPassword;


/* =========================================================
   CONTACT ADMINISTRATOR
   ========================================================= */

function contactAdministrator(event) {

    if (event) {
        event.preventDefault();
    }


    alert(
        "Please contact your office administrator to request staff access."
    );

}


window.contactAdministrator =
    contactAdministrator;


/* =========================================================
   VISITOR REGISTRATION
   ========================================================= */

function initializeRegistration() {

    const visitorRegistrationForm =
        document.getElementById(
            "visitorRegistrationForm"
        );

    if (!visitorRegistrationForm) {
        return;
    }


    visitorRegistrationForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const visitorName =
                document.getElementById(
                    "visitorName"
                );

            const visitorPhone =
                document.getElementById(
                    "visitorPhone"
                );

            const visitorEmail =
                document.getElementById(
                    "visitorEmail"
                );

            const personToMeet =
                document.getElementById(
                    "personToMeet"
                );

            const purpose =
                document.getElementById(
                    "purpose"
                );

            const visitDate =
                document.getElementById(
                    "visitDate"
                );

            const arrivalTime =
                document.getElementById(
                    "arrivalTime"
                );


            const visitorData = {

                name:
                    visitorName
                        ? visitorName.value.trim()
                        : "",

                phone:
                    visitorPhone
                        ? visitorPhone.value.trim()
                        : "",

                email:
                    visitorEmail
                        ? visitorEmail.value.trim()
                        : "",

                personToMeet:
                    personToMeet
                        ? personToMeet.value.trim()
                        : "",

                purpose:
                    purpose
                        ? purpose.value.trim()
                        : "",

                visitDate:
                    visitDate
                        ? visitDate.value
                        : "",

                arrivalTime:
                    arrivalTime
                        ? arrivalTime.value
                        : ""

            };


            /*
             * VALIDATION
             */

            if (
                !visitorData.name ||
                !visitorData.phone ||
                !visitorData.personToMeet ||
                !visitorData.purpose ||
                !visitorData.visitDate ||
                !visitorData.arrivalTime
            ) {

                alert(
                    "Please fill in all required visitor details."
                );

                return;
            }


            /*
             * SEND TO BACKEND
             */

            try {

                const response =
                    await fetch(
                        API_BASE_URL,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    visitorData
                                )
                        }
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    throw new Error(
                        data.message ||
                        "Registration failed"
                    );

                }


                /*
                 * SUCCESS
                 */

                alert(
                    "Visit request submitted successfully!"
                );


                visitorRegistrationForm.reset();


                /*
                 * KEEP THIS WORKING REDIRECT
                 */

                window.location.href =
                    "visitor-requests.html";


            } catch (error) {

                console.error(
                    "Registration error:",
                    error
                );


                alert(
                    "Failed to submit visit request. " +
                    "Please make sure the backend server is running."
                );

            }

        }
    );

}


/* =========================================================
   VISITOR REQUESTS VARIABLES
   ========================================================= */

let requestsTableBody = null;
let pendingCount = null;
let approvedCount = null;
let rejectedCount = null;
let statusFilter = null;
let requestSearch = null;

let allVisitors = [];


/* =========================================================
   INITIALIZE VISITOR REQUESTS
   ========================================================= */

function initializeVisitorRequests() {

    requestsTableBody =
        document.getElementById(
            "requestsTableBody"
        );

    pendingCount =
        document.getElementById(
            "pendingCount"
        );

    approvedCount =
        document.getElementById(
            "approvedCount"
        );

    rejectedCount =
        document.getElementById(
            "rejectedCount"
        );

    statusFilter =
        document.getElementById(
            "statusFilter"
        );

    requestSearch =
        document.getElementById(
            "requestSearch"
        );


    /*
     * If this is not the visitor requests page,
     * stop here.
     */

    if (!requestsTableBody) {
        return;
    }


    /*
     * FILTER
     */

    if (statusFilter) {

        statusFilter.addEventListener(
            "change",
            function () {

                displayVisitorRequests();

            }
        );

    }


    /*
     * SEARCH
     */

    if (requestSearch) {

        requestSearch.addEventListener(
            "input",
            function () {

                displayVisitorRequests();

            }
        );

    }


    /*
     * LOAD DATA
     */

    loadVisitorRequests();

}


/* =========================================================
   LOAD VISITOR REQUESTS
   ========================================================= */

async function loadVisitorRequests() {

    if (!requestsTableBody) {
        return;
    }


    try {

        const response =
            await fetch(
                API_BASE_URL
            );


        if (!response.ok) {

            throw new Error(
                "Failed to load visitors"
            );

        }


        allVisitors =
            await response.json();


        displayVisitorRequests();


    } catch (error) {

        console.error(
            "Visitor request error:",
            error
        );


        requestsTableBody.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    class="empty-request"
                >
                    Failed to load visitor requests.
                </td>
            </tr>
        `;

    }

}


/* =========================================================
   DISPLAY VISITOR REQUESTS
   ========================================================= */

function displayVisitorRequests() {

    if (!requestsTableBody) {
        return;
    }


    let visitors =
        [...allVisitors];


    /*
     * STATUS FILTER
     */

    const selectedStatus =
        statusFilter
            ? statusFilter.value
            : "all";


    if (
        selectedStatus &&
        selectedStatus !== "all"
    ) {

        visitors =
            visitors.filter(
                function (visitor) {

                    /*
                     * Support old "Expected" records.
                     */

                    if (
                        selectedStatus === "Pending" &&
                        visitor.status === "Expected"
                    ) {

                        return true;

                    }


                    return (
                        visitor.status ===
                        selectedStatus
                    );

                }
            );

    }


    /*
     * SEARCH
     */

    const searchText =
        requestSearch
            ? requestSearch.value
                .trim()
                .toLowerCase()
            : "";


    if (searchText) {

        visitors =
            visitors.filter(
                function (visitor) {

                    return (

                        (visitor.name || "")
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        (visitor.personToMeet || "")
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        (visitor.phone || "")
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        (visitor.email || "")
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        (visitor.purpose || "")
                            .toLowerCase()
                            .includes(searchText)

                    );

                }
            );

    }


    /*
     * COUNTS
     */

    const pendingVisitors =
        allVisitors.filter(
            function (visitor) {

                return (
                    visitor.status === "Pending" ||
                    visitor.status === "Expected"
                );

            }
        );


    const approvedVisitors =
        allVisitors.filter(
            function (visitor) {

                return (
                    visitor.status === "Approved"
                );

            }
        );


    const rejectedVisitors =
        allVisitors.filter(
            function (visitor) {

                return (
                    visitor.status === "Rejected"
                );

            }
        );


    if (pendingCount) {

        pendingCount.textContent =
            pendingVisitors.length;

    }


    if (approvedCount) {

        approvedCount.textContent =
            approvedVisitors.length;

    }


    if (rejectedCount) {

        rejectedCount.textContent =
            rejectedVisitors.length;

    }


    /*
     * NO RESULTS
     */

    if (visitors.length === 0) {

        requestsTableBody.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    class="empty-request"
                >
                    No visitor requests found.
                </td>
            </tr>
        `;

        return;
    }


    /*
     * TABLE ROWS
     */

    requestsTableBody.innerHTML =
        visitors
            .map(
                function (visitor) {

                    const visitDate =
                        visitor.visitDate
                            ? new Date(
                                visitor.visitDate
                            ).toLocaleDateString()
                            : "-";


                    const status =
                        visitor.status ||
                        "Pending";


                    return `

                        <tr>

                            <td>

                                <strong>
                                    ${escapeHTML(
                                        visitor.name || "-"
                                    )}
                                </strong>

                            </td>


                            <td>

                                ${escapeHTML(
                                    visitor.phone || "-"
                                )}

                                <br>

                                <small>
                                    ${escapeHTML(
                                        visitor.email || ""
                                    )}
                                </small>

                            </td>


                            <td>

                                ${escapeHTML(
                                    visitor.personToMeet || "-"
                                )}

                            </td>


                            <td>

                                ${escapeHTML(
                                    visitor.purpose || "-"
                                )}

                            </td>


                            <td>

                                ${visitDate}

                            </td>


                            <td>

                                <span
                                    class="status-badge ${getStatusClass(status)}"
                                >
                                    ${escapeHTML(status)}
                                </span>

                            </td>


                            <td>

                                ${
                                    (
                                        status === "Pending" ||
                                        status === "Expected"
                                    )

                                    ?

                                    `

                                    <div class="request-actions">

                                        <button
                                            type="button"
                                            class="approve-btn"
                                            onclick="approveVisitor('${visitor._id}')"
                                        >
                                            Approve
                                        </button>


                                        <button
                                            type="button"
                                            class="reject-btn"
                                            onclick="rejectVisitor('${visitor._id}')"
                                        >
                                            Reject
                                        </button>

                                    </div>

                                    `

                                    :

                                    `<span>-</span>`

                                }

                            </td>

                        </tr>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value == null
            ? ""
            : String(value);


    return div.innerHTML;

}


/* =========================================================
   STATUS CLASS
   ========================================================= */

function getStatusClass(status) {

    if (
        status === "Pending" ||
        status === "Expected"
    ) {

        return "status-expected";

    }


    if (status === "Approved") {

        return "status-approved";

    }


    if (status === "Rejected") {

        return "status-rejected";

    }


    if (status === "Checked-In") {

        return "status-checked-in";

    }


    if (status === "Checked-Out") {

        return "status-checked-out";

    }


    return "status-expected";

}


window.getStatusClass =
    getStatusClass;


/* =========================================================
   APPROVE VISITOR
   ========================================================= */

async function approveVisitor(visitorId) {

    if (!visitorId) {

        alert(
            "Visitor ID is missing."
        );

        return;
    }


    try {

        const response =
            await fetch(
                `${API_BASE_URL}/${visitorId}/approve`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    }
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Approval failed"
            );

        }


        alert(
            "Visitor approved successfully!"
        );


        /*
         * Open visitor pass.
         */

        window.location.href =
            `visitor-pass.html?id=${encodeURIComponent(visitorId)}`;


    } catch (error) {

        console.error(
            "Approval error:",
            error
        );


        alert(
            "Failed to approve visitor."
        );

    }

}


window.approveVisitor =
    approveVisitor;


/* =========================================================
   REJECT VISITOR
   ========================================================= */

async function rejectVisitor(visitorId) {

    if (!visitorId) {

        alert(
            "Visitor ID is missing."
        );

        return;
    }


    const confirmed =
        confirm(
            "Are you sure you want to reject this visitor?"
        );


    if (!confirmed) {
        return;
    }


    try {

        const response =
            await fetch(
                `${API_BASE_URL}/${visitorId}/reject`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    }
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Rejection failed"
            );

        }


        alert(
            "Visitor rejected successfully!"
        );


        await loadVisitorRequests();


    } catch (error) {

        console.error(
            "Rejection error:",
            error
        );


        alert(
            "Failed to reject visitor."
        );

    }

}


window.rejectVisitor =
    rejectVisitor;


/* =========================================================
   CHECK IN VISITOR
   ========================================================= */

async function checkInVisitor(visitorId) {

    if (!visitorId) {

        alert(
            "Visitor ID is missing."
        );

        return;
    }


    try {

        const response =
            await fetch(
                `${API_BASE_URL}/${visitorId}/checkin`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    }
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Check-in failed"
            );

        }


        alert(
            "Visitor checked in successfully!"
        );


        /*
         * Reload current table if this function
         * was called from Visitor Requests.
         */

        if (requestsTableBody) {

            await loadVisitorRequests();

        }

    } catch (error) {

        console.error(
            "Check-in error:",
            error
        );


        alert(
            "Failed to check in visitor."
        );

    }

}


window.checkInVisitor =
    checkInVisitor;


/* =========================================================
   CHECK OUT VISITOR
   ========================================================= */

async function checkOutVisitor(visitorId) {

    if (!visitorId) {

        alert(
            "Visitor ID is missing."
        );

        return;
    }


    try {

        const response =
            await fetch(
                `${API_BASE_URL}/${visitorId}/checkout`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    }
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Check-out failed"
            );

        }


        alert(
            "Visitor checked out successfully!"
        );


        if (requestsTableBody) {

            await loadVisitorRequests();

        }

    } catch (error) {

        console.error(
            "Check-out error:",
            error
        );


        alert(
            "Failed to check out visitor."
        );

    }

}


window.checkOutVisitor =
    checkOutVisitor;


/* =========================================================
   VISITOR PASS
   ========================================================= */

function initializeVisitorPassButtons() {

    /*
     * Print buttons
     */

    document
        .querySelectorAll(
            "[data-print-pass], .print-pass-btn"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    printPass();

                }
            );

        });


    /*
     * Share buttons
     */

    document
        .querySelectorAll(
            "[data-share-pass], .share-pass-btn"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    sharePass();

                }
            );

        });


    /*
     * Download buttons
     */

    document
        .querySelectorAll(
            "[data-download-pass], .download-pass-btn"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    downloadPass();

                }
            );

        });

}


/* =========================================================
   OPEN VISITOR PASS
   ========================================================= */

function openVisitorPassById(visitorId) {

    if (!visitorId) {

        alert(
            "Visitor ID is missing."
        );

        return;
    }


    window.location.href =
        `visitor-pass.html?id=${encodeURIComponent(visitorId)}`;

}


window.openVisitorPassById =
    openVisitorPassById;


/* =========================================================
   PRINT PASS
   ========================================================= */

function printPass() {

    window.print();

}


window.printPass =
    printPass;


/* =========================================================
   SHARE PASS
   ========================================================= */

function sharePass() {

    const passIdElement =
        document.getElementById(
            "passId"
        );

    const visitorNameElement =
        document.getElementById(
            "passVisitorName"
        );


    const passId =
        passIdElement
            ? passIdElement.textContent
            : "";


    const visitorName =
        visitorNameElement
            ? visitorNameElement.textContent
            : "";


    const shareText =
        `SmartOffice Visitor Pass\n` +
        `Visitor: ${visitorName}\n` +
        `Pass ID: ${passId}`;


    /*
     * Browser Web Share API
     */

    if (
        navigator.share
    ) {

        navigator.share({

            title:
                "SmartOffice Visitor Pass",

            text:
                shareText

        }).catch(
            function (error) {

                console.log(
                    "Share cancelled:",
                    error
                );

            }
        );

    } else {

        /*
         * Fallback
         */

        alert(
            shareText
        );

    }

}


window.sharePass =
    sharePass;


/* =========================================================
   DOWNLOAD PASS
   ========================================================= */

function downloadPass() {

    /*
     * Browser print dialog can be used
     * to save the pass as PDF.
     */

    window.print();

}


window.downloadPass =
    downloadPass;


/* =========================================================
   FINAL SAFETY CHECK
   ========================================================= */

console.log(
    "SmartOffice script.js loaded successfully."
);