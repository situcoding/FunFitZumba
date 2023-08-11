// routes/clients.js
app.post('/clients', (req, res) => {
    const newClient = req.body;
    const query = "INSERT INTO clients SET ?";
    db.query(query, newClient, (error, results) => {
        if (error) throw error;
        res.json({ id: results.insertId, ...newClient });
    });
});
