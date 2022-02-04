
const { ZBClient } = require('zeebe-node')

const zbc = new ZBClient({
    camundaCloud: {
        clusterUrl: '',
        clusterId: '',
        clientId: '',
        clientSecret: '',
    },
});
var count = 1;
zbc.createWorker(null, 'unit-test-runner', (job, complete) => {
    count++;
    const testsSucceeded = count%2 === 1;
    console.log(testsSucceeded, count);
    return complete.success({
            testsSucceeded: testsSucceeded
        })
});

