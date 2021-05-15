const express = require('express');
const router = express.Router();
const users = [{username:'Alan Teo', first_name: 'Alan', last_name: 'Teo', email: 'alanteo1006@outlook.com'}];

// Task1.1
router.get('/', (req, res, next) => {
    res.render('pages/form', { 
        title: 'Form', 
        path: '/form', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

// Task1.1
router.get('/users', (req, res, next) => {
    res.write('<html>');
    res.write('<body>');
    
    res.write('<head>');
    res.write('<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />');
    res.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>');
    res.write('<script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>');
    res.write('<link rel="stylesheet" type="text/css" href="/stylesheets/main.css" />');
    res.write('</head>');

    res.write('<table class="table">');
    res.write('<thead>');
    res.write('<tr>');
    res.write('<th>Username</th>');
    res.write('<th>First Name</th>');
    res.write('<th>Last Name</th>');
    res.write('<th>Email</th>');
    res.write('</tr>');
    res.write('</thead>');

    res.write('<tbody>');
    for (const user of users) {
        res.write('<tr>');
        res.write(`<td>${user.username}</td>`);
        res.write(`<td>${user.first_name}</td>`);
        res.write(`<td>${user.last_name}</td>`);
        res.write(`<td>${user.email}</td>`);
        res.write('</tr>');
    }

    res.write('</tbody>');
    res.write('</table>');
    // End tags
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
});

// Task1.4
router.post('/create-user', (req, res, next) => {
    const newUser = {...req.body};
    // Console log seen in terminal, may be encoded, but isn't important for now
    console.log("New User: ", newUser);
    
    // Task1.5
    users.push(newUser);
    // Remain on './activities' url.
    res.writeHead(302, {'Location': 'users'});
    res.end();
});

module.exports = router;