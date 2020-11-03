import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {v4 as uuidv4} from 'uuid';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // Remove

  /* onst sampleDataSample = {
    description: ['wire has broken due to climztic changes', 'Router issue', 'Frequnt disconnection', 'Speed issue', 'Customer issue'],
    opertorComments: ['The problem could be solved in 24 hours', 'Maintainance issue', 'Physical damage, Logistics team to alerted.', 'Unservicable area.' ],
    customerId: ['broadband-cus-5472','broadband-cus-2063','broadband-cus-6203','broadband-cus-9132','broadband-cus-5846','broadband-cus-2074', 'broadband-cus-6417','broadband-cus-2107'],
    problemType : ['Physical Damage', 'Service Issue'],
    severity : ['Critical', 'Major', 'Minor'],
    status : ['Open', 'Closed', 'In Progress'],
    pincode : [530008,530009,530007, 530006, 530005, 530004, 530003, 530002, 530001,530011, 530012, 530013, 530014],
    customerComments: ['Need the service immediately', 'Critical issue. Fix immediately', 'Will disconnect if not fixed in 2 hrs.']
  }

  const createSample = () => {
    const x = [];
    for(let i = 0; i< 100; i++ ) {
      x[i] = {};
      Object.keys(sampleDataSample).forEach(key => {
        x[i][key] = sampleDataSample[key][Math.floor(Math.random() * (sampleDataSample[key].length - 0) + 0)];
      })
      x[i]['ticketId'] = uuidv4();
    }

    return x;
  }
  console.log(createSample()); */