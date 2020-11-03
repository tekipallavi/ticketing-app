const rows = 10;
const pageLinkSize = 5;
const rowsPerPageOptions = [10,25,50];
export const staticDataMap  = {
    rows ,
    pageLinkSize,
    rowsPerPageOptions
}

export const tableColumns = [
    {
        "title": "Ticket Id",
        "key": "ticketId",
        "width": "350px"
    },
    {
        "title": "Description",
        "key": "description",
        "width": "200px"
    },
    {
        "title": "Severity",
        "key": "severity",
        "width": "100px"
    },
    {
        "title": "Problem Type",
        "key": "problemType",
        "width": "150px"
    },
    {
        "title": "Status",
        "key": "status",
        "width": "125px"
    },
    {
        "title": "Pincode",
        "key": "pincode",
        "width": "100px"
    },
    {
        "title": "Customer Id",
        "key": "customerId",
        "width": "200px"
    }
];

export const details = ["ticketId", "description", "severity","problemType", "customerId", "status", "customerComments", "opertorComments", "pincode"]