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


export const detailData = [
    
    {
        "title": "Description",
        "key": "description"
    },
    {
        "title": "Severity",
        "key": "severity"
    },
    {
        "title": "Problem Type",
        "key": "problemType"
    },    
    {
        "title": "Pincode",
        "key": "pincode"
    },
    {
        "title": "Customer Id",
        "key": "customerId"
    },
    {
        "title": "Customer Comments",
        "key": "customerComments"
    }
];



export const details = ["ticketId", "description", "severity","problemType", "customerId", "status", "customerComments", "opertorComments", "pincode"]

export const createTicketFormFields = [ {
    label: 'Description',
    type: 'textarea',
    value: '',
    formControlName: 'description',
    dataType: 'string'
  },{
    label: 'Severity',
    type: 'dropdown',
    value: '',
    formControlName: 'severity',
    dataType: 'string',
    options: ['Critical','Major','Minor']
  },{
    label: 'Problem Type',
    type: 'dropdown',
    value: '',
    formControlName: 'problemType',
    dataType: 'string',
    options:['Physical Damage', 'Service Issue']
  },{
    label: 'Customer Id',
    type: 'input',
    value: '',
    formControlName: 'customerId',
    dataType: 'string'
  },{
    label: 'Pin Code',
    type: 'input',
    value: '',
    formControlName: 'pincode',
    dataType: 'number'
  }];