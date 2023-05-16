const { User } = require('../models');

const userData = [
    {
        username: 'BigBadRoyTomBoyMcGoy',
        email: 'sillyemail@email.com',
        password: 'RidexGetsRidOfBugsf@st'
    },
    {
       
        username: 'BigSadTomTheTommyTom',
        email: 'notreallyanemail@email.com',
        password: 'youKnowitisRealwhenyoucantasteit'
    },
    {
       
        username: 'littleBadSadMadDad',
        email: 'stilllookingatthisline@email.com',
        password: 'madeupsillyness'
    },
    {
       
        username: 'DenofAncientmalls',
        email: 'timtam@email.com',
        password: 'flimflamwhattawhattabeenbam'
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;