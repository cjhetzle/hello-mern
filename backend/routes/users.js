import UserModel from '../models/User'

export default (app) => {

    app.get('/v1/users', async (req, res) => {
        const users = await UserModel.find() || [];
        res.send(users);
    })

    app.get('/v1/users/:id', async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
            if (user) {
                res.send(user);
            } else {
                res.status(404).end();
            }
        } catch (e) {
            res.status(404).end();
        }
    })

    app.post('/v1/users', async (req, res) => {
        const user = await UserModel.create(req.body);
        if (user) {
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    })

    app.put('/v1/users/:id', async (req, res) => {
        const user = await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err) => {
                if (err) {
                    res.status(500).end();
                } else {
                    res.status(200).end();
                }
            }
        )
    })

    app.delete('/v1/users/:id', async (req, res) => {
        const user = await UserModel.findByIdAndDelete(
            req.params.id,
            req.body,
            (err) => {
                if (err) {
                    res.status(500).end()
                } else  {
                    res.status(200).end()
                }
            }
        )
    })
}